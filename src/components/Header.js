import { Link } from "react-router-dom";
import FoodLogo from '../asset/img/foodvilla.png';

const Title = () => {
    return (
      <a href="/">
        <img
          className="logo"
          alt="Haldiram"
          src={FoodLogo}
        />
      </a>
    );
  };
  
  // REact component(function)
 const Header = () => {
  return (
    <div className="header">
      {/*to render React element add it in curly braces or  any js code should be in  curly  braces*/}
      <Title />
      <div className="nav-items">
        <ul>
         <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/about'>About</Link></li>
          <li><Link to ='/contact'>Contact</Link></li>
          <li><Link>Cart</Link></li>
          <li><Link to ='/instamart'>Instamart</Link></li>
          
        </ul>
      </div>
    </div>
  );
};
export default Header