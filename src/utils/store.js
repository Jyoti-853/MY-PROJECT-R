import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

//Creating our store which has different slices , right now it is empty 
const store=configureStore({
    reducer:{
        cart: cartSlice
    }

})
export default store