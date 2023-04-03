import {useState, useEffect} from 'react'
import { restaurantList } from "../constants";

export const useRestaurantData=()=>{
    const [restaurantData, setRestaurantData] = useState([]);
useEffect(()=>{
    //Api call should lie here 
      getRestaurantData()
    }, [])
  
  async function getRestaurantData(){
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
  
    setRestaurantData(restaurantList);
  }
  return restaurantData 
}