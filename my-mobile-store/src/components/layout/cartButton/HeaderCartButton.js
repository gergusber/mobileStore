import CartIcon from '../../cart/cartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => { //onClick={props.onClick}
  const btnClasses = `${classes.button}`;

  let numberOfCartItems = 0;
  return (
    <button className={btnClasses}  > 
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
