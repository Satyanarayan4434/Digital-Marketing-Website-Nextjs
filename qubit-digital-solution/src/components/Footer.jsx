import Link from "next/link";
import { Github, Youtube, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/Footer.png')] bg-cover bg-center bg-no-repeat w-full text-white border-t border-gray-800 py-5">
      <div className="container w-11/12 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="block mb-4 md:mb-8">
              <span>Quibit Digital Solution</span>
            </Link>

            <div className="flex justify-center md:justify-start gap-4 pt-4">
              {[FaXTwitter, FaDiscord, Youtube, Github, Linkedin].map((Icon, index) => (
                <Link key={index} href="#" className="text-white hover:text-gray-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[14px] pb-3 text-center md:text-left">
            {[
              { title: "Services", links: ["SDK development & maintenance", "Cross-platform development"] },
              { title: "Products", links: ["Globe.dev", "Zapp.run", "Docs.page"] },
              { title: "Resources", links: ["Open source", "Blog"] },
              { title: "Company", links: ["About us", "Careers"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-medium text-base mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="#" className="hover:text-white">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="text-base text-gray-500 mb-4 sm:mb-0">
            Copyright © 2025 Invertase Limited. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-base text-gray-500">
            {["Privacy Policy", "Cookie Policy", "Terms of Service"].map((policy, index) => (
              <Link key={index} href="#" className="hover:text-white">
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
