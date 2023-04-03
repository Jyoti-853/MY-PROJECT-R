import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer  from './shimmer'
import {useRestaurantMenu} from '../utils/useRestaurantMenu'

function RestaurantMenu() {
  // const [restaurantMenuById, setRestaurantMenuById] = useState([]);
  const { restaurantId } = useParams();

//Now  resturantById is coming from custom hook
  const restaurantMenuById= useRestaurantMenu(restaurantId)

  // useEffect(() => {
  //   getRestaurantMenu(restaurantId);
  // }, []);

  // console.log("menu", restaurantMenuList);
  // const getRestaurantMenu = async (id) => {
  //   //  const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING" + restaurantId
  //   //  )
  //   //  const json=  await data.json()
  //   const resturantById = restaurantMenuList.filter(
  //     (item) => item.id.toString() === id
  //   );
  //   console.log("jyoti", resturantById);
  //   setRestaurantMenuById(...resturantById);
  // };

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
