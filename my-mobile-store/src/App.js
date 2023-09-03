
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Header from './components/layout/header/header';
import SearchBar from './components/layout/searchbar/searchbar';
import Mobiles from './components/mobile/Mobiles'
import Cart from './components/cart/cart';
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <div className="App">
        <Header onShowCart={showCartHandler}/>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <main>
          <SearchBar />
          <Mobiles />
        </main>
      </div>
    </>
  );
}

export default App;
