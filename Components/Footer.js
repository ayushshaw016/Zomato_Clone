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
                <select className="text-xl" disabled>
                  <option value="India" className="text-3xl">
                    India
                  </option>
                </select>
              </span>
            </span>
            <span className="mx-4">English</span>
          </div>
        </div>
      </div>
    </>
  );
};
export { Footer };
