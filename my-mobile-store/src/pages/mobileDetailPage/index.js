import MobileDetail from '../../components/mobile/mobile-detail/MobileDetail'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoadingPage } from '../../components/layout/loading'
import { CssBaseline, Container, Box } from '@mui/material';
import { useGetMobileDetail } from "../../hooks/mobilesHook";
import { Link, useParams } from 'react-router-dom';


const MobileDetailPage = () => {
  const { mobileId } = useParams();
  const { data: mobile, isLoading } = useGetMobileDetail(mobileId);
  return <>
    <CssBaseline />
    <Link to="/"><ArrowBackIcon /> </Link>
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
