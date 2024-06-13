import Image from "next/image";
import { Navbar } from "@/Components/Navabar";
import { Homepage } from "@/Components/Homepage";
import { Orderonline } from "./orderonline";
import { Dining } from "@/Components/DiningIn/DiningIn";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      <Orderonline />
      {/* <Dining /> */}
    </>
  );
}
