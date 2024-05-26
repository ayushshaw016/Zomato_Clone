import { Hmpgcard1, Hmpgcard2, Localatiescard, Nearme } from "./Cards";
import { GettheApp } from "./Gettheapp";
// import bg_image from "../Assets/navbar_img/navbar_bg.png";
import { Footer } from "./Footer";
import {
  Dining,
  Nightlife,
  online_food,
  insta,
  livescreenings,
  newlyopened,
  trending,
} from "../Assets/Homepage/index.js";

const Homepage = () => {
  const card1data = [
    {
      img: online_food,
      event: "Order Online",
      text: "Stay home and Order to you door step",
    },
    {
      img: Dining,
      event: "Dining",
      text: "View the City's favorite dining venues",
    },
    {
      img: Nightlife,
      event: "Nightlife and Clubs",
      text: "Explore the city's top nightlife outlets",
    },
  ];

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
      <div className="mx-6 mt-16 mb-8">
        <Hmpgcard1 cards={card1data} />
      </div>
      <div className="my-4 mx-12">
        <h2 className="text-4xl font-bold ml-16">Collections</h2>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="text-xl mt-3">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="text-red-400  mt-3">
            All Collectiuon in Delhi NCR &gt;
          </div>
        </div>
        <Hmpgcard2 cards={card2data} />
      </div>
      <div className="mx-4 lg:mx-16 ">
        <h2 className="text-4xl mb-8">
          Popular Localities in and around Delhi NCR
        </h2>
        <Localatiescard localitydata={localitydata} />
      </div>
      <GettheApp />
      <div className="bg-slate-50">
        <div className="mx-20 mt-6">
          <h2 className="text-4xl mb-4">Explore options near me</h2>
          <Nearme options={options} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Homepage };
