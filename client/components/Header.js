"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaUser,
  FaHistory,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="bg-black text-white text-sm py-2.5 px-4 font-oswald">
          <div className="md:hidden flex justify-center items-center space-x-2">
            <FaPhoneAlt className="text-white" />
            <span>Call Us</span>
          </div>

          <div className="hidden md:flex justify-end items-center space-x-4 font-bold">
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <div className="flex items-center space-x-1">
              <span>Select Currency:</span>
              <select
                className="bg-black text-white border-none focus:outline-none cursor-pointer"
                defaultValue="CAD"
              >
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <MdEmail className="text-sm" />
              <span>Contact Us</span>
            </a>
            <a
              href="tel:4388002658"
              className="flex items-center space-x-1 hover:underline"
            >
              <FaPhoneAlt className="text-sm" />
              <span>CAN: 438 800 2658</span>
            </a>
          </div>
        </div>

        <div className="py-4 px-4 md:px-6 bg-white">
          <div className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-2xl"
            >
              <FaBars />
            </button>

            <div className="flex-1 text-center">
              <Image
                src="/icons/image.webp"
                alt="Logo"
                width={180}
                height={50}
                className="mx-auto"
              />
            </div>

            <a href="#" className="text-2xl">
              <FaShoppingCart />
            </a>
          </div>

          <div className="md:hidden mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Search by reference"
              className="border border-black px-4 py-2 rounded-l-md w-full max-w-xs"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>

          <div className="hidden md:flex justify-between items-center">
            <div>
              <Image
                src="/icons/image.webp"
                alt="Logo"
                width={300}
                height={50}
              />
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="Search by reference"
                className="border border-black px-6 py-3 rounded-l-md w-72"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-r-md">
                Search
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaUser className="text-2xl" />
                <span>Sign In / Register</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaHistory className="text-2xl" />
                <span>Recently Viewed</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <FaShoppingCart className="text-2xl" />
                <span>0</span>
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[165px]" />

      <div className={`${navOpen ? "block" : "hidden"} md:block`}>
        <Navbar />
      </div>
    </>
  );
}
