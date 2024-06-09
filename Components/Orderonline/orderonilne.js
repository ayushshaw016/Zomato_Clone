import { Orderonlinenavbar } from "./orderonlinenav";
import img from "../../Assets/Homepage/Dining.png";
import flag from "../../Assets/navbar_img/flag.png";
import Image from "next/image";
import { Carousel_Online } from "./Carousel";
import { Allres } from "./Allres";
import {
  biryani,
  burger,
  cake,
  chicken,
  cholebhature,
  dosa,
  noodles,
  northindian,
  paneer,
  pizza,
  rolls,
  vegthali,
} from "../Orderonline/Dishes/dishes.js";

import {
  bakingo,
  bikkgnae,
  biryaniblues,
  burgerking,
  chayos,
  hirasweets,
  kfc,
  mcdonalds,
  pizzahut,
} from "../Orderonline/Brands/brands.js";

const Orderonline = () => {
  const onlinedata = [
    {
      image: chicken,
      item: "Chicken",
    },
    {
      image: biryani,
      item: "Biryani",
    },
    {
      image: burger,
      item: "Burger",
    },
    {
      image: cake,
      item: "Cake",
    },
    {
      image: cholebhature,
      item: "Chole Bhature",
    },
    {
      image: dosa,
      item: "Dosa",
    },
    {
      image: noodles,
      item: "Noodles",
    },
    {
      image: northindian,
      item: "North Indian",
    },
    {
      image: paneer,
      item: "Paneer",
    },
    {
      image: pizza,
      item: "Pizza",
    },
    {
      image: rolls,
      item: "Rolls",
    },
    {
      image: vegthali,
      item: "Veg Thali",
    },
  ];

  const brands = [
    {
      image: bakingo,
      item: "Bakingo",
    },
    {
      image: bikkgnae,
      item: "Bikkgane",
    },
    {
      image: biryaniblues,
      item: "Biryani Blues",
    },
    {
      image: burgerking,
      item: "Burger King",
    },
    {
      image: chayos,
      item: "Chayos",
    },
    {
      image: hirasweets,
      item: "Hira sweets",
    },
    {
      image: kfc,
      item: "KFC",
    },
    {
      image: mcdonalds,
      item: "MC Donalds",
    },
    ,
    {
      image: pizzahut,
      item: "Pizzahut",
    },
  ];

  return (
    <>
      <Orderonlinenavbar />
      <div className="px-4 lg:px-16 bg-white">
        <p className="text-md pt-6 text-gray-600">
          Home / India / Delhi NCR / Central Delhi /{" "}
          <span className="text-gray-400">Connaught Place Restaurants</span>
        </p>
        <div className="pt-16">
          <span className="mr-8 text-gray-500 block md:inline-block my-4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Dining Out</span>
          </span>
          <span className="mr-8 border-b-4 py-4 border-solid border-red-700 block md:inline-block my-4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Delivery</span>
          </span>
          <span className="mr-8 text-gray-500 block md:inline-block my4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Nightlife</span>
          </span>
        </div>
        <div className="py-4">
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Filters
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Rating: 4.0+
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Pure Veg
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Cuisines
          </span>
        </div>
      </div>
      <div className="">
        <div className="px-4 lg:px-16 py-8 bg-[#f0eded] md:py-4">
          <p className="text-xl md:text-4xl my-1 md:my-4">
            Eat what makes you happy
          </p>
          <Carousel_Online onlinedata={onlinedata} />
        </div>
        <div className="px-4 lg:px-16 pt-8 bg-white py-1 md:py-4">
          <p className="text-xl md:text-4xl my-1 md:my-4 ">
            Top Brands For You
          </p>
          <Carousel_Online onlinedata={brands} />
        </div>
        <Allres />
      </div>
    </>
  );
};
export { Orderonline };
