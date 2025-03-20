"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  const { isSignedIn, user } = useUser();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const isAdmin = user?.publicMetadata?.role === "admin";

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

  return (
    <header className="bg-black shadow-sm backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:px-8 bg-[#040406] text-[#b2b4bd]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#b2b4bd]"
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
                  className="flex items-center text-sm font-semibold leading-6 text-gray-300 hover:text-white"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute left-0 mt-2 w-[400px] rounded-md bg-gray-900/95 backdrop-blur-md shadow-lg ring-1 ring-gray-800 focus:outline-none z-50"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-3">
                      <div className="grid gap-2">
                        {serviceItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block p-3 hover:bg-gray-800 rounded-md group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="text-sm font-medium text-white mb-1">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-400 group-hover:text-gray-300">
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
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            )
          )}
          {isAdmin && (
            <Link
              href="/admin"
              className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="lg">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="lg" variant="default">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full max-w-sm flex-1 flex-col overflow-y-auto bg-white pb-4 pt-5">
              <div className="flex items-center justify-between px-4">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-xl font-bold text-primary">
                    Qubit Digital Solution
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 px-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                  </div>
                  <div className="py-6 px-4 flex flex-col gap-4">
                    {isSignedIn ? (
                      <div className="flex items-center gap-4">
                        <span className="text-sm">
                          Hello, {user.firstName || "User"}
                        </span>
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    ) : (
                      <>
                        <SignInButton mode="modal">
                          <Button
                            variant="ghost"
                            className="w-full justify-center"
                          >
                            Sign In
                          </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                          <Button className="w-full justify-center">
                            Sign Up
                          </Button>
                        </SignUpButton>
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
