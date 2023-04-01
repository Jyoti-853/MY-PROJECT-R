



const RestaurantCard = ({image,name, cuisines}) => {
   
    return (
      <div className="card">
        <img src={image} />
        <h2> {name}</h2>
        <h3> {cuisines?.join(",")}</h3>
        <h4>4.2 stars</h4>
      </div>
    );
  }
   export default RestaurantCard