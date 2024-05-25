import Image from "next/image";
const Hmpgcard1 = ({ cards }) => {
  return (
    <>
      <div className="flex flex-row  mx-2 ">
        {cards.map((data, index) => (
          <div
            className="w-1/3 ml-8 border border-gray-400 border-solid rounded-3xl hover:scale-110 hover:cursor-pointer"
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
      <div className="flex flex-row mt-6 mb-16 mx-6">
        {cards.map((data, index) => (
          <div
            className="w-1/4 rounded-3xl mx-3 md:mx-4 hover:cursor-pointer"
            key={index}
          >
            <Image src={data.img} style={{ width: "100vw", height: "50vh" }} />
            <div className="-mt-24 md:-mt-14 text-wrap ml-4 text-white">
              <p
                className="text-xl font-bold"
                style={{ wordSpacing: "0.25rem" }}
              >
                {data.collection}
              </p>
              <p className="text-lg">{data.places}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export { Hmpgcard1, Hmpgcard2 };
