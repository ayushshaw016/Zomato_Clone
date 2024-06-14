import Image from "next/image";
import { Homepage } from "@/Components/Homepage";
import { Orderonline } from "./orderonline";
import { Dining } from "@/Components/DiningIn/DiningIn";
import { Investorhome } from "@/Components/InvestorsReltions/Home/investorhome";
export default function Home() {
  return (
    <>
      {/* <Homepage /> */}
      {/* <Orderonline /> */}
      {/* <Dining /> */}
      <Investorhome />
    </>
  );
}
