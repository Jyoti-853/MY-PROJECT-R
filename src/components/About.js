
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const About = () => {
 return(
 <>
    <h1>About page</h1>
     {/* if we render Profile component like that then it will always show profile component always.
  <Profile/> 
   if we render Outlet compoent then it will render children of About component and it will only render if we  go inside About component like about/profile. */}
    <Outlet/> 
  </>
 )
};

export default About;
