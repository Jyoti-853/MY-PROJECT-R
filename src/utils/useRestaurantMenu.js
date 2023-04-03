import {useState, useEffect} from 'react'
import { restaurantMenuList } from "../constants";


export const useRestaurantMenu=(restaurantId)=>{
    const [restaurantMenuById, setRestaurantMenuById] = useState([]);
useEffect(()=>{
    getRestaurantMenu(restaurantId);
}, [])

const getRestaurantMenu=async(id)=>{
    // const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING' + id)
    // const json=  await data.json();
    // setRestaurantMenuById(json.data)
    const resturantById = restaurantMenuList.filter(
            (item) => item.id.toString() === id
          );
          setRestaurantMenuById(...resturantById);
   
}
    return restaurantMenuById
}

