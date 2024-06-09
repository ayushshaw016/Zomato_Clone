import { Restaurants } from "./Carousel";
import img from "../../Assets/Homepage/Dining.png";
import {
  res1,
  res10,
  res11,
  res12,
  res13,
  res2,
  res3,
  res4,
  res5,
  res6,
  res7,
  res8,
  res9,
} from "../Orderonline/Restaurnts/res.js";
const Allres = () => {
  const restaurantdata = [
    {
      photo: res1,
      name: "Biryani Blues",
      type: "Chinese",
      raiting: "4.3",
      dist: "24min",
      amount: "100 for one",
    },
    {
      photo: res2,
      name: "Indian Accent",
      type: "Indian",
      raiting: "4.3",
      dist: "34min",
      amount: "500 for one",
    },
    {
      photo: res3,
      name: "Haldiram's",
      type: "Indian",
      raiting: "4.3",
      dist: "21min",
      amount: "250 for one",
    },
    {
      photo: res4,
      name: "Barbeque Nation",
      type: "Indian",
      raiting: "4.3",
      dist: "42min",
      amount: "400 for one",
    },
    {
      photo: res5,
      name: "Swati Snacks",
      type: "Indian",
      raiting: "4.3",
      dist: "33min",
      amount: "300 for one",
    },
    {
      photo: res6,
      name: "Bukhara",
      type: "North Indian",
      raiting: "4.3",
      dist: "27min",
      amount: "550 for one",
    },
    {
      photo: res7,
      name: "Peter Cat",
      type: "Indian",
      raiting: "4.3",
      dist: "39min",
      amount: "450 for one",
    },
    {
      photo: res8,
      name: "Karim's",
      type: "Mughlai",
      raiting: "4.3",
      dist: "44min",
      amount: "200 for one",
    },
    {
      photo: res9,
      name: "Kuremal Mohan Lal Kulfi Wale",
      type: "Dessert",
      raiting: "4.3",
      dist: "41min",
      amount: "150 for one",
    },
    {
      photo: res10,
      name: "Farzi Cafe",
      type: "Modern Indian",
      raiting: "4.3",
      dist: "22min",
      amount: "500 for one",
    },
    {
      photo: res11,
      name: "Leopold Cafe",
      type: "Cafe",
      raiting: "4.5",
      dist: "37min",
      amount: "200 for one",
    },
    {
      photo: res12,
      name: "MTR",
      type: "South Indian",
      raiting: "4.6",
      dist: "29min",
      amount: "350 for one",
    },
    {
      photo: res13,
      name: "Saravana Bhavan",
      type: "South Indian",
      raiting: "4.1",
      dist: "32min",
      amount: "300 for one",
    },
    {
      photo: res7,
      name: "Dum Pukht",
      type: "Indian",
      raiting: "4.1",
      dist: "23min",
      amount: "400 for one",
    },
    {
      photo: res2,
      name: "Tunday Kababi",
      type: "Mughlai",
      raiting: "4.2",
      dist: "36min",
      amount: "250 for one",
    },
    {
      photo: res10,
      name: "Oh! Calcutta",
      type: "Bengali",
      raiting: "4.3",
      dist: "45min",
      amount: "600 for one",
    },
    {
      photo: res4,
      name: "Cafe Mondegar",
      type: "Cafe",
      raiting: "4.4",
      dist: "22min",
      amount: "300 for one",
    },
    {
      photo: res9,
      name: "Peshawri",
      type: "North Indian",
      raiting: "4.5",
      dist: "31min",
      amount: "100 for one",
    },
    {
      photo: res13,
      name: "Trishna",
      type: "Seafood",
      raiting: "4.6",
      dist: "29min",
      amount: "150 for one",
    },
    {
      photo: res5,
      name: "Gajalee",
      type: "Seafood",
      raiting: "4.1",
      dist: "34min",
      amount: "500 for one",
    },
    {
      photo: res11,
      name: "Yauatcha",
      type: "Chinese",
      raiting: "4.2",
      dist: "21min",
      amount: "550 for one",
    },
    {
      photo: res8,
      name: "Nando's",
      type: "Portuguese",
      raiting: "4.3",
      dist: "40min",
      amount: "150 for one",
    },
    {
      photo: res3,
      name: "SodaBottleOpenerWala",
      type: "Parsi",
      raiting: "4.4",
      dist: "39min",
      amount: "350 for one",
    },
    {
      photo: res12,
      name: "Paradise",
      type: "Biryani",
      raiting: "4.5",
      dist: "38min",
      amount: "200 for one",
    },
    {
      photo: res6,
      name: "Sagar Ratna",
      type: "South Indian",
      raiting: "4.6",
      dist: "41min",
      amount: "450 for one",
    },
    {
      photo: res1,
      name: "Annalakshmi",
      type: "South Indian",
      raiting: "4.1",
      dist: "25min",
      amount: "100 for one",
    },
    {
      photo: res4,
      name: "Adyar Ananda Bhavan",
      type: "South Indian",
      raiting: "4.2",
      dist: "42min",
      amount: "500 for one",
    },
    {
      photo: res13,
      name: "Bade Miya",
      type: "Mughlai",
      raiting: "4.3",
      dist: "28min",
      amount: "300 for one",
    },
    {
      photo: res7,
      name: "Saffron",
      type: "Indian",
      raiting: "4.4",
      dist: "43min",
      amount: "250 for one",
    },
    {
      photo: res2,
      name: "Theobroma",
      type: "Bakery",
      raiting: "4.5",
      dist: "26min",
      amount: "600 for one",
    },
    {
      photo: res11,
      name: "Baluchi",
      type: "Indian",
      raiting: "4.6",
      dist: "33min",
      amount: "200 for one",
    },
    {
      photo: res10,
      name: "Mamagoto",
      type: "Asian",
      raiting: "4.1",
      dist: "30min",
      amount: "550 for one",
    },
    {
      photo: res5,
      name: "Gulati",
      type: "Indian",
      raiting: "4.2",
      dist: "24min",
      amount: "450 for one",
    },
    {
      photo: res8,
      name: "Dakshin",
      type: "South Indian",
      raiting: "4.3",
      dist: "27min",
      amount: "400 for one",
    },
    {
      photo: res3,
      name: "Karavalli",
      type: "South Indian",
      raiting: "4.4",
      dist: "35min",
      amount: "150 for one",
    },
    {
      photo: res12,
      name: "Biryani By Kilo",
      type: "Biryani",
      raiting: "4.5",
      dist: "38min",
      amount: "100 for one",
    },
    {
      photo: res6,
      name: "Punjabi By Nature",
      type: "North Indian",
      raiting: "4.6",
      dist: "44min",
      amount: "350 for one",
    },
    {
      photo: res1,
      name: "SodaBottleOpenerWala",
      type: "Parsi",
      raiting: "4.1",
      dist: "21min",
      amount: "250 for one",
    },
    {
      photo: res13,
      name: "Masala Library",
      type: "Modern Indian",
      raiting: "4.2",
      dist: "41min",
      amount: "600 for one",
    },
    {
      photo: res7,
      name: "Imly",
      type: "Street Food",
      raiting: "4.3",
      dist: "22min",
      amount: "450 for one",
    },
    {
      photo: res1,
      name: "Biryani Blues",
      type: "Chinese",
      raiting: "4.3",
      dist: "24min",
      amount: "100 for one",
    },
    {
      photo: res2,
      name: "Indian Accent",
      type: "Indian",
      raiting: "4.3",
      dist: "34min",
      amount: "500 for one",
    },
    {
      photo: res3,
      name: "Haldiram's",
      type: "Indian",
      raiting: "4.3",
      dist: "21min",
      amount: "250 for one",
    },
    {
      photo: res4,
      name: "Barbeque Nation",
      type: "Indian",
      raiting: "4.3",
      dist: "42min",
      amount: "400 for one",
    },
    {
      photo: res5,
      name: "Swati Snacks",
      type: "Indian",
      raiting: "4.3",
      dist: "33min",
      amount: "300 for one",
    },
    {
      photo: res6,
      name: "Bukhara",
      type: "North Indian",
      raiting: "4.3",
      dist: "27min",
      amount: "550 for one",
    },
    {
      photo: res7,
      name: "Peter Cat",
      type: "Indian",
      raiting: "4.3",
      dist: "39min",
      amount: "450 for one",
    },
    {
      photo: res8,
      name: "Karim's",
      type: "Mughlai",
      raiting: "4.3",
      dist: "44min",
      amount: "200 for one",
    },
    {
      photo: res9,
      name: "Kuremal Mohan Lal Kulfi Wale",
      type: "Dessert",
      raiting: "4.3",
      dist: "41min",
      amount: "150 for one",
    },
    {
      photo: res10,
      name: "Farzi Cafe",
      type: "Modern Indian",
      raiting: "4.3",
      dist: "22min",
      amount: "500 for one",
    },
    {
      photo: res11,
      name: "Leopold Cafe",
      type: "Cafe",
      raiting: "4.5",
      dist: "37min",
      amount: "200 for one",
    },
    {
      photo: res12,
      name: "MTR",
      type: "South Indian",
      raiting: "4.6",
      dist: "29min",
      amount: "350 for one",
    },
    {
      photo: res13,
      name: "Saravana Bhavan",
      type: "South Indian",
      raiting: "4.1",
      dist: "32min",
      amount: "300 for one",
    },
    {
      photo: res7,
      name: "Dum Pukht",
      type: "Indian",
      raiting: "4.1",
      dist: "23min",
      amount: "400 for one",
    },
    {
      photo: res2,
      name: "Tunday Kababi",
      type: "Mughlai",
      raiting: "4.2",
      dist: "36min",
      amount: "250 for one",
    },
    {
      photo: res10,
      name: "Oh! Calcutta",
      type: "Bengali",
      raiting: "4.3",
      dist: "45min",
      amount: "600 for one",
    },
    {
      photo: res4,
      name: "Cafe Mondegar",
      type: "Cafe",
      raiting: "4.4",
      dist: "22min",
      amount: "300 for one",
    },
    {
      photo: res9,
      name: "Peshawri",
      type: "North Indian",
      raiting: "4.5",
      dist: "31min",
      amount: "100 for one",
    },
    {
      photo: res13,
      name: "Trishna",
      type: "Seafood",
      raiting: "4.6",
      dist: "29min",
      amount: "150 for one",
    },
    {
      photo: res5,
      name: "Gajalee",
      type: "Seafood",
      raiting: "4.1",
      dist: "34min",
      amount: "500 for one",
    },
    {
      photo: res11,
      name: "Yauatcha",
      type: "Chinese",
      raiting: "4.2",
      dist: "21min",
      amount: "550 for one",
    },
    {
      photo: res8,
      name: "Nando's",
      type: "Portuguese",
      raiting: "4.3",
      dist: "40min",
      amount: "150 for one",
    },
    {
      photo: res3,
      name: "SodaBottleOpenerWala",
      type: "Parsi",
      raiting: "4.4",
      dist: "39min",
      amount: "350 for one",
    },
    {
      photo: res12,
      name: "Paradise",
      type: "Biryani",
      raiting: "4.5",
      dist: "38min",
      amount: "200 for one",
    },
    {
      photo: res6,
      name: "Sagar Ratna",
      type: "South Indian",
      raiting: "4.6",
      dist: "41min",
      amount: "450 for one",
    },
    {
      photo: res1,
      name: "Annalakshmi",
      type: "South Indian",
      raiting: "4.1",
      dist: "25min",
      amount: "100 for one",
    },
    {
      photo: res4,
      name: "Adyar Ananda Bhavan",
      type: "South Indian",
      raiting: "4.2",
      dist: "42min",
      amount: "500 for one",
    },
    {
      photo: res13,
      name: "Bade Miya",
      type: "Mughlai",
      raiting: "4.3",
      dist: "28min",
      amount: "300 for one",
    },
    {
      photo: res7,
      name: "Saffron",
      type: "Indian",
      raiting: "4.4",
      dist: "43min",
      amount: "250 for one",
    },
    {
      photo: res2,
      name: "Theobroma",
      type: "Bakery",
      raiting: "4.5",
      dist: "26min",
      amount: "600 for one",
    },
    {
      photo: res11,
      name: "Baluchi",
      type: "Indian",
      raiting: "4.6",
      dist: "33min",
      amount: "200 for one",
    },
    {
      photo: res10,
      name: "Mamagoto",
      type: "Asian",
      raiting: "4.1",
      dist: "30min",
      amount: "550 for one",
    },
    {
      photo: res5,
      name: "Gulati",
      type: "Indian",
      raiting: "4.2",
      dist: "24min",
      amount: "450 for one",
    },
    {
      photo: res8,
      name: "Dakshin",
      type: "South Indian",
      raiting: "4.3",
      dist: "27min",
      amount: "400 for one",
    },
    {
      photo: res3,
      name: "Karavalli",
      type: "South Indian",
      raiting: "4.4",
      dist: "35min",
      amount: "150 for one",
    },
    {
      photo: res12,
      name: "Biryani By Kilo",
      type: "Biryani",
      raiting: "4.5",
      dist: "38min",
      amount: "100 for one",
    },
    {
      photo: res6,
      name: "Punjabi By Nature",
      type: "North Indian",
      raiting: "4.6",
      dist: "44min",
      amount: "350 for one",
    },
    {
      photo: res1,
      name: "SodaBottleOpenerWala",
      type: "Parsi",
      raiting: "4.1",
      dist: "21min",
      amount: "250 for one",
    },
    {
      photo: res13,
      name: "Masala Library",
      type: "Modern Indian",
      raiting: "4.2",
      dist: "41min",
      amount: "600 for one",
    },
    {
      photo: res7,
      name: "Imly",
      type: "Street Food",
      raiting: "4.3",
      dist: "22min",
      amount: "450 for one",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-16 pt-3 md:pt-16 bg-[#f3f1f1]">
        <p className="text-3xl">Order Food Online in Cannaught Place</p>
        <Restaurants restaurantdata={restaurantdata} />
      </div>
    </>
  );
};
export { Allres };
