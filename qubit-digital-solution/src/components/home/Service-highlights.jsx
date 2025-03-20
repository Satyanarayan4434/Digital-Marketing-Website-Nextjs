import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "@/components/Slider";
import SliderDesktop from "@/components/SliderDesktop";

export default function ServiceHighlights() {
  return (
    <div className="bg-[#d8d9df]  py-8 md:py-12 lg:py-16">
      {/* Text Content Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 mb-8 md:mb-12 lg:mb-16 px-4 md:px-8 lg:px-16 xl:px-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight 
            max-w-full md:max-w-[80%] lg:max-w-[60%]">
            Empowering brands with websites, SEO, social media, content, and
            advertising solutions.
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-700 
            max-w-full md:max-w-[75%] lg:max-w-[50%]">
            We craft stunning websites and deliver powerful digital marketing
            strategies to boost visibility, drive engagement, and maximize
            business growth.
          </p>

          <Link href="/" className="group flex items-center gap-1 
            text-[#f18252] hover:text-[#e56a3a] transition-colors
            text-lg md:text-xl font-semibold mt-4">
            Contact us now
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Slider Handling */}
        <div className="md:hidden">  {/* Mobile */}
          <Slider />
        </div>
        <div className="hidden md:block lg:hidden">  {/* Tablet */}
          <SliderDesktop tabletMode />
        </div>
        <div className="hidden lg:block">  {/* Desktop */}
          <SliderDesktop />
        </div>
      </div>
    </div>
  );
}