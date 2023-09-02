import storeImg from '../../../assets/mobileStore.jpg';
import classes from './header.module.css';
import HeaderCartButton from '../cartButton/HeaderCartButton'
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Mobile store</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={storeImg} alt='MobileStore' />
      </div>
    </>
  );
};

export default Header;
