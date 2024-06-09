import Image from "next/image";

const Carousel_Online = ({ onlinedata }) => {
  return (
    <>
      <div
        className="overflow-x-auto whitespace-nowrap my-4 md:my-12"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      >
        {onlinedata.map((data, index) => (
          <div key={index} className="inline-block mx-6">
            <Image
              src={data.image}
              className="rounded-full w-24 h-24 md:w-40 md:h-40 "
            />
            <p className="text-center text-md md:text-2xl ">{data.item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const Restaurants = ({ restaurantdata }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {restaurantdata.map((res, index) => (
          <div
            key={index}
            className="inline-block mx-3 my-3 border border-solid border-gray-400 rounded-t-3xl"
          >
            <Image
              src={res.photo}
              className="w-full rounded-t-2xl"
              style={{ height: "40vh" }}
            />
            <div className="px-1">
              <span className="inline-block float-left">
                <p className="text-md md:text-lg">{res.name}</p>
                <p className="text-sm md:text-md text-gray-500 ">{res.type}</p>
              </span>
              <span className="inline-block float-right">
                <span className="block mr-10 pl-2 text-white bg-green-800 rounded-md mt-1">
                  {res.raiting}
                </span>
                <span className="block mt-1 font-sans tracking-widest text-md text-gray-400 font-thin">
                  {res.amount}
                </span>
                <span className="block text-sm font-bold">{res.dist}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { Carousel_Online, Restaurants };
