import './NavigationMenu.css';
const NavigationMenuItem: React.FC<any> = ({label}) => {
  const url = "/" + label.toLowerCase().trim().replace(" ", "-");
  return(
    <a href={url}>{label}</a>
  );
};

export default NavigationMenuItem;