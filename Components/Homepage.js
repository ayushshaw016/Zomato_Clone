import { Hmpgcard1, Hmpgcard2, Localatiescard, Nearme } from "./Cards";
import { GettheApp } from "./Gettheapp";
// import bg_image from "../Assets/navbar_img/navbar_bg.png";
import { Footer } from "./Footer";
import Image from "next/image";
import { Navbar } from "@/Components/Navabar";

import {
  Dining,
  Nightlife,
  online_food,
  insta,
  livescreenings,
  newlyopened,
  trending,
} from "../Assets/Homepage/index.js";
import Link from "next/link";

const Homepage = () => {
  const card2data = [
    {
      img: trending,
      collection: "Top Trending Spots",
      places: "35 places",
    },
    {
      img: livescreenings,
      collection: "Best of Live Screenings",
      places: "45 places",
    },
    {
      img: newlyopened,
      collection: "Newly Opened Places",
      places: "20 places",
    },
    ,
    {
      img: insta,
      collection: "Best Insta-worthy Places",
      places: "32 places",
    },
  ];

  const localitydata = [
    {
      placename: "Cannaught Place",
      count: "278 places",
    },
    {
      placename: "Sector 29",
      count: "143 places",
    },
    {
      placename: "Sector 18, Noida",
      count: "198 places",
    },
    {
      placename: "Rajouri Garden",
      count: "343 places",
    },
    {
      placename: "Saket",
      count: "109 places",
    },
    {
      placename: "DLF Cyber City",
      count: "172 places",
    },
    {
      placename: "Golf Coourse Road",
      count: "129 places",
    },
    {
      placename: "DLF Phase 4",
      count: "209 places",
    },
    {
      placename: "See More",
      count: "188 places",
    },
  ];

  const options = [
    {
      text: "Popular cuisines near me",
    },
    {
      text: "Popular restaurant types near me",
    },
    {
      text: "Top Restaurant chains",
    },
    {
      text: "Cities we deliver to",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="mx-3 mt-16 mb-8 flex flex-col  sm:flex-row justify-around">
        <div className="w-auto md:w-1/3 mx-auto md:ml-8 border border-gray-400 border-solid rounded-3xl  hover:cursor-pointer mt-8 md:mt-0 hover:scale-105">
          <Link href="/orderonlineroute">
            <Image
              src={online_food}
              alt="error"
              style={{ position: "center" }}
              className="rounded-t-3xl w-[70vw] h-[20vh] md:h-[30vh]"
            />
            <p className="text-sm md:text-lg lg:text-xl mx-2 font-bold ">
              Order Online
            </p>
            <p className="text-sm md:text-md  text mx-2 font-thin text-gray-500">
              Stay home and Order to you door step
            </p>
          </Link>
        </div>
        <div className="w-auto md:w-1/3 mx-auto md:ml-8 border border-gray-400 border-solid rounded-3xl  hover:cursor-pointer mt-8 md:mt-0 hover:scale-105">
          <Link href="/diningoutroute">
            <Image
              src={Dining}
              alt="error"
              style={{ position: "center" }}
              className="rounded-t-3xl w-[70vw] h-[20vh] md:h-[30vh]"
            />
            <p className="text-sm md:text-lg lg:text-xl mx-2 font-bold ">
              Dining
            </p>
            <p className="text-sm md:text-md  mx-2 font-thin text-gray-500 ">
              View the City's favorite dining venues
            </p>
          </Link>
        </div>
        <div className="w-auto md:w-1/3 mx-auto md:ml-8 border border-gray-400 border-solid rounded-3xl  hover:cursor-pointer mt-8 md:mt-0 hover:scale-105">
          <Image
            src={Nightlife}
            alt="error"
            style={{ position: "center" }}
            className="rounded-t-3xl w-[70vw] h-[20vh] md:h-[30vh]"
          />
          <p className="text-sm md:text-md lg:text-xl mx-2 font-bold ">
            Nightlife and Clubs
          </p>
          <p className="text-sm md:text-md mx-2 font-thin text-gray-500 ">
            Explore the city's top nightlife outlets
          </p>
        </div>
      </div>
      <div className="mt-4 mx-4 md:mx-12">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold ml-6">
          Collections
        </h2>
        <div className="flex flex-col lg:flex-row md:justify-between">
          <div className="text-md md:text-xl mt-1 md:mt-3 ">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="text-red-400  mt-3">
            All Collectiuon in Delhi NCR &gt;
          </div>
        </div>
        <Hmpgcard2 cards={card2data} />
      </div>
      <div className="mx-8 lg:mx-16 ">
        <h2 className="text-lg font-bold lg:text-3xl mb-2 md:mb-8">
          Popular Localities in and around Delhi NCR
        </h2>
      </div>
      <Localatiescard localitydata={localitydata} />
      <div className="pl-4">
        <GettheApp />
      </div>
      <div className="bg-slate-50">
        <div className="mx-4 md:mx-20 pt-6">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4">
            Explore options near me
          </h2>
          <Nearme options={options} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Homepage };
