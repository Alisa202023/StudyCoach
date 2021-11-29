import "../../App.css";
import './NavigationMenu.css';
const NavigationMenu: React.FC = ({children}) => {
    return (
      <div className="menu">
        <div className="menu__button"><span className=""></span></div>
        <nav>
            {children}
        </nav>        
      </div>       
    );
}

export default NavigationMenu;