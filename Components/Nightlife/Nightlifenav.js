import Image from "next/image";
import flag from "../../Assets/navbar_img/flag.png";
import Link from "next/link";

const Nightlifenavbar = () => {
  return (
    <>
      <nav className="px-3 pb-4 bg-white border-b-2 border-solid  border-black">
        <ul className="flex flex-row justify-between">
          <Link href="/">
            <li className="text-2xl sm:text-3xl lg:text-6xl font-bold">
              zomato
            </li>
          </Link>

          <li>
            <span className="inline-block">
              <Image
                src={flag}
                className="w-4 h-4 md:w-8 md:h-8 rounded-full hover:scale-125 hover:cursor-pointer"
              />
            </span>

            <span className="inline-block">
              <select
                value="Ayush"
                className="text-xl md:text-2xl lg:text-4xl hover:cursor-pointer"
              >
                <option className=" text-xl md:text-2xl  ">Profile </option>
                <option className=" text-xl md:text-2xl  ">
                  Notifications
                </option>
                <option className=" text-xl md:text-2xl  ">Bookmarks</option>
                <option className=" text-xl md:text-2xl  ">Reviews</option>
                <option className=" text-xl md:text-2xl  ">Networks</option>
                <option className=" text-xl md:text-2xl  ">Find Friends</option>
                <option className=" text-xl md:text-2xl  ">Settings</option>
                <option className=" text-xl md:text-2xl  ">Logout</option>
              </select>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Nightlifenavbar };
