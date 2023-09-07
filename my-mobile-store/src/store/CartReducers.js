import { ACTIONS } from './CartActions';


const getItemStateIndex = (items, filterParam) => {
  return items.findIndex((item) => item.idFilter === filterParam);
}

const addItem = (state, action) => {
  const updatedTotalAmount = +state.totalAmount + +action.item.price * +action.item.amount;
  const idFilter = `${action.item.id}${action.item.memory}${action.item.color}`;
  const existingCartItemIndex = getItemStateIndex(state.items, idFilter);
  const existingCartItem = state.items[existingCartItemIndex];

  let updatedItems;
  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + action.item.amount,
    };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.items.concat({ ...action.item, idFilter });
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const removeItem = (state, action) => {
  const existingCartItemIndex = getItemStateIndex(state.items, action.id)
  const existingItem = state.items[existingCartItemIndex];

  const updatedTotalAmount = state.totalAmount - existingItem.price;

  let updatedItems;
  if (existingItem.amount === 1) {
    updatedItems = state.items.filter((item) => item.idFilter !== action.id);
  } else {
    const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
    updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const reduce = (state, action) => {
  const ACTIONS_STRATEGY = {
    [ACTIONS.ADD]: addItem,
    [ACTIONS.REMOVE]: removeItem,
  };

  const strategy = ACTIONS_STRATEGY[action.type];

  if (!strategy) {
    throw new Error('Action type not found');
  }

  return strategy(state, action);
};

export default reduce;
