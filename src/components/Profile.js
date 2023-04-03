import React, {useState, useEffect} from 'react';
const Profile =({setcountfunc})=>{
//const[count2, setCOunt2]= useState(5)
    useEffect(()=>{   
        console.log('profile useEffect')
        //setCOunt2(7)
        //props.setCount(4)

        //calling its parent function and change the state of parent, here we are changing the state of parent from its child
        setcountfunc(3)
        
    },[])
    console.log('profile before return')
return(
    <>
    <h2>My profile </h2>
    {console.log('profile after return')}
    </>
)
}
export default Profile