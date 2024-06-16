import bg_image from "../Assets/navbar_img/navbar_bg.png";
import flag from "../Assets/navbar_img/flag.png";
import language from "../Assets/navbar_img/Language.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 pb-8">
        <div className="flex flex-col md:flex-row justify-between pt-6 mx-4  md:mx-24">
          <Link href="/">
            <h2 className="text-3xl md:text-5xl">zomato</h2>
          </Link>
          <div className="lg:justify-center items-center mt-3">
            <span className="mx-2 border border-solid border-gray-300 py-1 px-1 md:py-1 md:px-4">
              <span className="inline-block mr-2">
                <Image src={flag} className="h-4 w-4" />
              </span>
              <span className="inline-block">
                <select className="md:text-xl bg-gray-100" disabled>
                  <option value="India" className="md:text-3xl">
                    India
                  </option>
                </select>
              </span>
            </span>
            <span className="mx-2 border border-solid border-gray-300 py-1 px-1 md:py-1 md:px-4">
              <span className="inline-block mr-2 ">
                <Image src={language} className="h-4 w-4 " />
              </span>
              <span className="inline-block">
                <select className="md:text-xl bg-gray-100" disabled>
                  <option value="India" className="md:text-3xl">
                    English
                  </option>
                </select>
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-row mx-3 lg:mx-24 mt-8 justify-around">
          <div>
            <h2 className="tracking-widest text-sm xl:text-xl">ABOUT ZOMATO</h2>
            <p className="text-xs xl:text-md text-gray-600 my-2">Who We Are</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Blog</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Work With Us
            </p>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Investors Relations
            </p>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Report Fraud
            </p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Press Kit</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Contact US</p>
          </div>
          <div>
            <h2 className="tracking-widest text-sm xl:text-xl">ZOMAVERSE</h2>
            <p className="text-xs xl:text-md text-gray-600 my-2">Zomato</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Blinkit</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Feeding India
            </p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Hyperpure</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Zomaland</p>
          </div>
          <div>
            <h2 className="tracking-widest text-wrap text-sm xl:text-xl text-center md:text-left">
              FOR RESTAURANTS
            </h2>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Partner With US
            </p>
            <p className="text-xs xl:text-md text-gray-600 my-2">
              Apps For You
            </p>
          </div>

          <div>
            <h2 className="tracking-widest text-sm xl:text-xl">LEARN MORE</h2>
            <p className="text-xs xl:text-md text-gray-600 my-2">Privacy</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Security</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Terms</p>
            <p className="text-xs xl:text-md text-gray-600 my-2">Sitemap</p>
          </div>
          <div>
            <div className="hidden md:block">
              <h2 className="tracking-widest text-xl">Social Links</h2>
              <span className="my-2 inline-block ml-2">
                <Link href="">
                  <Image src={flag} className="rounded-full w-6 h-6" />
                </Link>
              </span>
              <span className="my-2 inline-block ml-2">
                <Link href="">
                  <Image src={flag} className="rounded-full w-6 h-6" />
                </Link>
              </span>
              <span className="my-2 inline-block ml-2">
                <Link href="">
                  <Image src={flag} className="rounded-full w-6 h-6" />
                </Link>
              </span>
              <span className="my-2 inline-block ml-2">
                <Link href="">
                  <Image src={flag} className="rounded-full w-6 h-6" />
                </Link>
              </span>
              <span className="my-2 inline-block ml-2">
                <Link href="">
                  <Image src={flag} className="rounded-full w-6 h-6" />
                </Link>
              </span>
            </div>
            <div className="md:flex md:flex-col hidden">
              <div className="inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-4 sm:w-[20vw]  lg:w-[15vw] xl:w-[13vw]">
                <span className="inline-block mb-1 mx-3">
                  <Image src={flag} className="w-6 h-6" />
                </span>
                <span className="inline-block   text-white">
                  <p className="text-xs">Download on </p>
                  <p className="text-sm md:text-md font-bold">App Store</p>
                </span>
              </div>
              <div className="inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-4 sm:w-[20vw]  lg:w-[15vw] xl:w-[13vw]">
                <span className="inline-block mb-1 mx-3">
                  <Image src={flag} className="w-6 h-6" />
                </span>
                <span className="inline-block   text-white">
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm md:text-md font-bold">Google Play</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden ml-3 mt-2">
          <h2 className="tracking-widest text-xl">Social Links</h2>
          <span className="my-2 inline-block ml-2">
            <Link href="">
              <Image src={flag} className="rounded-full w-6 h-6" />
            </Link>
          </span>
          <span className="my-2 inline-block ml-2">
            <Link href="">
              <Image src={flag} className="rounded-full w-6 h-6" />
            </Link>
          </span>
          <span className="my-2 inline-block ml-2">
            <Link href="">
              <Image src={flag} className="rounded-full w-6 h-6" />
            </Link>
          </span>
          <span className="my-2 inline-block ml-2">
            <Link href="">
              <Image src={flag} className="rounded-full w-6 h-6" />
            </Link>
          </span>
          <span className="my-2 inline-block ml-2">
            <Link href="">
              <Image src={flag} className="rounded-full w-6 h-6" />
            </Link>
          </span>
        </div>
        <div className="flex flex-row md:hidden">
          <div className="px-2 mx-3 inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-4 sm:w-[22vw] md:w-[24vw] lg:w-[15vw] xl:w-[13vw]">
            <span className="inline-block mb-1 mx-3">
              <Image src={flag} className="w-6 h-6" />
            </span>
            <span className="inline-block   text-white">
              <p className="text-xs">Download on </p>
              <p className="text-sm md:text-md font-bold">App Store</p>
            </span>
          </div>
          <div className="px-2 inline-block border border-solid border-black bg-[#1f4072] rounded-lg mt-4 sm:w-[22vw] md:w-[24] lg:w-[15vw] xl:w-[13vw]">
            <span className="inline-block mb-1 mx-3">
              <Image src={flag} className="w-6 h-6" />
            </span>
            <span className="inline-block   text-white">
              <p className="text-xs">Get it on</p>
              <p className="text-sm md:text-md font-bold">Google Play</p>
            </span>
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
