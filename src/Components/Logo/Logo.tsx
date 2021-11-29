import styles from 'classnames';
import classes from './Logo.module.css';
import {NavLink} from 'react-router-dom';


const Logo = () => {
  return (
    <div className={classes.logo}>
      <NavLink to="/" >
        <span className={styles(classes.logo, classes.logoBlue)}>Study</span>
        <span className={styles(classes.logo, classes.logoRed)}>Coach</span>
      </NavLink>
    </div>        
  );
}
export default Logo;