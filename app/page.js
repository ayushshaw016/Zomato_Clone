import Image from "next/image";
import { Navbar } from "@/Components/Navabar";
import { Homepage } from "@/Components/Homepage";
import { Orderonline } from "@/Components/Orderonline/orderonilne";
export default function Home() {
  return (
    <>
      {/* <Navbar />
      <Homepage /> */}
      <Orderonline />
    </>
  );
}
