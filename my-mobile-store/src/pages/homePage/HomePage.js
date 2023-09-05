import Mobiles from '../../components/mobile/Mobiles';
import SearchBar from '../../components/layout/searchbar/searchbar';
import { json, useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Homepage = () => {
  const { mobileList } = useLoaderData() // , isError, message

  return <>
    <CssBaseline />

    <SearchBar />
    <Suspense fallback={<p style={{ textAlign: 'center' }} >Loading...</p>}>
      <Await resolve={mobileList}>
        {(mobile) => <>
          <Container>
            <Box sx={{ m: 2 }}>
              <Mobiles mobiles={mobile} />
            </Box>
          </Container>
        </>}
      </Await>
    </Suspense>
  </>
};

const loadEvents = async () => {
  const response = await fetch('https://itx-frontend-test.onrender.com/api/product');
  if (!response.ok) {
    return json({ message: 'Could not fetch events' },
      { status: 500 })
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader() {
  return defer({
    mobileList: loadEvents()
  })
}

export default Homepage