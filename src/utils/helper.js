
 export function  filterData(searchText, restaurantData) {
    const filteredRestaurant = restaurantData.filter((restaurant) => 
      restaurant?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredRestaurant
  }
 