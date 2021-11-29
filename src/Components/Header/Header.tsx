import Logo from './../Logo/Logo';
import styles from 'classnames';
import  '../../App.css';
import classes from './Header.module.css';
import NavigationMenu from './../NavigationMenu/NavigationMenu';
import NavigationMenuList from './../NavigationMenu/NavigationMenuList';
import Button from '@material-ui/core/Button';
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';

const Header = () => {
  const menuData = [
    {label: 'About'},
    {label: 'Courses'},
    {label: 'Contacts'}
  ];
  
  const BtnValue = ['Sign in', 'Sign up'];

  const CustomColorButtons = createTheme({
    typography: {
      fontFamily:'RobotoMedium',
    },
    palette: {
      primary: {
        main: "#fff",
        contrastText: "#1D0073"
      },
      secondary: {
        main: "#1D0073"
      }
    },
    overrides: {
      MuiButton: {
        containedPrimary:{
          "&:hover": {
            backgroundColor: '#7B0B2D',
            color: '#fff',
          },
        },
      },
    },
  });

  return (
    <header>
      <div className={styles(classes.header, classes.container)}>
        <Logo/>
        <NavigationMenu>
          <NavigationMenuList menu = {menuData}/>
        </NavigationMenu>

        <div className={classes.buttons}>
        <ThemeProvider theme={CustomColorButtons}>
          <Button color="primary" variant="contained">{BtnValue[0]}</Button>      
          <Button color="secondary" variant="contained">{BtnValue[1]}</Button>   
        </ThemeProvider>
          
        </div>
      </div>
    </header>
  );
};
export default Header;