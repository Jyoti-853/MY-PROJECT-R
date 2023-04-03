import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer  from './shimmer'
import {useRestaurantMenu} from '../utils/useRestaurantMenu'

function RestaurantMenu() {
  const { restaurantId } = useParams();

//Now  resturantById is coming from custom hook
  const restaurantMenuById= useRestaurantMenu(restaurantId)

  return restaurantMenuById?.length===0 ? <Shimmer/>: (
    <div>
      RestaurantMenu
      <h1>{restaurantMenuById?.id}</h1>
      <h2>{restaurantMenuById?.name}</h2>
      <ul>
      {restaurantMenuById?.menu.map((item, index) => {
         return <li key={index}>{item}</li>
      })}
        </ul>
    </div>
  );
}

export default RestaurantMenu;
