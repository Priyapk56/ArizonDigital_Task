"use client";

import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';



export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Top black bar */}
        <div className="bg-black text-white text-sm py-2.5 px-4 flex justify-end items-center font-oswald">
          <div className="flex items-center space-x-4 font-normal">
            <a href="#" className="hover:underline">About Us</a>
            <div className="flex items-center space-x-1">
              <span>Select Currency:</span>
              <select className="bg-black text-white border-none focus:outline-none cursor-pointer" defaultValue="CAD">
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <a href="contact us" className="flex items-center space-x-1 hover:underline">
          <MdEmail className="text-sm" />
          <span>Contact Us</span>
        </a>
<a href="tel:4388002658" className="flex items-center space-x-1 hover:underline">
  <FaPhoneAlt className="text-sm" />
  <span>CAN: 438 800 2658</span>
</a>          </div>
        </div>

        {/* Main white header bar */}
        <div className="flex items-center py-6 px-6 bg-white">
          <div className="flex-shrink-0">
            <Image src="/icons/image.webp" alt="Logo" width={300} height={60} />
          </div>
          <div className="flex-1 flex justify-center">
            <div>
              <input
                type="text"
                placeholder="Search by reference"
                className="border border-black px-6 py-3 rounded-l-md w-72"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-r-md">Search</button>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <span className="material-icons text-sm">person</span>
              <span>Sign In / Register</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <span className="material-icons text-sm">history</span>
              <span>Recently Viewed</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:underline">
              <span className="material-icons text-sm">shopping_cart</span>
              <span>0</span>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[178px]" />
    </>
  );
}