import { useState, useEffect} from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer"
import {Link} from "react-router-dom"

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

// empty dependencies array, then call  callback function after  first render.( means after executing  code out of useEffect hook i.e console.log('renderrr'))
// if searchText is passed in second parameter then it will call once after initial render + everytime after re render(whenever searchText value change)
// if we don't have second parameter then it will call that useEffect after each re render.

useEffect(()=>{
  //Api call should lie here 
    console.log("useEffcet called")
    getRestaurantData()
  }, [])

console.log('card', restaurantList)
async function getRestaurantData(){
  // const data = await fetch(
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  // );
  // const json = await data.json();

  setRestaurantData(restaurantList);
  setFilteredRestaurants(restaurantList);
}


  function filterData(searchText, restaurantData) {
    const filteredRestaurant = restaurantData.filter((restaurant) => 
      restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredRestaurant
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

        {filteredRestaurants.length===0? <h1>No matches found</h1>:filteredRestaurants.map((restaurant, index) => {
          return <Link to ={"/restaurant/" + restaurant.id} key={index}>
          <RestaurantCard {...restaurant}/>
          </Link>
        })}
      </div>
    </>
  );
      
};
export default Body;
