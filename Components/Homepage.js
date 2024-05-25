import { Hmpgcard1, Hmpgcard2 } from "./Cards";
import bg_image from "../Assets/navbar_img/navbar_bg.png";
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
  return (
    <>
      <div className="mx-6 mt-16 mb-8">
        <Hmpgcard1 cards={card1data} />
      </div>
      <div className="my-4">
        <div className="mx-12">
          <h2 className="text-4xl font-bold">Collections</h2>
          <p className="text-xl mt-3">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
            <span className="text-red-400 float-right">
              All Collectiuon in Delhi NCR &gt;
            </span>
          </p>
        </div>
        <Hmpgcard2 cards={card2data} />
      </div>
    </>
  );
};

export { Homepage };
