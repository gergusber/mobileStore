import MobileItem from './mobile-item/mobile-item';
import classes from './Mobiles.module.css'


const Mobiles = ({mobiles}) => {
  return (
    <>
      <div className={classes.flexContainer}>
        {mobiles.map(item => <MobileItem {...item} key={item.id} />)}
      </div>
    </>
  );
};

export default Mobiles;
