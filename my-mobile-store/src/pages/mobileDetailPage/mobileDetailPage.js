import MobileDetail from '../../components/mobile/mobile-detail/MobileDetail'
import { LoadingPage } from '../../components/layout/loading'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useGetMobileDetail } from "../../hooks/mobilesHook";
import { useParams } from 'react-router-dom';

const MobileDetailPage = () => {
  const { mobileId } = useParams();
  const { data: mobile, isLoading } = useGetMobileDetail(mobileId);
  return <>
    <CssBaseline />
    {isLoading && <LoadingPage />}
    {!isLoading && <>
      <Container>
        <Box sx={{ m: 2 }}>
          <MobileDetail mobile={mobile} />
        </Box>
      </Container>
    </>
    }
  </>
};


export default MobileDetailPage