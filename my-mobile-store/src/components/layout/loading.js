import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingPage = () => {

  return <Box sx={{ display: 'flex' }}  
  display="flex"
  justifyContent="center"
  alignItems="center"
>
  <CircularProgress />
</Box>
}