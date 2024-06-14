import Image from "next/image";
import flag from "../../Assets/navbar_img/flag.png";
import off from "../DiningIn/DiningInAssets/50off.png";
import { DiningRes } from "./Diningres";
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
import { Footer } from "../Footer";
const DiningInnav = () => {
  // Dining res data
  const diningdata = [
    {
      Name: "Taj Mahal",
      type: "North Indian",
      location: "Connaught Place",
      rating: "4.2",
      cost: "503",
      min: "29min",
      ihmage: res3,
    },
    {
      Name: "Masala Magic",
      type: "South Indian",
      location: "Saket",
      rating: "3.9",
      cost: "202",
      min: "40min",
      ihmage: res7,
    },
    {
      Name: "Curry House",
      type: "South Indian",
      location: "Karol Bagh",
      rating: "4.4",
      cost: "589",
      min: "22min",
      ihmage: res11,
    },
    {
      Name: "Royal Indian",
      type: "North Indian",
      location: "Rajouri Garden",
      rating: "4.1",
      cost: "334",
      min: "41min",
      ihmage: res8,
    },
    {
      Name: "Delhi Spice",
      type: "North Indian",
      location: "Hauz Khas",
      rating: "3.6",
      cost: "315",
      min: "31min",
      ihmage: res5,
    },
    {
      Name: "Spice Route",
      type: "South Indian",
      location: "Connaught Place",
      rating: "4.5",
      cost: "549",
      min: "35min",
      ihmage: res13,
    },
    {
      Name: "Biryani House",
      type: "North Indian",
      location: "Saket",
      rating: "4.3",
      cost: "427",
      min: "28min",
      ihmage: res1,
    },
    {
      Name: "Mughal's",
      type: "North Indian",
      location: "Karol Bagh",
      rating: "3.7",
      cost: "177",
      min: "37min",
      ihmage: res4,
    },
    {
      Name: "Bombay Palace",
      type: "North Indian",
      location: "Rajouri Garden",
      rating: "3.8",
      cost: "471",
      min: "23min",
      ihmage: res10,
    },
    {
      Name: "Tandoor Grill",
      type: "North Indian",
      location: "Connaught Place",
      rating: "4.2",
      cost: "218",
      min: "30min",
      ihmage: res2,
    },
    {
      Name: "Delhi Darbar",
      type: "North Indian",
      location: "Saket",
      rating: "4.0",
      cost: "590",
      min: "24min",
      ihmage: res9,
    },
    {
      Name: "Punjabi Dhaba",
      type: "North Indian",
      location: "Karol Bagh",
      rating: "4.1",
      cost: "392",
      min: "33min",
      ihmage: res12,
    },
    {
      Name: "South Indian Cafe",
      type: "South Indian",
      location: "Rajouri Garden",
      rating: "3.9",
      cost: "587",
      min: "38min",
      ihmage: res6,
    },
    {
      Name: "Dosa Hut",
      type: "South Indian",
      location: "Hauz Khas",
      rating: "3.5",
      cost: "221",
      min: "45min",
      ihmage: res9,
    },
    {
      Name: "Paneer Paradise",
      type: "North Indian",
      location: "Connaught Place",
      rating: "4.3",
      cost: "567",
      min: "29min",
      ihmage: res7,
    },
    {
      Name: "Pav Bhaji Junction",
      type: "North Indian",
      location: "Saket",
      rating: "3.7",
      cost: "318",
      min: "32min",
      ihmage: res10,
    },
    {
      Name: "Chaat Corner",
      type: "North Indian",
      location: "Karol Bagh",
      rating: "4.0",
      cost: "468",
      min: "27min",
      ihmage: res13,
    },
    {
      Name: "Idli House",
      type: "South Indian",
      location: "Rajouri Garden",
      rating: "4.5",
      cost: "299",
      min: "36min",
      ihmage: res4,
    },
    {
      Name: "Biriyani Bazaar",
      type: "North Indian",
      location: "Hauz Khas",
      rating: "4.2",
      cost: "153",
      min: "43min",
      ihmage: res11,
    },
    {
      Name: "Vada Pav Palace",
      type: "North Indian",
      location: "Connaught Place",
      rating: "3.8",
      cost: "519",
      min: "31min",
      ihmage: res1,
    },
    {
      Name: "Gulab Jamun Corner",
      type: "North Indian",
      location: "Saket",
      rating: "4.3",
      cost: "219",
      min: "45min",
      ihmage: res11,
    },
  ];
  return (
    <>
      <nav className="px-3 pb-4 bg-white border-b-2 border-solid  border-black">
        <ul className="flex flex-row justify-between">
          <li className="text-2xl sm:text-3xl lg:text-6xl font-bold">zomato</li>

          <li>
            <span className="inline-block">
              <Image
                src={flag}
                className="w-4 h-4 md:w-8 md:h-8 rounded-full hover:scale-125 hover:cursor-pointer"
              />
            </span>

            <span className="inline-block">
              <select
                value="Ayush"
                className="text-md md:text-xl lg:text-3xl hover:cursor-pointer"
              >
                <option className=" text-md md:text-lg  ">Profile </option>
                <option className=" text-md md:text-lg  ">Notifications</option>
                <option className=" text-md md:text-lg  ">Bookmarks</option>
                <option className=" text-md md:text-lg  ">Reviews</option>
                <option className=" text-md md:text-lg  ">Networks</option>
                <option className=" text-md md:text-lg  ">Find Friends</option>
                <option className=" text-md md:text-lg  ">Settings</option>
                <option className=" text-md md:text-lg  ">Logout</option>
              </select>
            </span>
          </li>
        </ul>
      </nav>
      <div className="px-4  bg-white">
        <p className="text-md md:text-lg lg:text-xl md:pt-4 text-gray-600">
          Home / India / Delhi NCR / Central Delhi /{" "}
          <span className="text-gray-400">Connaught Place Restaurants</span>
        </p>
        <div className="pt-3 md:pt-4 lg:pt-6 flex flex-row justify-around md:justify-start">
          <div className="mr-8 border-b-4  border-solid border-red-700 my-1 md:my-4">
            <span className="inline-block">
              <Image
                src={flag}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full"
              />
            </span>
            <span className="text-xl md:text-3xl inline-block">Dining Out</span>
          </div>
          <div className="mr-8 text-gray-500 my-1 md:my-4">
            <span className="inline-block">
              <Image
                src={flag}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full"
              />
            </span>
            <span className="text-xl md:text-3xl inline-block">Delivery</span>
          </div>
          <div className="mr-8 text-gray-500 inline-block my-1 md:my-4">
            <span className="inline-block">
              <Image
                src={flag}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full"
              />
            </span>
            <span className="text-xl md:text-3xl inline-block">Nightlife</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 bg-white pt-4 ">
        <div className="flex justify-around md:pt-4">
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Filters
          </div>
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Offers
          </div>
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Ratings 4.0+
          </div>
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Pet Friendly
          </div>
        </div>
        <div className="flex justify-around py-4 md:pb-0">
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Outdoor Seating
          </div>
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Serves Alcohol
          </div>
          <div className="inline-block border border-gray-300 border-solid px-3 py-2 text-md md:text-lg rounded-lg text-gray-400 hover:cursor-pointer hover:bg-gray-100 mr-4">
            Open Now
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center my-3 md:my-8">
        <Image src={off} className="w-[80vw] h-[50vh]" />
      </div>
      <div className="ml-48 -mt-44">
        <h2 className="text-4xl w-[15vw] font-bold text-white">
          Get Upto 50% off{" "}
        </h2>
        <p className="text-gray-400 text-2xl">
          on your Dinig bills with zomato
        </p>
        <button className="text-md text-white bg-red-400 px-4 py-1 rounded-md">
          Check out all the restaurants
        </button>
      </div> */}
      <div className="relative flex justify-center py-3 md:py-8 bg-white">
        <Image src={off} className="w-[80vw] h-[40vh]" />
        <div className="absolute top-2/3 left-0 transform -translate-y-1/2 ml-20 md:ml-40">
          <h2 className="text-xl lg:text-4xl w-[25vw] lg:w-[15vw] font-bold text-white">
            Get Upto 50% off
          </h2>
          <p className="text-white text-md lg:text-2xl">
            on your Dining bills with Zomato
          </p>
          <button className=" text-xm lg:text-md text-white bg-red-400 px-4 py-1 rounded-md">
            Check out all the restaurants
          </button>
        </div>
      </div>

      <div className="px-2 md:px-6 bg-[#fffdfd]">
        <p className="text-lg md:text-4xl font-bold pl-4 lg:px2">
          Trending dining out restaurants in Connaught Place
        </p>
        <DiningRes diningdata={diningdata} />
      </div>
      <Footer />
    </>
  );
};

export { DiningInnav };
