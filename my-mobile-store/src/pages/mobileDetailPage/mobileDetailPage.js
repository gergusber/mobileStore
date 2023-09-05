import { json, useRouteLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react';
import MobileDetail from '../../components/mobile/mobile-detail/MobileDetail'

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const MobileDetailPage = () => {
  const { mobile } = useRouteLoaderData('mobile-detail')

  return <>
    <CssBaseline />

    <Suspense fallback={<p style={{ textAlign: 'center' }} >Loading...</p>}>
      <Await resolve={mobile}>
        {(loadedMobileData) => <>
          <Container>
            <Box sx={{ m: 2 }}>
              <MobileDetail mobile={loadedMobileData} />
            </Box>
          </Container>
        </>}
      </Await>
    </Suspense>
  </>
};

const loadEvent = async (id) => {
  const response = await fetch(`https://itx-frontend-test.onrender.com/api/product/${id}`);
  if (!response.ok) {
    return json(
      { message: 'Could not fetch events' },
      { status: 500 }
    )
  }

  return await response.json();
}

export async function loader({ request, params }) {
  const { mobileId } = params

  return defer({
    mobile: await loadEvent(mobileId) // wait for the event and load the page without loading the events, .
  });
}

export default MobileDetailPage