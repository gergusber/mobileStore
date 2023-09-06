import Mobiles from '../../components/mobile/Mobiles';
import SearchBar from '../../components/layout/searchbar/searchbar';
import { LoadingPage } from '../../components/layout/loading'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useGetAllMobiles } from "../../hooks/mobilesHook";
import React, { useState } from 'react';

const Homepage = () => {

  const { data, isLoading } = useGetAllMobiles();
  const [filteredMobiles, setFilteredMobiles] = useState(null); // State for filtered mobiles

  const searchMobileHandler = (searchParameter) => {
    const filteredList = !data?.length ? null : data.filter((mobile) => {
      return mobile.model.toLowerCase().includes(searchParameter.toLowerCase());
    });
    console.log(filteredList);
    setFilteredMobiles(filteredList);
  }

  return <>
    <CssBaseline />
    <SearchBar searchMobiles={searchMobileHandler} />
    {isLoading && <LoadingPage />}

    {!isLoading && !data?.length && <p> No Content</p>}

    {!isLoading && <Container>
      <Box sx={{ m: 2 }}>
        <Mobiles mobiles={data} />
      </Box>
    </Container>}
  </>
};

export default Homepage