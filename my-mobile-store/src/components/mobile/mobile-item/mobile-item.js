import classes from './mobile-item.module.css';
import Card from '../../ui/card/Card'
const MobileItem = (props) => {

  const price = `$${props.price ?? 0}`;
  const model = `${props.brand} - ${props.model}`;

  return (
    <div className={classes.flexItem}>
      <Card>
        <img src={props.imgUrl} alt={model} className={classes.img} />
        <h3>{model}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </Card>
    </div>
  );
};

export default MobileItem;
