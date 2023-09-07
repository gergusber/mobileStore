import CartContext from './CartContext';
import React, { useReducer } from 'react';
import reduce from './CartReducers';
import { ACTIONS } from './CartActions';

const DEFAULT_CONTEXT = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  try {
    return reduce(state, action);
  } catch (error) {
    return DEFAULT_CONTEXT;
  }
};

const CartProvider = (props) => {
  const [cardState, cartDispatchAction] = useReducer(cartReducer, DEFAULT_CONTEXT);

  const addItemToCartHandler = (item) => {
    cartDispatchAction({ type: ACTIONS.ADD, item });
  };

  const removeItemToCartHandler = (id) => {
    cartDispatchAction({ type: ACTIONS.REMOVE, id });
  };

  const cartContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
