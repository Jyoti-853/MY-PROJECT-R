import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer  from './shimmer'
import {useRestaurantMenu} from '../utils/useRestaurantMenu'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


function RestaurantMenu() {
  const { restaurantId } = useParams();

//Now  resturantById is coming from custom hook
  const restaurantMenuById= useRestaurantMenu(restaurantId)
  const dispatch =useDispatch()

 const handleAddItem=(item)=>{
  dispatch(addItem(item))
}
  return restaurantMenuById?.length===0 ? <Shimmer/>: (
    <div>
      RestaurantMenu
      <h1>{restaurantMenuById?.id}</h1>
      <h2>{restaurantMenuById?.name}</h2>
      <ul>
      {restaurantMenuById?.menu.map((item, index) => {
         return <li key={index}>{item} <button onClick={()=>handleAddItem(item)}> Add </button> </li>
         
      })}
        </ul>
       
    </div>
  );
}

export default RestaurantMenu;
