import Image from "next/image";
import { rating } from "../Orderonline/Restaurnts/res";
const Carousel_Online = ({ onlinedata }) => {
  return (
    <>
      <div
        className="overflow-x-auto whitespace-nowrap my-4 md:my-12"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      >
        {onlinedata.map((data, index) => (
          <div
            key={index}
            className="inline-block -ml-3 md:ml-0 md:mx-12 hover:cursor-pointer hover:scale-105 "
          >
            <Image
              src={data.image}
              className="rounded-full w-28 h-28 md:w-40 md:h-40 "
            />
            <p className="text-center text-md md:text-2xl ">{data.item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Restaurants = ({ restaurantdata }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {restaurantdata.map((res, index) => (
          <div
            key={index}
            className="inline-block mx-3 my-3 border border-solid border-gray-400 rounded-3xl hover:shadow-2xl hover:cursor-pointer hover:scale-110"
          >
            <Image
              src={res.photo}
              className="w-full rounded-t-2xl h-[30vh] md:h-[40-vh]"
              // style={{ height: "40vh" }}
            />
            <div className="px-1 flex justify-between items-start">
              <span className="inline-block float-left ">
                <p className="text-md md:text-lg text-wrap">{res.name}</p>
                <p className="text-sm md:text-md text-gray-500 ">{res.type}</p>
              </span>
              <span className="inline-block float-right">
                <span className="block mr-10 pl-2 text-white bg-green-800 rounded-md mt-1">
                  {res.raiting}
                  <span className="inline-block">
                    <Image
                      src={rating}
                      className="ml-3 mb-1 w-4 h-4 inline-block opacity-40 rounded-md"
                    />
                  </span>
                </span>
                <span className="block mt-1 font-sans tracking-widest text-md text-gray-400 font-thin">
                  ₹{res.amount}
                </span>
                <span className="block text-sm font-bold">{res.dist}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { Carousel_Online, Restaurants };
