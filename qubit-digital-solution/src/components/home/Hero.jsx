import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[url('/assets/Hero_BG.svg')] bg-center bg-[length:200%] bg-no-repeat h-screen w-full overflow-x-hidden ">
      <div>
        {/* Headings and TagLines */}
        <div>
          <div>Empowering Your Digital Future</div>
          <div>
            Empower your business with Qubit Digital Solution Pvt. Ltd. —
            delivering result-driven digital marketing strategies, SEO, and
            social media solutions to boost visibility, engage audiences, and
            drive growth effectively.
          </div>
        </div>

        <div>
          <div>TRUSTED BY INDUSTRY</div>
          <div>
            <Image src="/assets/asset 4.svg" alt="Partner Image" width={100} height={100}/>
            <Image src="/assets/asset 4.svg" alt="Partner Image" width={100} height={100}/>
            <Image src="/assets/asset 4.svg" alt="Partner Image" width={100} height={100}/>
          </div>
        </div>
      </div>
    </div>
  );
}
