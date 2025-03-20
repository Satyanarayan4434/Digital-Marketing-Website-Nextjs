import Link from "next/link";
import Image from "next/image";
import RotatingCanvas from "@/components/RotatingShape";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";

export default function Hero() {
  const services = [
    {
      icon: MdOutlineLightbulb,
      title: "Brand Strategy Agency",
      description: "Empowering businesses with strategic branding solutions, innovative design, and impactful marketing to elevate growth, engagement, and customer loyalty worldwide."
    },
    {
      icon: FaPalette,
      title: "Creative Designing Agency",
      description: "Transforming ideas into stunning visuals with innovative designs, branding solutions, and creative strategies that captivate, inspire, and engage audiences."
    },
    {
      icon: BiTrendingUp,
      title: "Digital Marketing Services",
      description: "Driving growth through targeted digital strategies, SEO, social media, and content marketing to boost brand visibility and maximize ROI."
    },
    {
      icon: AiOutlineCode,
      title: "Web Development Services",
      description: "Building responsive, user-friendly websites with modern designs, seamless functionality, and optimized performance to enhance user experience and business growth."
    }
  ];

  return (
    <div className="lg:bg-[url('/assets/Hero_BG.svg')] bg-[url('/assets/Hero_Img_MB.svg')] bg-center bg-cover lg:bg-[length:205%] bg-no-repeat min-h-screen w-full overflow-y-auto flex flex-col pb-16">
      {/* Text and Shape Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between pt-7">
        {/* Text Section */}
        <div className="flex flex-col gap-6 lg:gap-12 lg:mt-[4rem] lg:ml-[5rem] px-4 lg:px-0 max-w-2xl lg:max-w-none">
          {/* Headings and TagLines */}
          <div className="flex flex-col">
            <div className="leading-[3rem] lg:leading-[5rem]">
              <h1 className="bg-gradient-to-b from-slate-600 to-slate-50 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[4rem] font-bold">
                Empowering Your
              </h1>
              <h1 className="bg-gradient-to-b from-slate-600 to-slate-50 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-[4rem] font-bold">
                Digital Future.
              </h1>
            </div>
            <p className="text-sm md:text-base text-[#b2b4bd] mt-4">
              Empower your business with Qubit Digital Solution Pvt. Ltd. —
              delivering result-driven digital marketing strategies, SEO, and
              social media solutions to boost visibility, engage audiences, and
              drive growth effectively.
            </p>
          </div>

          {/* Partner Section */}
          <div className="flex flex-col mt-4 lg:mt-0">
            <div className="text-xs md:text-sm text-[#979bac]">TRUSTED BY INDUSTRY LEADERS</div>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-2 w-full md:w-[24rem]">
              {[4, 5, 6].map((assetNum) => (
                <div key={assetNum} className="w-20 md:w-24">
                  <Image
                    src={`/assets/asset ${assetNum}.svg`}
                    alt="Partner Image"
                    width={100}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
            <button className="relative z-10 w-full md:w-auto px-8 md:px-16 py-2 bg-black rounded-full text-[#b2b4bd] border border-orange-300 transition-all cursor-pointer shadow-lg shadow-orange-300/20 hover:shadow-md hover:shadow-orange-400/30 hover:border-orange-400">
              Call Us Now
            </button>
            <div className="text-sm md:text-base text-[#b2b4bd] font-semibold flex items-center justify-center gap-1">
              Explore our services <IoIosArrowForward />
            </div>
          </div>

          {/* Mobile-only 3D Shape */}
          <div className="lg:hidden mt-8">
            <div className="h-[50vh] w-full overflow-hidden">
              <RotatingCanvas />
            </div>
          </div>
        </div>

        {/* Desktop-only 3D Shape */}
        <div className="hidden lg:block mt-8 lg:mt-0">
          <div className="h-[100vh] w-[80vh] overflow-hidden">
            <RotatingCanvas />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col gap-5 px-4 md:px-8 lg:px-[4rem] mt-12 lg:mt-0">
        <div className="text-[#f8f8fa] text-3xl md:text-4xl lg:text-5xl font-bold">Our services</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-2 text-sm md:text-base text-[#f8f8fa] items-center">
                <service.icon size="1.5rem" className="md:h-8 md:w-8" />
                {service.title}
              </div>
              <p className="text-[#5e616e] text-xs md:text-sm font-sans">
                {service.description}
              </p>
              <Link
                href="/"
                className="text-sm md:text-base font-semibold text-[#f8f8fa] flex gap-1 items-center hover:text-orange-300 transition-colors"
              >
                Learn More <IoIosArrowForward />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}