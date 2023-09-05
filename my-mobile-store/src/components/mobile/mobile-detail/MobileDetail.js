import classes from './MobileDetail.module.css'
import Card from '@mui/material/Card'; 
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';

function MobileDetail({ mobile }) {
  const typeInternalMemory = mobile.options.storages.map(label => {
    const lbl = label.name.replace(/ /g, "").length > 0 ? label.name.replace(/ /g, "") : 'No especificado';
    return <FormControlLabel control={<Radio value={lbl} />} label={lbl} key={lbl} />
  });

  const availableColors = mobile.options.colors.map(label => {
    const lbl = label.name ?? 'No especificado';
    return <FormControlLabel control={<Radio
      value={lbl}
      sx={{
        color: label.code,
        '&.Mui-checked': {
          color: label.code,
        },
      }} />} label={lbl} key={lbl} />
  });
  const [valueMemory, setValueMemory] = useState(null);
  const [valueColor, setValueColor] = useState(null);

  const handleChangeMemory = (event) => {
    setValueMemory(event.target.value);
  };

  const handleChangeColor = (event) => {
    setValueColor(event.target.value);
  };


  //add actions to modal add to cart and use ctx provider actions

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignContent: 'center' }}>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
          component="img"
          sx={{width: 200 }}
          image={mobile.imgUrl}
          alt={mobile.brand}
        />
           </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              <h2>{`${mobile.brand} ${mobile.model}`}</h2>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              price : {`$ ${mobile.price}`}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <div className={classes.mobileProperties}>
              <div className={classes.property}>
                <strong>Marca:</strong> {mobile.brand?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Modelo:</strong> {mobile.model?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Precio:</strong> ${mobile.price?? "-"}
              </div>
              <div className={classes.property}>
                <strong>CPU:</strong> {mobile.cpu?? "-"}
              </div>
              <div className={classes.property}>
                <strong>RAM:</strong> {mobile.ram?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Sistema Operativo:</strong> {mobile.os?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Resolución de pantalla:</strong> {mobile.displayResolution?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Batería:</strong> {mobile.battery?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Cámaras:</strong> {mobile.primaryCamera?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Dimensiones:</strong> {mobile.dimentions?? "-"}
              </div>
              <div className={classes.property}>
                <strong>Peso:</strong> {mobile.weight ?? "-"} g
              </div>
            </div>
          </Box>
          <Box sx={{ display: 'flex',
                     justifyContent: 'flex-start', 
                     justifyItems: 'center', pl: 1, pb: 1 }}>
            <div className={classes.property}>
              <strong>Almacenamiento:</strong>
              <RadioGroup value={valueMemory} onChange={handleChangeMemory}>
                {typeInternalMemory}
              </RadioGroup>
            </div>

            <div className={classes.property}>
              <strong>Colores:</strong>
              <RadioGroup value={valueColor} onChange={handleChangeColor}>
                {availableColors}
              </RadioGroup>
            </div>
          </Box>
        </Box>
      </Box>
    </Card >
  );
};

export default MobileDetail;
