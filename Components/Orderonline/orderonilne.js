import { Orderonlinenavbar } from "./orderonlinenav";
import flag from "../../Assets/navbar_img/flag.png";
import Image from "next/image";
const Orderonline = () => {
  return (
    <>
      <Orderonlinenavbar />
      <div className="mx-4 lg:mx-16 ">
        <p className="text-md mt-6 text-gray-600">
          Home / India / Delhi NCR / Central Delhi /{" "}
          <span className="text-gray-400">Connaught Place Restaurants</span>
        </p>
        <div className="mt-16">
          <span className="mr-8 text-gray-500 block md:inline-block my-4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Dining Out</span>
          </span>
          <span className="mr-8 border-b-4 py-4 border-solid border-red-700 block md:inline-block w-2/5 md:w-auto my-4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Delivery</span>
          </span>
          <span className="mr-8 text-gray-500 block md:inline-block my4">
            <span className="inline-block">
              <Image src={flag} className="w-12 h-12 rounded-full" />
            </span>
            <span className="text-5xl inline-block">Nightlife</span>
          </span>
        </div>
        <div className="my-4">
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Filters
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Rating: 4.0+
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Pure Veg
          </span>
          <span className="mx-4 py-3 px-4 border border-solid border-gray-300 text-gray-400 rounded-lg hover:cursor-pointer hover:bg-gray-100">
            Cuisines
          </span>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 mt-8">
          <p className="text-4xl">Eat what makes you happy</p>
        </div>
      </div>
    </>
  );
};
export { Orderonline };
