import "../../App.css";
import NavigationCourses from "./NavigationCourses";
import NavigationCoursesList from "./NavigationCoursesList";

const Courses: React.FC = () => {

  const curses = [
    {label: 'Coding'},
    {label: 'Designer'},
    {label: 'Marketing'},
    {label: 'Management'},
    {label: 'Analytics'},
    {label: 'Developer games'},
    {label: 'Creative'},
    {label: 'Business'}
  ];
    return (
      <section>
        <div className="courses">
          <a href="#"><h2>Courses</h2></a>
          <NavigationCourses> 
            <NavigationCoursesList courses = {curses}/>
          </NavigationCourses>
        </div>  
      </section>
     
    );
}

export default Courses;