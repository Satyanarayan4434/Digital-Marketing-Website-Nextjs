"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  FileText,
  Mail,
  Settings,
  Menu,
  X,
  Home,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
    { name: "Users", href: "/admin/users", icon: User },
    { name: "Messages", href: "/admin/messages", icon: Mail },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Link href="/admin" className="flex items-center">
            </Link>
          </div>
          <div className="mt-8 flex flex-col flex-grow">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.href)
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Admin User
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <Home className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow">
          <div className="flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <Link
                      href="/admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <img
                        className="h-8 w-auto"
                        src="/placeholder.svg?height=32&width=120"
                        alt="PromotEdge Logo"
                      />
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex-1 space-y-1 px-2 py-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                          isActive(item.href)
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon
                          className={`mr-4 h-5 w-5 ${
                            isActive(item.href)
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500"
                          }`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex items-center">
                      <UserButton afterSignOutUrl="/" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">
                          Admin User
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/admin" className="ml-4">
              <img
                className="h-8 w-auto"
                src="/placeholder.svg?height=32&width=120"
                alt="PromotEdge Logo"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <Home className="h-5 w-5" />
              </Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        <div className="h-16"></div> {/* Spacer for fixed header */}
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
