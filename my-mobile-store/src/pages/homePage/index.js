import Mobiles from '../../components/mobile/Mobiles';
import SearchBar from '../../components/layout/searchbar/searchbar';
import { CssBaseline, Container, Box } from '@mui/material';
import { useState } from 'react';
import { LoadingPage } from '../../components/layout/loading';
import { NoContent } from '../../components/layout/noContent';
import { useMobiles } from '../../hooks/mobilesHook';

const Homepage = () => {
  const [searchParam, setSearchParam] = useState(null); // State for search parameter
  const { data, isLoading } = useMobiles(searchParam);

  const searchMobileHandler = (searchParameter) => {
    setSearchParam(searchParameter);
  };

  return (
    <>
      <CssBaseline />
      <SearchBar searchMobiles={searchMobileHandler} />

      {isLoading && <LoadingPage />}
      {!isLoading && !data?.length && <NoContent />}
      {!isLoading && (
        <Container>
          <Box sx={{ m: 2 }}>
            <Mobiles mobiles={data} />
          </Box>
        </Container>
      )}
    </>
  );
};

export default Homepage;
