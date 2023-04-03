import React, {useState, useEffect} from 'react';
const Profile =({setcountfunc})=>{
    useEffect(()=>{   
        //calling its parent function and change the state of parent, here we are changing the state of parent from its child
        setcountfunc(3)
        
    },[])
return(
    <>
    <h2>My profile </h2>
    </>
)
}
export default Profile