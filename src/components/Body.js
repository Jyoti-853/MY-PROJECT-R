import { useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer"
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import { useRestaurantData } from "../utils/useRestuarantData";
import useOnline from "../utils/useOnline"
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const isOnline= useOnline()
  const restaurantData= useRestaurantData()
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
 
// empty dependencies array, then call  callback function after  first render.( means after executing  code out of useEffect hook i.e console.log('renderrr'))
// if searchText is passed in second parameter then it will call once after initial render + everytime after re render(whenever searchText value change)
// if we don't have second parameter then it will call that useEffect after each re render.

useEffect(()=>{
  if (restaurantData && restaurantData.length >0){
    setFilteredRestaurants(restaurantData);
  }
}, [restaurantData])


 
 if(!isOnline){
return <h1>Offline please check  your internet connection.</h1>
 }

   return restaurantData.length===0 ? <Shimmer/>: (
    <>
      <div className="search-container">
      
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurantData); //need to filter the data and then change the state variable restaurantData
            setFilteredRestaurants(data)
          }}
        >
          Search 
        </button>
      </div>
      
      <div className="restaurant-list">

     {/* key={Math.random() * index}  */}

        {filteredRestaurants?.length===0? <h1>No matches found</h1>:filteredRestaurants?.map((restaurant, index) => {
          return <Link to ={"/restaurant/" + restaurant.id} key={index}>
          <RestaurantCard {...restaurant}/>
          </Link>
        })}
      </div>
    </>
  );
      
};
export default Body;
