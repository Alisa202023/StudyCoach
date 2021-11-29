import NavigationMenuItem from "./NavigationMenuItem";

const NavigationMenuList: React.FC<any> = ({courses}) => {
  const List = courses.map((item:any, id:any) => {
    return(
      <div key={id}>
        <NavigationMenuItem {...item} />
      </div>
    ) ;   
  });

  return(
    <div className="item">
      {List}
    </div>
  );
};


export default NavigationMenuList;