import bg_image from "../Assets/navbar_img/navbar_bg.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 pb-8">
        <div className="flex flex-row justify-between pt-6 mx-24">
          <div className="">
            <h2 className="text-5xl">zomato</h2>
          </div>
          <div className="justify-center items-center">
            <span className="mx-4 border border-solid border-gray-300 px-4 py-2">
              <span className="inline-block mr-2">
                <Image src={bg_image} className="h-4 w-4" />
              </span>
              <span className="inline-block">
                <select className="text-xl bg-gray-100" disabled>
                  <option value="India" className="text-3xl">
                    India
                  </option>
                </select>
              </span>
            </span>
            <span className="mx-4 border border-solid border-gray-300 px-4 py-2">
              <span className="inline-block mr-2">
                <Image src={bg_image} className="h-4 w-4" />
              </span>
              <span className="inline-block">
                <select className="text-xl bg-gray-100" disabled>
                  <option value="India" className="text-3xl">
                    English
                  </option>
                </select>
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mx-24 mt-8 justify-around">
          <div>
            <h2 className="tracking-widest text-xl">ABOUT ZOMATO</h2>
            <p className="text-md text-gray-600 my-2">Who We Are</p>
            <p className="text-md text-gray-600 my-2">Blog</p>
            <p className="text-md text-gray-600 my-2">Work With Us</p>
            <p className="text-md text-gray-600 my-2">Investors Relations</p>
            <p className="text-md text-gray-600 my-2">Report Fraud</p>
            <p className="text-md text-gray-600 my-2">Press Kit</p>
            <p className="text-md text-gray-600 my-2">Contact US</p>
          </div>
          <div>
            <h2 className="tracking-widest text-xl">ZOMAVERSE</h2>
            <p className="text-md text-gray-600 my-2">Zomato</p>
            <p className="text-md text-gray-600 my-2">Blinkit</p>
            <p className="text-md text-gray-600 my-2">Feeding India</p>
            <p className="text-md text-gray-600 my-2">Hyperpure</p>
            <p className="text-md text-gray-600 my-2">Zomaland</p>
          </div>
          <div>
            <h2 className="tracking-widest text-xl">FOR RESTAURANTS</h2>
            <p className="text-md text-gray-600 my-2">Partner With US</p>
            <p className="text-md text-gray-600 my-2">Apps For You</p>
          </div>

          <div>
            <h2 className="tracking-widest text-xl">LEARN MORE</h2>
            <p className="text-md text-gray-600 my-2">Privacy</p>
            <p className="text-md text-gray-600 my-2">Security</p>
            <p className="text-md text-gray-600 my-2">Terms</p>
            <p className="text-md text-gray-600 my-2">Sitemap</p>
          </div>
          <div>
            <h2 className="tracking-widest text-xl">LEARN MORE</h2>
            <p className="text-md text-gray-600 my-2">Privacy</p>
            <p className="text-md text-gray-600 my-2">Security</p>
            <p className="text-md text-gray-600 my-2">Terms</p>
            <p className="text-md text-gray-600 my-2">Sitemap</p>
          </div>
        </div>
        <p className="border border-solid border-t-2  mx-4 md:mx-8 lg:mx-24"></p>
        <p className="mx-4 md:mx-8 lg:mx-24 mt-4 text-gray-700">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </>
  );
};
export { Footer };
