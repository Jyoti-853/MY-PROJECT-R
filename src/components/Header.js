import { Link } from "react-router-dom";
import {useState, useContext} from 'react'
import FoodLogo from '../asset/img/foodvilla.png';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
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
  const [isLoggedIn, setIsloggedIn]= useState(true)
  const {userList}= useContext(UserContext)

  //subscribing  to specific portion of my store i.e items 
  //we should not subscribe whole store otherwise when store will chnage it will re render component each time, which will be performance isue
  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="header">
      {/*to render React element add it in curly braces or  any js code should be in  curly  braces*/}
      <Title />
      <div className="nav-items">
        <ul>
         <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/about'>About</Link></li>
          <li><Link to ='/contact'>Contact</Link></li>
          <li><Link to ='/instamart'>Instamart</Link></li>
          {isLoggedIn ? <li> <button onClick={()=>setIsloggedIn(false)}> Log Out </button></li> : <li> <button onClick={()=>setIsloggedIn(true)}> Log In </button></li> }
          <li><Link to ='/cart'>Cart -- {cartItems.length} items</Link></li>
        </ul>
        <span className="username">{userList.name}</span>
      </div>
      
    </div>
  );
};
export default Header