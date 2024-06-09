import Image from "next/image";
import flag from "../../Assets/navbar_img/flag.png";

const Orderonlinenavbar = () => {
  return (
    <>
      <nav className="px-3 lg:px-16 bg-white">
        <ul className="flex flex-row justify-between">
          <li className="text-6xl font-bold">zomato</li>

          <li>
            <span className="inline-block">
              <Image
                src={flag}
                className="w-8 h-8 rounded-full hover:scale-125 hover:cursor-pointer"
              />
            </span>

            <span className="inline-block">
              <select value="Ayush" className="text-4xl hover:cursor-pointer">
                <option className=" text-2xl ">Profile </option>
                <option className=" text-2xl ">Notifications</option>
                <option className=" text-2xl ">Bookmarks</option>
                <option className=" text-2xl ">Reviews</option>
                <option className=" text-2xl ">Networks</option>
                <option className=" text-2xl ">Find Friends</option>
                <option className=" text-2xl ">Settings</option>
                <option className=" text-2xl ">Logout</option>
              </select>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Orderonlinenavbar };
