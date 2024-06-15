import { Investorhomenav } from "../investorhomenav";
import Image from "next/image";
import fileicon from "../invstrAssets/fileicon.png";
import { Offerings, Beyondbussiness, Blogs } from "../invstrscard";
import buss1 from "../invstrAssets/buss1.png";
import buss2 from "../invstrAssets/buss2.png";
import buss3 from "../invstrAssets/buss3.png";
import buss4 from "../invstrAssets/buss4.png";
import { Footer } from "@/Components/Footer";
const Investorhome = () => {
  const offerings = [
    {
      heading: "Food delivery",
      text: "Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",
      IMG: fileicon,
      bothead1: "INR 8,439 crore",
      bottext1: "Food delivery GOV",
      bothead2: "19.0 million",
      bottext2: "Avg. monthly transacting customers",
    },
    {
      heading: "Food delivery",
      text: "Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",
      IMG: fileicon,
      bothead1: "INR 8,439 crore",
      bottext1: "Food delivery GOV",
      bothead2: "19.0 million",
      bottext2: "Avg. monthly transacting customers",
    },
    {
      heading: "Food delivery",
      text: "Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",
      IMG: fileicon,
      bothead1: "INR 8,439 crore",
      bottext1: "Food delivery GOV",
      bothead2: "19.0 million",
      bottext2: "Avg. monthly transacting customers",
    },
    {
      heading: "Food delivery",
      text: "Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",
      IMG: fileicon,
      bothead1: "INR 8,439 crore",
      bottext1: "Food delivery GOV",
      bothead2: "19.0 million",
      bottext2: "Avg. monthly transacting customers",
    },
  ];

  const business = [
    {
      heading: "Feeding India",
      content:
        "A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India",
      IMG1: buss2,
    },
    {
      heading: "Net zero emissions",
      content:
        "Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033",
      IMG1: buss3,
    },
    {
      heading: "Reducing plastic waste",
      content:
        "Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022",
      IMG1: buss4,
    },
  ];

  const blogs = [
    {
      minheading: "abc",
      heading: "Feeding India",
      content:
        "A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India",
      IMG1: buss2,
    },
    {
      minheading: "abc",
      heading: "Feeding India",
      content:
        "A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India",
      IMG1: buss3,
    },
    {
      minheading: "abc",
      heading: "Feeding India",
      content:
        "A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India",
      IMG1: buss4,
    },
  ];
  return (
    <>
      <Investorhomenav />
      <div className="pt-32 bg-red-500 text-white px-3 lg:px-16 flex flex-col md:flex-row justify-around pb-12">
        <div className="">
          <div className="my-2 sm:my-4 md:my-6 lg:my-8 pb-2 sm:pb-4 md:pb-6 lg:pb-14 border-solid border-b-2 border-white">
            <p className="text-lg md:text-xl lg:text-3xl font-serif">
              Better food for more people
            </p>
            <p className="text-md md:text-lg lg:text-2xl font-bold italic">
              Zomato <spna>Hyperpure</spna>
            </p>
          </div>
          <div className="my-2 sm:my-4 md:my-6 lg:my-8 pb-2 sm:pb-4 md:pb-6 lg:pb-14 border-solid border-b-2 border-white">
            <p className="text-lg md:text-xl lg:text-3xl font-serif">
              Instant commerce indistinguishable from magic
            </p>
            <p className="text-md md:text-lg lg:text-2xl font-bold italic">
              Blinkit
            </p>
          </div>
          <div className="my-2 sm:my-4 md:my-6 lg:my-8 pb-2 sm:pb-4 md:pb-6 lg:pb-14 border-solid border-b-2 border-white">
            <p className="text-lg md:text-xl lg:text-3xl font-serif">
              Make India Malnutriotion Free
            </p>
            <p className="text-md md:text-lg lg:text-2xl font-bold italic">
              feeding india
            </p>
          </div>
        </div>

        <div className="">
          <div className="mx-10 md:mx-32  text-black border border-solid border-gray-200 px-6 md:px-10 pt-4 pb-2 bg-white rounded-xl w-[70vw] md:w-auto">
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              Company's Overview
            </p>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6 hover:cursor-pointer">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Presentations
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6 hover:cursor:pointer">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Shareholder's Letter
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6 hover:cursor-pointer">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Earnings Call Replay
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6 hover:cursor-pointer">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Earnings Call Transcript
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-6 md:mx-10">
        <p className="text-lg md:text-2xl lg:text-4xl font-bold mt-2 md:mt-3 lg:mt-6">
          Our Core offerings
        </p>
        <Offerings offerings={offerings} />
      </div>
      <div className="px-4 sm:px-6 md:px-10 bg-gray-100 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
        <p className="text-lg md:text-2xl lg:text-4xl font-bold mt-2 md:mt-3 lg:mt-6 tracking-wider">
          Beyond Bussiness
        </p>
        <p className="mt-1 md:mt-4 tracking-wide text-md sm:text-xl md:text-xl lg:text-2xl text-gray-500 font-semibold">
          At Zomato, our business approach is guided by our commitment to
          responsible and sustainable growth. Our ESG update outlines the many
          ways in which we make the impact of our business more sustainable and
          help make the world a better place for everyone. Some of our key
          sustainability initiatives include:
        </p>
        <Beyondbussiness business={business} />
        <p className="text-red-400 text-sm md:text-lg lg:text-xl ml-4">
          See the latest ESG Updates
        </p>
      </div>
      <div className="mt-3 md:mt-4 lg:mt-6 mx-4 md:mx-5 lg:mx-10">
        <p className="text-lg md:text-2xl lg:text-4xl font-bold border-b border-gray-400 py-4">
          Corporate announcements
        </p>
        <div className="border-b border-solid border-gray-300">
          <p className="text-md lg:text-xl text-gray-400 font-thin sm:my-1 lg:my-2">
            31 May 2024
          </p>
          <p className="text-lg md:text-2xl lg:text-4xl sm:mb-1 md:mb-2">
            Zomato - Newspaper Publication (Postal Ballot Notice)
          </p>
          <p className="text-sm sm:text-md md:text-xl text-red-500">
            Read More
          </p>
        </div>
        <div className="border-b border-solid border-gray-300">
          <p className="text-md lg:text-xl text-gray-400 font-thin sm:my-1 lg:my-2">
            31 May 2024
          </p>
          <p className="text-lg md:text-2xl lg:text-4xl sm:mb-1 md:mb-2">
            Zomato - Intimation of Postal Ballot Notice to Stock Exchanges
          </p>
          <p className="text-sm sm:text-md md:text-xl text-red-500">
            Read More
          </p>
        </div>

        <button className="bg-red-500 text-white text-md md:text-lg lg:text-xl  px-1 py-1 md:px-2 md:py-2 sm:my-1 md:my-2 lg:my-4 rounded-md">
          See all anouncements
        </button>
      </div>
      <div className="pt-3 md:pt-4 lg:pt-6 px-4 md:px-5 lg:px-10 pb-2 sm:pb-3 md:pb-6 lg:pb-12 bg-gray-100">
        <p className="text-md sm:text-lg md:text-2xl lg:text-4xl">
          From Our blogs
        </p>
        <Blogs blogs={blogs} />
        <button className="bg-red-500 text-white text-md md:text-lg lg:text-xl px-1 py-1 md:px-2 md:py-2 rounded-md md:rounded-lg">
          Read Our Blogs
        </button>
      </div>
      <div className="flex flex-col md:flex-row mx-2 sm:mx-3 md:mx-5 lg:mx-12 mt-2 md:mt-4 lg:mt-6 justify-between my-4">
        <div className="border-b border-solid border-gray-600 md:border-0">
          <p className="text-lg md:text-2xl lg:text-4xl font-bold">
            Subscribe to our email alerts
          </p>
          <p className="text-md sm:text-lg md:text-xl sm:my-1 md:my-2 text-gray-700">
            Get regular updates through emails
          </p>
          <p>
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 md:px-3 md:py-2 w-[25vw]  sm:my-1 md:my-2 lg:my-3 border-2 border-solid border-green-800"
            />
          </p>
          <button className="text-md md:text-xl bg-red-500 text-white py-1 px-1 md:px-2 md:py-2 rounded-md my-1 md:my-2">
            Subscribe
          </button>
        </div>
        <div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
            Have Questions
          </p>
          <p className="text-sm md:text-lg lg:text-xl sm:my-1 md:my-2 lg:my-3 text-gray-600">
            Reach out to us by emailing at{" "}
            <span className="text-red-400">shareholders@zomato.com</span>, and
            we&apos;ll get back to you.
          </p>
          <button className="bg-red-500 text-white px-2 py-1 md:px-3 md:py-2 md:text-lg rounded-md md:rounded-lg my-1 md:my-3">
            Contact US
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export { Investorhome };
