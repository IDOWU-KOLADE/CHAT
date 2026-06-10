import Image from "next/image";
import { Navbar } from "./COMPONENTS/LANDING-PAGE/Navbar";
import { HeroSection } from "./COMPONENTS/LANDING-PAGE/Hero";
import { WhyChooseSection } from "./COMPONENTS/LANDING-PAGE/Why";

export default function Home () {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <WhyChooseSection/>
    </div>
  )
}
