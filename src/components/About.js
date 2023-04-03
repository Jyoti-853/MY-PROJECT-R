import React, {useState, useEffect} from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const About = () => {
   const [count, setCount]=useState(0)

   useEffect(()=>{
      //setCount(2)
   },[])
 return(
 <>
    <h1>About page {count} </h1>
     {/* if we render Profile component like that then it will always show profile component always.
  <Profile/> 
   if we render Outlet compoent then it will render children of About component and it will only render if we  go inside About component like about/profile. */}
    <Outlet/> 
 {/* Passing function  as props from parent to child, here state value count is changing from its child. */}
    <Profile setcountfunc={setCount}/>
  </>
 )
};

export default About;
