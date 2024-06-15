import Image from "next/image";
const Offerings = ({ offerings }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {offerings.map((data, index) => (
          <div
            key={index}
            className="border border-solid border-black my-2 rounded-xl md:mx-4 hover:bg-white hover:cursor-pointer hover:shadow-2xl "
            data-aos="fade-up"
          >
            <div className="flex flex-row mx-3 md:mx-5 mb-4">
              <div className="w-[80vw] border-b border-solid border-gray-300">
                <p className="mt-1 md:mt-2 lg:mt-3 text-2xl font-bold">
                  {data.heading}
                </p>
                <p className="mt-1 md:mt-2 lg:mt-3 text-sm  text-gray-500">
                  {data.text}
                </p>
                <p className="my-1 md:mt-2 lg:mt-3 font-bold text-md  text-gray-400">
                  Q4FY24
                </p>
              </div>
              <div className="mr-2">
                <Image src={data.IMG} className="w-28 h-28 md:w-20 md:h-20" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row my-2 mx-3 md:mx-5 md:justify-between">
              <div className="my-1 ">
                <p className="text-xl ">{data.bothead1}</p>
                <p className="text-md  font-thin">{data.bottext1}</p>
              </div>
              <div className="my-1">
                <p className="text-xl ">{data.bothead2}</p>
                <p className="text-md  font-thin">{data.bottext2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Beyondbussiness = ({ business }) => {
  return (
    <div className="grid grid-cols- md:grid-cols-3 justify-between my-2 sm:my-3 md:my-4 lg:my-6">
      {business.map((d, index) => (
        <div
          key={index}
          className="border border-solid border-gray-300  rounded-lg hover:cursor-pointer  mx-3 md:mx-4 mt-2 md:mt-0"
        >
          <div>
            <Image src={d.IMG1} className="w-full h-[30vh] rounded-t-lg" />
          </div>
          <div className="px-2 ">
            <p className="text-lg md:text-xl lg:text-2xl font-bold my-1  md:my-2">
              {d.heading}
            </p>
            <p className="text-md md:text-lg lg:text-xl tracking-wider text-gray-500">
              {d.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Blogs = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mb-1 sm:mb-2 md:mb-4 lg:mb-6 md:mt-3">
      {blogs.map((data, index) => (
        <div
          key={index}
          className=" mx-2 md:mx-3 lg:mx-4 hover:cursor-pointer mt-4 md:mt-0 border border-solid border-gray-400 "
        >
          <div className="">
            <Image src={data.IMG1} className="w-full" />
          </div>
          <div className="">
            <p className="text-sm sm:text-md md:text-lg text-gray-300">
              {data.minheading}
            </p>
            <p className="md:text-xl lg:text-2xl sm:my-1 md:my-2">
              {data.heading}
            </p>
            <p className="text-sm sm:text-md lg:text-lg tracking-wide text-gray-700">
              {data.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export { Offerings, Beyondbussiness, Blogs };
