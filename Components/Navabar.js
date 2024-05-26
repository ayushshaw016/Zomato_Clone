import React from "react";
import bg_image from "../Assets/navbar_img/navbar_bg.png";
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
                <li className="mx-10">Ayush</li>
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
