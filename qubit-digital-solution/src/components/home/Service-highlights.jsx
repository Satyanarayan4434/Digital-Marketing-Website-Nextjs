import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "@/components/ui/Slider";

export default function ServiceHighlights() {
  return (
    <div>
      <div>
        <div>
          Empowering brands with websites, SEO, social media, content, and
          advertising solutions.
        </div>
        <div>
          We craft stunning websites and deliver powerful digital marketing
          strategies to boost visibility, drive engagement, and maximize
          business growth.
        </div>
        <div>
          Contact us now <IoIosArrowForward />
        </div>
      </div>
      <div>
        <Slider />
      </div>
      <div></div>
    </div>
  );
}
