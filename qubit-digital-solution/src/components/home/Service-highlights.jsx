import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "@/components/Slider"
import SliderDesktop from "@/components/SliderDesktop";



export default function ServiceHighlights() {
  return (
    <div className=" bg-[#d8d9df]">
        <div className="flex flex-col items-start justify-start pt-[2rem] gap-2 lg:ml-[5rem]">
           <div className="text-xl lg:text-4xl font-bold lg:w-[50rem] w-[20rem]">Empowering brands with websites, SEO, social media, content, and advertising solutions.</div>
           <div className="text-md font-sans font-light lg:w-[50rem] w-[20rem]">We craft stunning websites and deliver powerful digital marketing strategies to boost visibility, drive engagement, and maximize business growth.</div>
           <div className="flex gap-1 text-[#f18252] items-center">Contact us now <IoIosArrowForward/></div>
        </div>
        <div className="flex lg:hidden">
            <Slider/>
        </div>
        <div className="hidden lg:flex">
            <SliderDesktop/>
        </div>
        <div></div>
    </div>
  );
}
