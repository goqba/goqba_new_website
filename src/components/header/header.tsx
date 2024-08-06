"use client";
import React, { useEffect, useState } from "react";
import Logo from "../ui/logo/logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.scrollY > 200),
      );
    }
  }, []);

  const handleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed top-0  mx-auto left-0 right-0 z-50",
        scrolled ? "bg-[#111111] " : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between py-6 container">
        <Logo variant="main" />
        <nav className="hidden lg:flex items-center gap-7">
          <div className="group dropdown relative text-lg font-medium">
            <span className="flex items-center gap-1 hover:underline underline-offset-2 font-semibold text-white hover:text-brand transition-all duration-200 cursor-pointer">
              Solutions <ChevronDown className="h-5 w-5" />
            </span>
            <div className="absolute pt-2 min-w-[200px] bg-none hidden group-hover:block">
              <ul className="bg-[#111111] p-5 rounded-sm space-y-2">
                <li>
                  <Link
                    href={"/asmit"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    GoQba ASMIT
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/seez"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    GoQba SeeZ
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    GoQba Hodu
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    GoQba BrainQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            className="text-lg font-semibold hover:underline underline-offset-2 hover:text-brand transition-all duration-200"
            href={"#services"}
          >
            Services
          </Link>
          <Link
            className="text-lg font-semibold hover:underline underline-offset-2 hover:text-brand transition-all duration-200"
            href={"mailto:goqba@goqba.com"}
          >
            Contact
          </Link>
          <div className="group dropdown relative text-lg font-medium">
            <span className="flex items-center gap-1 hover:underline underline-offset-2 font-semibold text-white hover:text-brand transition-all duration-200 cursor-pointer">
              About Us <ChevronDown className="h-5 w-5" />
            </span>
            <div className="absolute pt-2 min-w-[200px] bg-none hidden group-hover:block">
              <ul className="bg-[#111111] p-5 rounded-sm space-y-2">
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    News & Event
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-2 hover:text-brand transition-all duration-200 cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Link className="hidden lg:block" href={"mailto:goqba@goqba.com"}>
          <Button
            variant={"outline"}
            size={"lg"}
            className="bg-transparent rounded-lg border-white border-2 text-lg font-semibold hover:text-brand hover:border-transparent hover:border-brand hover:bg-transparent transition-colors duration-300"
          >
            Contact Us
          </Button>
        </Link>

        <div
          onClick={handleNav}
          className="fixed right-10 block lg:hidden z-50"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </div>

        <nav
          className={
            isOpen
              ? "fixed lg:hidden left-0 top-0 w-[80%] z-50 h-full border-r border-r-gray-900 bg-[#282D31] ease-in-out duration-500 flex flex-col"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="p-10 z-40">
            <Logo variant="main" />
          </div>
          <div
            onClick={handleNav}
            className={cn(
              "fixed bg-black/70 h-full w-full",
              !isOpen && "hidden",
            )}
          ></div>
          <div className="flex flex-col z-40">
            <Link
              className="text-lg py-5 px-10 w-full bg-transparent font-medium hover:bg-[#32363A]"
              href={"#solutions"}
            >
              Solutions
            </Link>
            <Link
              className="text-lg py-5 px-10 w-full bg-transparent font-medium hover:bg-[#32363A]"
              href={"#services"}
            >
              Services
            </Link>
            <Link
              className="text-lg py-5 px-10 w-full bg-transparent font-medium hover:bg-[#32363A]"
              href={"mailto:goqba@goqba.com"}
            >
              Contact
            </Link>
            <Link
              className="text-lg py-5 px-10 w-full bg-transparent font-medium hover:bg-[#32363A]"
              href={"#about"}
            >
              About Us
            </Link>
          </div>
          <div className="z-40 self-center mt-auto mb-10">
            <Link className="block" href={"mailto:goqba@goqba.com"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-brand rounded-lg border-brand border-2 text-lg font-semibold hover:text-white hover:border-transparent hover:bg-brand"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
