import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/layout/header/header';
import Cart from '../components/cart/cart';
import { useState } from 'react';
import CartProvider from '../store/CartProvider'
import BreadCrumb from '../components/layout/breadcrumb/breadcrum';



const RootLayout = () => {
  const [cartIsShown, setCartIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const navigation = useNavigation();


  return <>
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <BreadCrumb />

       <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </CartProvider>
  </>
};

export default RootLayout