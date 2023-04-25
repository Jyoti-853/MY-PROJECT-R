import { createContext } from "react";

const UserContext=createContext({
    user:{
        title:"Jyoti",
        email:'jyoti@test.com'
    }
})

export default UserContext