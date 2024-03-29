import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';


export const LoadingPage = () => {
  return <Box sx={{ display: 'flex' }}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress />
  </Box>
}

export const NoContent = () => {
  return <Box sx={{ display: 'flex' }}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <DoNotDisturbIcon />
    <p> No Content</p>
  </Box>
}