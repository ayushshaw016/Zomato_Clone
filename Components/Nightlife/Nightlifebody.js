import Image from "next/image";
import Link from "next/link";
import flag from "../../Assets/navbar_img/flag.png";
import off from "../DiningIn/DiningInAssets/50off.png";
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
  rating,
} from "../../Components/Orderonline/Restaurnts/res";
import { Nightlifecard, Nightliferes } from "./Nightlifecards";
import { Footer } from "../Footer";
const Nightlifebody = () => {
  const collections = [
    {
      IMG: res1,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res2,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res3,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res4,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res5,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res6,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res7,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res8,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res9,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res10,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res11,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res12,
      heading: "For the discount daddy",
      content: "35places",
    },
    {
      IMG: res13,
      heading: "For the discount daddy",
      content: "35places",
    },
  ];
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
      <div className="px-4  bg-white">
        <p className="text-md md:text-xl lg:text-2xl md:pt-6 text-gray-600">
          Home / India / Delhi NCR / Central Delhi /{" "}
          <span className="text-gray-400">Connaught Place Restaurants</span>
        </p>
        <div className="pt-4 md:pt-8 lg:pt-12 flex flex-row justify-around md:justify-start">
          <div className="mr-8 text-gray-500 my-1 md:my-4">
            <Link href="/diningoutroute">
              <span className="inline-block">
                <Image
                  src={flag}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                />
              </span>
              <span className="text-xl md:text-3xl inline-block">
                Dining Out
              </span>
            </Link>
          </div>
          <div className="mr-8  text-gray-500 my-1 md:my-4">
            <Link href="/orderonlineroute">
              <span className="inline-block">
                <Image
                  src={flag}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                />
              </span>
              <span className="text-xl md:text-3xl inline-block">Delivery</span>
            </Link>
          </div>
          <div className="mr-8  inline-block my-1 md:my-4 border-b-4  border-solid border-red-700">
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
      <div className=" mt-1 sm:mt-2 md:mt-4 lg:mt-4 mx-1 sm:mx-2 md:mx-4  lg:mx-8">
        <p className="text-md sm:text-lg md:text-2xl lg:text-3xl  tracking-wide underline">
          Collections
        </p>
        <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-5 flex flex-col md:flex-row justify-between ">
          <div className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-500">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="text-red-500 text-xs md:text-md lg:text-lg">
            All Collections in Delhi NCR &gt;
          </div>
        </div>
        <Nightlifecard collections={collections} />
        <div className="py-4 flex flex-row justify-around md:justify-start">
          <div className="mx-1 md:mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Filters
          </div>
          <div className="mx-1 md:mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Rating: 4.0+
          </div>
          <div className="mx-1 md:mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Offers
          </div>
          <div className="mx-1 md:mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Pubs and Bars
          </div>
        </div>
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
        <p className="text-md sm:text-lg md:text-2xl lg:text-4xl">
          Nightlife: Night clubs, pubs and bar in Connaught Place
        </p>
        <Nightliferes restaurantdata={restaurantdata} />
      </div>
      <Footer />
    </>
  );
};

export { Nightlifebody };
