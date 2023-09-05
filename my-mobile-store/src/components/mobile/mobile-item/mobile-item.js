import classes from './mobile-item.module.css';
// import Card from '../../ui/card/Card'
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


const MobileItem = (props) => {

  const price = `$${props.price ?? 0}`;
  const model = `${props.brand} - ${props.model}`;

  return (
    <div className={classes.flexItem}>

      <Card variant="outlined" >
        <CardContent >
          <CardMedia
            component="img"
            object-fit={true}
            image={props.imgUrl}
            alt={model}
          />
          {/* <img src={props.imgUrl} alt={model} className={classes.img} /> */}
          
          <Typography sx={{ mb: 1.5 }} color="text.secondary" >
            <Link to={`/mobile/${props.id}`}>{model}</Link>
          </Typography>

          <Typography variant="body2">
            <div className={classes.price}>{price}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileItem;
