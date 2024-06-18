"use client";
import Image from "next/image";
import { rating } from "../Orderonline/Restaurnts/res";
import React, { useEffect, useRef } from "react";
const Carousel_Online = ({ onlinedata }) => {
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
    <>
      <div
        className="overflow-x-auto whitespace-nowrap my-4 md:my-12"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
        ref={carouselRef}
      >
        {onlinedata.map((data, index) => (
          <div
            key={index}
            className="inline-block mx-2 sm:mx-3 md:mx-4 hover:cursor-pointer hover:scale-105 "
          >
            <Image
              src={data.image}
              className="rounded-full w-28 h-28 md:w-36 md:h-36"
            />
            <p className="text-center text-md md:text-2xl ">{data.item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Carousel_Online_one = ({ onlinedata }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    const scrollSpeed = 0.5; // Adjust this value to control the speed of scrolling

    const scrollStep = () => {
      if (scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
      } else {
        scrollContainer.scrollLeft -= scrollSpeed;
      }
    };

    const intervalId = setInterval(scrollStep, 20); // Adjust this value to control the smoothness of scrolling

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div
        className="overflow-x-auto whitespace-nowrap my-4 md:my-12"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
        ref={carouselRef}
      >
        {onlinedata.map((data, index) => (
          <div
            key={index}
            className="inline-block mx-2 sm:mx-3 md:mx-4 hover:cursor-pointer hover:scale-105 "
          >
            <Image
              src={data.image}
              className="rounded-full w-28 h-28 md:w-36 md:h-36"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {restaurantdata.map((res, index) => (
          <div
            key={index}
            className="inline-block mx-3 my-3 border border-solid border-gray-400 rounded-3xl hover:shadow-2xl hover:cursor-pointer hover:scale-105 hover:bg-white"
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
export { Carousel_Online, Restaurants, Carousel_Online_one };
