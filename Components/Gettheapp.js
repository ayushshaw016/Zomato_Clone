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
        <div className="my-16">
          <h2 className="text-4xl font-bold">Get the Zomato App</h2>
          <p className="text-2xl font-thin mt-4 text-wrap">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="flex flex-col sm:flex-row">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-4 text-2xl mt-5 border border-solid border-gray-400 rounded-xl "
                ref={emailref}
              />
            </div>
            <div className="mt-8">
              <span
                className="text-white bg-red-400 text-xl mr-3 px-3 py-3 rounded-xl border border-solid border-black hover:cursor-pointer"
                onClick={() => handleemail()}
              >
                Share App Link
              </span>
            </div>
          </div>
          <p className="text-md text-gray-400 mt-2">Download App from</p>
          <div className="inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-4">
            <span className="inline-block">
              <Image src={Nightlife} className="w-10 h-10 mt-2 mx-2" />
            </span>
            <span className="inline-block mx-4 text-white">
              <p className="text-sm font-thin">GET IT ON</p>
              <p className="text-md">Google Play</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { GettheApp };
