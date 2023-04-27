import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //mapping of action and reducer function addItem is action
        // here state is prev state and action is data coming from components
      addItem: (state, action)=>{
        //modifying the state
      state.items.push(action.payload)
      },
      removeCart:(state, action)=>{
        state.items.pop()
      },
      clearCart: (state)=>{
        state.items =[]
      }
    }
})
export const{addItem, removeCart, clearCart} =cartSlice.actions

//reducer  not reducers bcoz exporting one reducer which has all reducer function for cartSlice
export default cartSlice.reducer