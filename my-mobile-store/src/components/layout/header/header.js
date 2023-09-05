import storeImg from '../../../assets/mobileStore.jpg';
import classes from './header.module.css';
import HeaderCartButton from '../cartButton/HeaderCartButton'
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <Link style={{ textDecoration: 'none', color: 'white'  }} to={`/`} >
          <h1>Mobile store</h1>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div className={classes['main-image']}>
        <img src={storeImg} alt='MobileStore' />
      </div>
    </>
  );
};

export default Header;
