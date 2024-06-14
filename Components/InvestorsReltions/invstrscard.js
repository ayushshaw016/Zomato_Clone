import Image from "next/image";
const Offerings = ({ offerings }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {offerings.map((data, index) => (
          <div
            key={index}
            className="border border-solid border-black my-2 rounded-xl md:mx-4 hover:bg-white hover:cursor-pointer hover:scale-105 hover:shadow-xl"
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

export { Offerings };
