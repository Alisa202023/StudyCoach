import "../../App.css";
import './NavigationMenu.css';
import NavigationMenuItem from "./NavigationMenuItem";

const NavigationMenuList: React.FC<any> = ({menu}) => {
  const List = menu.map((item:any, index:any) => {
    return(
      <li key={index}>
        <NavigationMenuItem {...item} />
      </li>
    ) ;   
  });

  return(
    <ul>
      {List}
    </ul>
  );
};


export default NavigationMenuList;