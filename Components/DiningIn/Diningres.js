import Image from "next/image";
import { rating } from "../Orderonline/Restaurnts/res";
const DiningRes = ({ diningdata }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mt-6 bg-[#fffdfd]">
        {diningdata.map((res, index) => (
          <div
            key={index}
            className="inline-block mx-3 my-3  hover:shadow-2xl hover:cursor-pointer hover:bg-white hover:border border-solid border-gray-100 hover:rounded-3xl px-2 py-2 bg-[#f9f9f9]"
          >
            <Image
              src={res.ihmage}
              className="w-full h-[20vh] md:h-[25vh] lg:h-[30vh]  rounded-xl md:rounded-3xl"
              // style={{ height: "40vh" }}
            />
            <div className="ml-2 flex justify-between items-start">
              <span className="inline-block float-left ">
                <p className="text-sm sm:text-md md:text-lg text-wrap">
                  {res.Name}
                </p>
                <p className="text-xs sm:text-sm md:text-md text-gray-500 ">
                  {res.type}
                </p>
                <p className="text-xs sm:text-sm md:text-md text-gray-500 ">
                  {res.location}
                </p>
              </span>
              <span className="inline-block float-right">
                <span className="text-xs md:text-md block mr-10 px-1 md:px-2 text-white bg-green-800 rounded-md mt-1">
                  {res.rating}
                </span>
                <span className="block mt-1 font-sans tracking-widest text-xs md:text-md text-gray-400 font-thin">
                  ₹{res.cost} for one
                </span>
                <span className="block text-xs md:text-md font-bold">
                  {res.min}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { DiningRes };
