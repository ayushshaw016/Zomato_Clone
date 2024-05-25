import Image from "next/image";
import { Navbar } from "@/Components/Navabar";
import { Homepage } from "@/Components/Homepage";
export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}
