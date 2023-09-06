import MobileItem from './mobile-item/mobile-item';
 import Grid from '@mui/material/Grid';

const Mobiles = ({ mobiles }) => {

  return (
    <>
      <Grid container item spacing={4}>
        {mobiles.map(item => <>
          <Grid item xs={6} md={3} key={item.id}>
            <MobileItem {...item} key={item.id} />
          </Grid>
        </>)}
      </Grid>
    </>
  );
};

export default Mobiles;
