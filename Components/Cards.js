import Image from "next/image";
const Hmpgcard1 = ({ cards }) => {
  return (
    <>
      <div className="flex flex-col  md:flex-row  mx-2 ">
        {cards.map((data, index) => (
          <div
            className="w-full md:w-1/3 ml-8 border border-gray-400 border-solid rounded-3xl hover:scale-110 hover:cursor-pointer mt-16 md:mt-0"
            key={index}
          >
            <Image
              src={data.img}
              alt="error"
              style={{ position: "center", width: "100vw", height: "30vh" }}
              className="rounded-t-3xl"
            />
            <p className="text-2xl mx-2 font-bold my-2">{data.event}</p>
            <p className="text-lg text mx-2 font-thin text-gray-500 my-2">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
const Hmpgcard2 = ({ cards }) => {
  return (
    <>
      <div className="md:mt-6 mb-6 md:md-10 mx-1  grid grid-cols-2 md:grid-cols-4 ">
        {cards.map((data, index) => (
          <div
            className="w-full rounded-3xl ml-1 md:ml-1 hover:cursor-pointer mt-4 md:mt-0 mx-auto"
            key={index}
          >
            <Image
              src={data.img}
              className="h-[25vh] w-[40vw] md:h-[40vh] md:w-[80vw]"
            />
            <div className="-mt-10 md:-mt-14 text-wrap ml-4 text-white">
              <p
                className="text-sm md:text-md lg:text-lg  font-bold"
                style={{ wordSpacing: "0.25rem" }}
              >
                {data.collection}
              </p>
              <p className="text-xs md:text-md lg:text-lg">{data.places}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const Localatiescard = ({ localitydata }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8 mb-6 md:mb-16 mx-6">
      {localitydata.map((data, index) => (
        <div
          className="mx-4 hover:cursor-pointer border border-solid border-gray-300 rounded-xl px-4 hover:shadow-lg"
          key={index}
        >
          <p
            className="text-sm md:text-xl md:my-2"
            style={{ wordSpacing: "0.25rem" }}
          >
            {data.placename}
          </p>
          <p className="text-xs md:text-lg md:my-2">
            {data.count}{" "}
            <span className="flex float-right text-2xl ">&gt;</span>
          </p>
        </div>
      ))}
    </div>
  );
};

const Nearme = ({ options }) => {
  return (
    <>
      <div className=" pt-1 md:pt-4 sm:pt-6 md:py-12">
        {options.map((data, index) => (
          <div
            className=" border border-solid border-gray-300 text-md md:text-xl  lg:text-2xl md:mt-6 rounded-xl  hover:shadow-xl my-2"
            key={index}
          >
            <select
              className="w-full px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 hover:cursor-pointer"
              disabled
            >
              <option
                value={data.text}
                className="text-md md:text-xl lg:text-3xl"
              >
                {data.text}
              </option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};
export { Hmpgcard1, Hmpgcard2, Localatiescard, Nearme };
