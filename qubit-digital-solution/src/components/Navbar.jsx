"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const serviceItems = [
  {
    title: "Brand Strategy Agency",
    description: "Strategic branding solutions for your business",
    href: "/services/brand-strategy",
  },
  {
    title: "Creative Designing Agency",
    description: "Innovative design solutions that stand out",
    href: "/services/creative-designing",
  },
  {
    title: "Digital Marketing Services",
    description: "Comprehensive digital marketing strategies",
    href: "/services/digital-marketing",
  },
  {
    title: "Web Development Services",
    description: "Custom web solutions for your needs",
    href: "/services/web-development",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const router = useRouter();

  // Check if the user has an admin role via publicMetadata
  const isAdmin = user?.publicMetadata?.role === "admin";

  // Close the services dropdown if clicking outside of it.
  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  // Handle navigation to custom signup page
  const handleSignUpClick = () => {
    router.push("/signup");
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-black shadow-sm backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8 bg-[#040406] text-[#b2b4bd]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 transition-transform duration-300"
          >
            <Image
              src="/Qubit-Digital-Solution-Logo.svg"
              alt="Qubit Digital Solution"
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#b2b4bd] hover:text-white transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative" ref={servicesRef}>
                <button
                  className="flex items-center text-sm font-semibold leading-6 text-gray-300 hover:text-white relative  duration-200"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <span className="">{link.name}</span>
                  <ChevronDown className="ml-1 h-4 w-4  transition-colors duration-200" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </button>
                {servicesOpen && (
                  <div
                    className="absolute left-0 mt-2 w-[400px] rounded-md bg-gray-900/95 backdrop-blur-md shadow-lg ring-1 ring-gray-800 focus:outline-none z-50 transition-opacity duration-300 ease-in-out"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-3">
                      <div className="grid gap-2">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block p-3 hover:bg-gray-800 rounded-md group transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="text-sm font-medium text-white mb-1 transition-colors duration-200">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-200">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-gray-300 duration-200"
              >
                <span className="">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            )
          )}
          {isAdmin && (
            <Link
              href="/admin"
              className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 relative group transition-colors duration-200"
            >
              <span>Dashboard</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {isSignedIn ? (
            <div className="transition-transform hover:scale-105 duration-200">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="lg"
                  className="transition-colors duration-200 hover:text-primary hover:bg-gray-900"
                >
                  Sign In
                </Button>
              </SignInButton>
              <Button
                size="lg"
                variant="default"
                className="transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                onClick={handleSignUpClick}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="fixed inset-0 flex ">
            <div className="relative flex w-full h-screen max-w-sm flex-1 flex-col bg-[#040406] pb-4 pt-5">
              <div className="flex items-center justify-between px-4">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5 transition-transform duration-200 hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/Qubit-Digital-Solution-Logo.svg"
                    alt="Qubit Digital Solution"
                    width={150}
                    height={150}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-800">
                  <div className="space-y-2 py-6 px-4">
                    {navLinks.map((link) =>
                      link.hasDropdown ? (
                        <div key={link.name} className="space-y-2">
                          <button
                            className="flex w-full items-center justify-between -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-primary hover:bg-gray-800/60 transition-all duration-200"
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                          >
                            {link.name}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
                                mobileServicesOpen
                                  ? "rotate-180 text-primary"
                                  : ""
                              }`}
                            />
                          </button>

                          {mobileServicesOpen && (
                            <div className="ml-4 pl-2 border-l border-gray-700 space-y-2">
                              {serviceItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex flex-col -mx-3 rounded-lg px-3 py-2 text-base leading-7 text-gray-300 hover:bg-gray-800/60 hover:text-white transition-all duration-200 transform hover:translate-x-1"
                                  onClick={() => {
                                    setMobileServicesOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  <span className="font-medium hover:text-primary transition-colors duration-200">
                                    {item.title}
                                  </span>
                                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                    {item.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-primary hover:bg-gray-800/60 transition-all duration-200 transform hover:translate-x-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )
                    )}
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="-mx-3 flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:text-primary/80 hover:bg-gray-800/60 transition-all duration-200 transform hover:translate-x-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <div className="py-6 px-4 flex flex-col gap-4">
                    {isSignedIn ? (
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-300">
                          Hello, {user.firstName || "User"}
                        </span>
                        <div className="transition-transform hover:scale-105 duration-200">
                          <UserButton afterSignOutUrl="/" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <SignInButton mode="modal">
                          <Button
                            variant="outline"
                            className="w-full justify-center transition-transform duration-200 hover:scale-105 hover:shadow-md"
                          >
                            Sign In
                          </Button>
                        </SignInButton>
                        <Button
                          className="w-full justify-center transition-transform duration-200 hover:scale-105 hover:shadow-md"
                          onClick={handleSignUpClick}
                        >
                          Sign Up
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
