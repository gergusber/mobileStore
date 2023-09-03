
import React from 'react';
import classes from './cart.module.css';
import Button from '@mui/material/Button'
import Modal from '../ui/modal/modal';

const Cart = (props) => {
  const cartItems = [{
    "id": "uR460qzFR1toHbdnkG7wg",
    "brand": "Acer",
    "model": "beTouch E120",
    "price": "70",
    "imgUrl": "https://itx-frontend-test.onrender.com/images/uR460qzFR1toHbdnkG7wg.jpg"
  },
  {
    "id": "A6O_GKJO7wULBR_6N6bMT",
    "brand": "Acer",
    "model": "Stream",
    "price": "130",
    "imgUrl": "https://itx-frontend-test.onrender.com/images/A6O_GKJO7wULBR_6N6bMT.jpg"
  },].map(X => <li key={X.id}>{X.brand + ' - ' + X.model}</li>);

  return (
    <Modal onClose={props.onHideCart}>
      <div className={''}>
        <ul>
          {cartItems}
        </ul>
        <div className={classes.total}>
          <span>total amount</span>
          <span>505</span>
        </div>
        <div className={classes.actions} >
          <Button onClick={props.onHideCart}>close</Button>
          <Button>order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
