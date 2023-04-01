import React from "react";
import ReactDOM from "react-dom/client";
//Named export- when at the time of creating we are using export then at the time of import should have to use in curly braces
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

//By using  simple Javascript render something in root element.
// const heading= document.createElement('h1')
// heading.innerHTML= ' Heading1'
// const root= document.getElementById('root')
// root.appendChild(heading)

//By using React render something in root element
const heading1 = React.createElement("h1", { id: "mytitle" }, "Heading1");

//React element( object) without JSX
const heading2 = React.createElement("h1", { id: "mytitle" }, "Heading2");

// React element with JSX
const heading3 = <h1> Welcome</h1>;

//Config Driven UI
// const config = [
//   {
//     type: "carausel",
//     cards: [{ offerName: "50%off" }, { offerNmae: "No Delivery charge" }],
//   },
//   {
//     type: "restaurants",
//     cards: [{
//         name: "Burger King",
//         image:
//           "https://b.zmtcdn.com/data/pictures/chains/8/310078/45b7459433dc43e249d0dd35955a2595.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
//         cuisines: ["Burgers, American"],
//       },
//       {
//         name: "Dominos",
//         image:
//           "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
//         cuisines: ["Veg", "Extra cheese"],
//       }],
//   },
// ];



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  );
};

//always create Router after a component 
const  appRouter=createBrowserRouter(
  [{
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children: [
      {
        path:"/",
        element: <Body/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element: <About/>,
        errorElement:<Error/>
      },
      {
        path:"/contact",
        element: <Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurant/:restaurantId",
        element: <RestaurantMenu/>,
        errorElement:<Error/>
      },
    ],
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

/* We can call react  element or react component  as function also like {heading3()} or HomeComponent() 
root.render(HomeComponent()) */

root.render(<RouterProvider router={appRouter}/>);
