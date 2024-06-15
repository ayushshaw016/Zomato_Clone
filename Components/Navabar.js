import React from "react";
import bg_image from "../Assets/navbar_img/navbar_bg.png";
import flag from "../Assets/navbar_img/flag.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
        className="text-white bg-black  h-[30vh] md:h-[50vh]"
      >
        <nav>
          <div className="flex flex-row md:justify-around  pt-6">
            <div className="hidden md:block text-sm md:text-xl">
              Get the App
            </div>
            <div className="block">
              <ul className="flex flex-row">
                <Link href="/investors">
                  <li className="text-md md:text-xl mx-10">
                    Investor Relations
                  </li>
                </Link>
                <li className="mx-10 text-md text-xl">Add Restaurant</li>
                <li className="mx-10 hidden md:block">
                  <span className="inline-block">
                    <Image
                      src={flag}
                      className=" w-4 h-4 md:w-6 md:h-6 mx-2 rounded-full"
                    />
                  </span>
                  <span className="inline-block hover:cursor-pointer">
                    <select
                      className="border-0 bg-black text-white hover:cursor-pointer text-xs sm:text-md md:text-2xl"
                      value="Profile"
                    >
                      <option className="text-xs sm:text-sm md:text-xl">
                        Profile &ensp;
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Notifications
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Bookmarks
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Reviews
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Networks
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Find Friends
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Settings
                      </option>
                      <option className="text-xs sm:text-sm md:text-xl ">
                        Logout
                      </option>
                    </select>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center lg:mt-10">
            <div className="text-4xl md:text-6xl font-bold">zomato</div>
            <div className="text-2xl md:text-5xl mt-6 font-thin">
              Discover the Best Food &amp; drinks in Delhi NCR
            </div>
            <div></div>
          </div>
        </nav>
      </div>
    </>
  );
};
export { Navbar };
