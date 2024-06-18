"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Nightlifecard = ({ collections }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        } else {
          scrollAmount += 1; // Adjust this value to control the speed of scrolling
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const intervalId = setInterval(autoScroll, 40); // Adjust this value to control the speed of interval

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className="my-2 sm:my-3 md:my-5 lg:my-8 overflow-x-auto whitespace-nowrap"
      style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      ref={carouselRef}
    >
      {collections.map((data, index) => (
        <div
          key={index}
          className="border border-solid border-gray-300 inline-block mx-2 md:mx-3  lg:mx-4 hover:scale-105 my-2 hover:text-red-500 hover:cursor-pointer rounded-t-lg"
        >
          <Image
            src={data.IMG}
            className="h-[15vh]  sm:h-[20vh] w-full md:h-[28vh] md:w-[25vw] lg:h-[45vh] lg:w-[20vw] rounded-t-lg"
          />
          <div className=" ">
            <p className="text-md md:text-lg lg:text-xl text-wrap">
              {data.heading}
            </p>
            <p className="text-xs md:text-sm lg:text-md">{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const Nightliferes = ({ restaurantdata }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
        {restaurantdata.map((res, index) => (
          <div
            key={index}
            className="inline-block mx-3 my-3 border border-solid border-gray-400 rounded-3xl hover:shadow-2xl hover:cursor-pointer hover:scale-105 bg-gray-50 hover:bg-white"
          >
            <Image
              src={res.photo}
              className="w-full h-[20vh] sm:h-[26vh] md:h-[32vh] rounded-t-2xl"
            />
            <div className="px-1 flex justify-between items-start">
              <span className="block md:inline-block float-left ">
                <p className="text-md md:text-lg text-wrap">{res.name}</p>
                <p className="text-sm md:text-md text-gray-500 ">{res.type}</p>
              </span>
              <span className="block md:inline-block float-right">
                <span className="block mr-10 pl-2 text-white bg-green-800 rounded-md mt-1">
                  {res.raiting}
                  <span className="inline-block">
                    <Image
                      src={res.photo}
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
export { Nightlifecard, Nightliferes };
