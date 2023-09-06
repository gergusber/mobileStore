
import React, { useContext } from 'react';
import classes from './cart.module.css';
import Button from '@mui/material/Button'
import Modal from '../ui/modal/modal';
import CartContext from "../../store/CartContext";
import CartItem from './cartContext/CartItem'


const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const cartItemRemoveHandler = item => {
    console.log('Filter:',item);
    cartCtx.removeItem(item.filter)
  }
  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) =>
        <CartItem key={`${item.id}${item.memory}${item.color}`}
          name={`${item.brand} ${item.model}`}
          amount={item.amount}
          price={item.price}
          options={`${item.memory} ${item.color}`}
          onRemove={cartItemRemoveHandler.bind(null, { filter: `${item.id}${item.memory}${item.color}` })}
          onAdd={cartItemAddHandler.bind(null, item)}
        />)}
    </ul>)


  return (
    <Modal onClose={props.onHideCart}>
      <div className={''}>
        <ul>
          {cartItems}
        </ul>
        <div className={classes.total}>
          <span>total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions} >
          <Button onClick={props.onHideCart}>close</Button>
          {hasItems && <Button className={classes.button}>order</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
