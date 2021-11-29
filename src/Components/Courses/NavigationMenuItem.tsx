const NavigationMenuItem: React.FC<any> = ({label}) => {
  const url = "/" + label.toLowerCase().trim().replace(" ", "-");
  return(
      <a href={url}>
        <div className="item__image">
          
        </div>
        <h3>{label}</h3>
      </a>  
  );
};

export default NavigationMenuItem;