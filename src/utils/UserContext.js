import { createContext } from "react";

const UserContext=createContext({
    user:{
        title:"Jyoti",
        email:'jyoti@test.com'
    }
})

//THis we use when we have multiple context and want developer tool to track the names of my context.
UserContext.displayName="UserContext"

export default UserContext