const BURGER_IMG_URL =
  "https://b.zmtcdn.com/data/pictures/chains/8/310078/45b7459433dc43e249d0dd35955a2595.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*";
const DOMINOS_IMG_URL =
  "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp";
const SUBWAY_IMG_URL =
  "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp";
const KFC_IMG_URL =
  "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp";

export const restaurantList = [
  {
    id:123,
    name: "Burger King",
    image: BURGER_IMG_URL,
    cuisines: ["Burgers, American"],
  },
  {
    id:1234,
    name: "Dominos",
    image: DOMINOS_IMG_URL,
    cuisines: ["Veg", "Extra cheese"],
  },
  {
    id:12345,
    name: "Subway",
    image: SUBWAY_IMG_URL,
    cuisines: ["Veg", "Non-veg"],
  },
  {
    id:123456,
    name: "KFC",
    image: KFC_IMG_URL,
    cuisines: ["Veg", "Non-veg"],
  },
];

export const restaurantMenuList = [
  {
    id: 123,
    name: "BURGER KING",
    menu: ["Panner Butter Masala", "Roti", "Naan", "Biryani"],
  },
  {
    id: 1234,
    name: "DOMINOS",
    menu: ["Panner", "Chicken", "Naan", "Soya"],
  },
  {
    id: 12345,
    name: "SUBWAY",
    menu: ["Cutlet", "Sandwich", "Burger"],
  },
  {
    id: 123456,
    name: "KFC",
    menu: ["Burger", "Chiucken", "Mutton"],
  },
];
