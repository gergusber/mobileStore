import classes from './Error.module.css';
import { useRouteError } from 'react-router-dom'
import SearchBar from '../../components/layout/searchbar/searchbar';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error ocurred';
  let message = 'something went wrong'

  if (error.status === 500)
    message = error.data.message

  if (error.status === 404) {
    title = 'Not found.'
    message = 'Could not find resource or page'
  }


  return (<>
    <CssBaseline />
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
      >
        <DoNotDisturbIcon className={classes.svg_icons} />
        <Typography variant="h3" style={{ color: 'black' }}>
          {title}
        </Typography>

        <Typography variant="h3" style={{ color: 'black' }}>
          {message}
        </Typography>

      </Box>
    </Container>
  </>)
};

export default ErrorPage