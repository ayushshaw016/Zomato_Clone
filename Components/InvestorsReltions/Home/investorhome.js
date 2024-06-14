import { Investorhomenav } from "../investorhomenav";
import Image from "next/image";
import fileicon from "../invstrAssets/fileicon.png";
import { Offerings } from "../invstrscard";
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
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Presentations
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Shareholder's Letter
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6">
              <div className="py-4 px-2 border-r border-solid border-gray-100 bg-red-200 rounded-l-xl">
                <Image src={fileicon} className="w-16 h-16 block" />
              </div>
              <div className="text-sm md:text-lg lg:text-xl mt-8 pl-4 pr-0 md:pr-24 font-bold">
                Earnings Call Replay
              </div>
            </div>
            <div className="flex flex-row mt-4 border border-solid border-gray-200 rounded-xl my-4 md:my-6">
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
    </>
  );
};
export { Investorhome };
