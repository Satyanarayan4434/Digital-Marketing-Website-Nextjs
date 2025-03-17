import Link from "next/link";
import Image from "next/image";
import { Github, Youtube, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/Footer.png')] bg-cover bg-center bg-no-repeat min-h-[300px] w-full overflow-y-auto text-white border-t border-gray-800 py-5">
      <div className="container w-11/12 mx-auto px-4">
        <div className="flex justify-between">
          <div className="mb-8 md:mb-12">
            <Link href="/" className="block md:mb-8">
              <span>Quibit Digital Solotion</span>
            </Link>

            <div className="flex gap-6 mt-6 pt-16 ">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Discord"
                className="text-white hover:text-gray-300"
              >
                <FaDiscord size={20} />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-gray-300"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="text-white hover:text-gray-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-12 text-[14px]">
            <div className="">
              <h3 className="text-white font-medium text-base mb-4 md:mb-6">
                Services
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    SDK development
                    <br />& maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cross-platform
                    <br />
                    development
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-white font-medium text-base mb-4 md:mb-6">
                Products
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Globe.dev
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Zapp.run
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Docs.page
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-white font-medium text-base mb-4 md:mb-6">
                Resources
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Open source
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-white font-medium text-base mb-4 md:mb-6">
                Company
              </h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-base text-gray-500 sm:mb-0 text-center sm:text-left">
            Copyright © 2025 Invertase Limited. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base text-gray-500 text-center sm:text-left">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
