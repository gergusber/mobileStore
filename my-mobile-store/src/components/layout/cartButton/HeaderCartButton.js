import CartIcon from '../../cart/cartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from "../../../store/CartContext";
import { useContext } from 'react'

const HeaderCartButton = (props) => { 
  const btnClasses = `${classes.button}`;
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0); 

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
