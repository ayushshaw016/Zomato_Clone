import React from "react";
import bg_image from "../Assets/navbar_img/navbar_bg.png";
import flag from "../Assets/navbar_img/flag.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg_image})`,
          height: "60vh",
        }}
        className="bg-black text-white"
      >
        <nav>
          <div className="flex flex-row justify-around  pt-6">
            <div className="text-lg">Get the App</div>
            <div className="text-xl">
              <ul className="flex flex-row">
                <li className="mx-10">Investor Relations</li>
                <li className="mx-10">Add Restaurant</li>
                <li className="mx-10">
                  <span className="inline-block">
                    <Image src={flag} className="w-4 h-4 mx-2 rounded-full" />
                  </span>
                  <span className="inline-block hover:cursor-pointer">
                    <select
                      className="border-0 bg-black text-white hover:cursor-pointer"
                      value="Profile"
                    >
                      <option className=" text-2xl ">Profile &ensp;</option>
                      <option className=" text-2xl ">Notifications</option>
                      <option className=" text-2xl ">Bookmarks</option>
                      <option className=" text-2xl ">Reviews</option>
                      <option className=" text-2xl ">Networks</option>
                      <option className=" text-2xl ">Find Friends</option>
                      <option className=" text-2xl ">Settings</option>
                      <option className=" text-2xl ">Logout</option>
                    </select>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <div className="text-7xl font-bold">zomato</div>
            <div className="text-5xl mt-6 font-thin">
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
