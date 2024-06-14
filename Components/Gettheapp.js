"use client";
import Image from "next/image";
import { Nightlife } from "../Assets/Homepage/index.js";
import mobileapp from "../Assets/Homepage/mobileapp.png";

import { useRef } from "react";
const GettheApp = () => {
  const emailref = useRef(null);
  function handleemail() {
    // e.prevent.default();
    const inptvalue = emailref.current.value;
    console.log(inptvalue);
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around bg-[#efefea]  md:ml-0  md:pl-0">
        <div className="">
          <Image
            src={mobileapp}
            className="w-[20vw] h-[60vh] hidden lg:block"
          />
        </div>
        <div className="my-4 md:my-8 lg:md-12">
          <h2 className="text-xl md:text-4xl font-bold">Get the Zomato App</h2>
          <p className="text-md md:text-2xl font-thin mt-1 md:mt-4 text-wrap">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="flex flex-col sm:flex-row">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-1 md:py-2 md:px-4 lg:text-2xl mt-5 border border-solid border-gray-400 rounded-sm md:rounded-md lg:rounded-xl "
                ref={emailref}
              />
            </div>
            <div className="mt-2 sm:mt-4 md:mt-6">
              <span
                className="md:ml-2 text-white bg-red-400 text-xs lg:text-xl mr-3 px-2 py-2 md:px-3 md:py-3 rounded-sm md:rounded-xl border border-solid border-black hover:cursor-pointer"
                onClick={() => handleemail()}
              >
                Share App Link
              </span>
            </div>
          </div>
          <p className="text-sm md:text-md text-gray-400 mt-2">
            Download App from
          </p>
          <div className="inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-1 md:mt-4">
            <span className="inline-block">
              <Image src={Nightlife} className="w-6 h-6 mt-2 mx-2" />
            </span>
            <span className="inline-block mx-4 text-white">
              <p className="text-xs md:text-sm font-thin">GET IT ON</p>
              <p className="text-sm md:text-md">Google Play</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { GettheApp };
