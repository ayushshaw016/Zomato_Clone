"use client";
import Link from "next/link";
import React, { useState } from "react";
const Investorhomenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full  bg-red-500 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex  items-center relative">
            <div className="flex items-center  text-white font-bold text-2xl"></div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.771 5.771a1 1 0 0 1 1.414 0l5.586 5.586 5.586-5.586a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6zm0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div
              className={`absolute top-full  w-[100vw] px-3 bg-red-500 text-white backdrop-blur-sm py-4 lg:hidden ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col  bg-red-500 text-white"></div>
              <div>
                <p className="text-md sm:text-xl md:text-2xl lg:text-3xl">
                  <Link href="/">
                    <span className="font-bold">Zomato</span>{" "}
                  </Link>
                  <span className="hidden xl:inline-block">
                    | Investors Relations
                  </span>
                </p>
              </div>
              <div className="">
                <ul className="flex flex-row text-xs sm:text-md md:text-xl lg:text-2xl">
                  <li className="ml-2 lg:mx-4">Home</li>
                  <li className="ml-2 lg:mx-4">Financials</li>
                  <li className="ml-2 lg:mx-4">Anouncement</li>
                  <li className="ml-2 lg:mx-4">Blog</li>
                  <li className="ml-2 lg:mx-4">Governance</li>
                  <li className="ml-2 lg:mx-4 ">ESG</li>
                  <li className="ml-2 lg:mx-4">Resources</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-row justify-around bg-red-500 text-white py-4">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <Link href="/">
                    <span className="font-bold">Zomato</span>{" "}
                  </Link>
                  <span className="hidden xl:inline-block">
                    | Investors Relations
                  </span>
                </p>
              </div>
              <div>
                <ul className="flex flex-row text-sm sm:text-ms md:text-lg lg:text-xl">
                  <li className="mx-2 lg:mx-4">Home</li>
                  <li className="mx-2 lg:mx-4">Financials</li>
                  <li className="mx-2 lg:mx-4">Anouncement</li>
                  <li className="mx-2 lg:mx-4">Blog</li>
                  <li className="mx-2 lg:mx-4">Governance</li>
                  <li className="mx-2 lg:mx-4 ">ESG</li>
                  <li className="mx-2 lg:mx-4">Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Investorhomenav };
