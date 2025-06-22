import Link from "next/link";
import { Github, Youtube, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const serviceItems = [
  {
    title: "Brand Strategy Agency",
    href: "/services/brand-strategy",
  },
  {
    title: "Creative Designing Agency",
    href: "/services/creative-designing",
  },
  {
    title: "Digital Marketing Services",
    href: "/services/digital-marketing",
  },
  {
    title: "Web Development Services",
    href: "/services/web-development",
  },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

const resourceLinks = [
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/Footer.png')] bg-cover bg-center bg-no-repeat w-full text-white border-t border-gray-800 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Logo & Social Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left lg:max-w-xs">
            <Link href="/" className="inline-block mb-6 lg:mb-8">
              <span className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
                NeuPixelNet Digital
              </span>
            </Link>

            <div className="flex justify-center lg:justify-start gap-5 pt-4">
              {[FaXTwitter, FaDiscord, Youtube, Github, Linkedin].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-white hover:text-primary transition-colors p-1.5"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full max-w-4xl">
            {/* Services Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4 lg:mb-6">
                Services
              </h3>
              <ul className="space-y-3 text-gray-300">
                {serviceItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors block py-1.5 text-sm sm:text-base"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4 lg:mb-6">
                Company
              </h3>
              <ul className="space-y-3 text-gray-300">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors block py-1.5 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4 lg:mb-6">
                Resources
              </h3>
              <ul className="space-y-3 text-gray-300">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors block py-1.5 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address */}
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold text-lg mb-4 lg:mb-6">
                Resources
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  51/60, Dum Dum Road, <br /> Kolkata, West Bengal 700074, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Section */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center">
          <div className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} NeuPixelNet Digital. All rights
            reserved.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base text-gray-400">
            {[
              { name: "Privacy Policy", href: "/privacypolicy" },
              { name: "Cookie Policy", href: "/cookiepolicy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="hover:text-white transition-colors px-2 py-1"
              >
                {policy.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
