import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RotatingCanvas from "@/components/RotatingShape";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";


export default function Hero() {
  return (
    <div className="bg-[url('/assets/Hero_BG.svg')] bg-center bg-[length:190%] bg-no-repeat min-h-screen w-full overflow-y-auto flex flex-col pb-16">

      {/* Text and Shape Section */}
      <div className="flex">
        {/* Text Section */}
        <div className="flex flex-col gap-12 lg:mt-[4rem] lg:ml-[5rem]">
          {/* Headings and TagLines */}
          <div className="flex flex-col  w-2xl">
            <div className="leading-[5rem]">
              <div className="bg-gradient-to-b from-slate-600 to-slate-50 bg-clip-text text-transparent lg:text-[4rem] font-bold">
                Empowering Your
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-50 bg-clip-text text-transparent lg:text-[4rem] font-bold">
                Digital Future.
              </div>
            </div>
            <div className="text-md text-[#b2b4bd]">
              Empower your business with Qubit Digital Solution Pvt. Ltd. —
              delivering result-driven digital marketing strategies, SEO, and
              social media solutions to boost visibility, engage audiences, and
              drive growth effectively.
            </div>
          </div>

          {/* Partner Section */}
          <div className="flex  flex-col w-2xl ">
            <div className="text-[#979bac]">TRUSTED BY INDUSTRY LEADERS</div>
            <div className="flex justify-between w-[24rem] items-center">
              <div>
                <Image
                  src="/assets/asset 4.svg"
                  alt="Partner Image"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/assets/asset 5.svg"
                  alt="Partner Image"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/assets/asset 6.svg"
                  alt="Partner Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* Contact Button Section */}
          <div className="flex w-md justify-between items-center">
            <div className="relative z-10 w-full md:w-auto px-16 py-2 bg-black rounded-full text-[#b2b4bd] border border-orange-300 transition-all cursor-pointer shadow-lg shadow-orange-300/20 hover:shadow-md hover:shadow-orange-400/30 hover:border-orange-400">
              Call Us Now
            </div>
            <div className="text-base text-[#b2b4bd] font-semibold flex justify-between items-center gap-1">
              Explore our services <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* 3d Component area */}
        <div className="">
          <main style={{ height: "100vh", width: "80vh", overflow: "hidden" }}>
            <RotatingCanvas />
          </main>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col gap-5 px-[4rem]">
          <div className="text-[#f8f8fa] text-5xl font-bold">Our services</div>
          <div className="flex justify-between items-center gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-base text-[#f8f8fa] items-center  "><MdOutlineLightbulb size="2rem"/>Brand Strategy Agency</div>
              <div className="text-[#5e616e] text-sm font-sans ">Empowering businesses with strategic branding solutions, innovative design, and impactful marketing to elevate growth, engagement, and customer loyalty worldwide.</div>
              <Link href="/" className="text-md font-semibold text-[#f8f8fa] flex gap-1 items-center">Learn More <IoIosArrowForward /></Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-base text-[#f8f8fa] items-center  "><FaPalette size="2rem"/>Creative Designing Agency</div>
              <div className="text-[#5e616e] text-sm font-sans ">Transforming ideas into stunning visuals with innovative designs, branding solutions, and creative strategies that captivate, inspire, and engage audiences.</div>
              <Link href="/" className="text-md font-semibold text-[#f8f8fa] flex gap-1 items-center">Learn More <IoIosArrowForward /></Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-base text-[#f8f8fa] items-center  "><BiTrendingUp size="2rem"/>Digital Marketing Services</div>
              <div className="text-[#5e616e] text-sm font-sans ">Driving growth through targeted digital strategies, SEO, social media, and content marketing to boost brand visibility and maximize ROI.</div>
              <Link href="/" className="text-md font-semibold text-[#f8f8fa] flex gap-1 items-center">Learn More <IoIosArrowForward /></Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 text-base text-[#f8f8fa] items-center  "><AiOutlineCode size="2rem"/>Web Development Services</div>
              <div className="text-[#5e616e] text-sm font-sans ">Building responsive, user-friendly websites with modern designs, seamless functionality, and optimized performance to enhance user experience and business growth.</div>
              <Link href="/" className="text-md font-semibold text-[#f8f8fa] flex gap-1 items-center">Learn More <IoIosArrowForward /></Link>
            </div>
          </div>
      </div>

      
    </div>
  );
}
