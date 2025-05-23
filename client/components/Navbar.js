
"use client";

import React from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const menuData = [
   {
    title: "Adhesives & Lubricants",
    columns: [
      {
        heading: "Shell Lubricants",
        items: ["Advance", "Aeroshell", "Air Tool Oil", "Argina", "Caprinus"],
      },
      {
        heading: "Kluber Products",
        items: ["Altemp", "Amblygon", "Asonic", "Barrierta", "Catenera"],
      },
      {
        heading: "Dow Corning Products",
        items: [
          "Silicone Grease",
          "Mold Release",
          "Sealant",
          "Compound",
          "Paste",
        ],
      },
    ],
  },
  {
    title: "Brands",
    columns: [
      {
        heading: "Top Brands",
        items: ["SKF", "FAG", "NSK", "NTN", "Timken"],
      },
    ],
  },
  {
    title: "Ball Bearings",
    columns: [
      {
        heading: "Types",
        items: [
          "Deep Groove",
          "Angular Contact",
          "Self Aligning",
          "Miniature",
          "Thrust",
        ],
      },
    ],
  },
  {
    title: "Roller Bearings",
    columns: [
      {
        heading: "Types",
        items: [
          "Cylindrical",
          "Tapered",
          "Spherical",
          "Needle",
          "Cam Followers",
        ],
      },
    ],
  },
  {
    title: "Housings and Inserts",
    columns: [
      {
        heading: "Categories",
        items: [
          "Pillow Block",
          "Flanged",
          "Take-Up",
          "Cartridge",
          "Split Housings",
        ],
      },
    ],
  },
  {
    title: "Linear",
    columns: [
      {
        heading: "Linear Products",
        items: ["Ball Screws", "Linear Guides", "Bushings", "Rails", "Stages"],
      },
    ],
  },
  {
    title: "Super Precision",
    columns: [
      {
        heading: "Options",
        items: ["High Speed", "Spindle", "Ceramic", "Hybrid", "Miniature"],
      },
    ],
  },
  {
    title: "Spherical Plains",
    columns: [
      {
        heading: "Types",
        items: [
          "Radial",
          "Angular",
          "Rod Ends",
          "Maintenance-Free",
          "Sealed",
        ],
      },
    ],
  },
  {
    title: "Power Transmission",
    columns: [
      {
        heading: "PT Components",
        items: ["Belts", "Chains", "Couplings", "Sprockets", "Pulleys"],
      },
    ],
  },
  {
    title: "Maintenance Tools",
    columns: [
      {
        heading: "Tools",
        items: [
          "Heaters",
          "Pullers",
          "Installation Tools",
          "Detectors",
          "Lubrication",
        ],
      },
    ],
  },
  {
    title: "Oil Seals",
    columns: [
      {
        heading: "Seal Types",
        items: [
          "Rotary",
          "Hydraulic",
          "Pneumatic",
          "Labyrinth",
          "V-Rings",
        ],
      },
    ],
  },
];


export default function Navbar() {
  return (
    <nav className="font-oswald bg-[#0f1b44] text-white text-sm px-6 py-3 z-40">
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
        {menuData.map((menu) => (

          <DropdownMenu key={menu.title} menu={menu} />
        ))}
      </div>
    </nav>
     
  );
}

function DropdownMenu({ menu }) {
  return (
    <div className="relative group min-w-[140px]">
      <button className="flex items-center hover:bg-[#1a2d6b] px-3 py-2 rounded font-bold text-base whitespace-nowrap w-full justify-center">
        {menu.title}
        <FaChevronDown className="text-xs ml-1" />
      </button>
      <div
        className="absolute top-full left-0 bg-white text-black shadow-lg py-6 px-8 hidden group-hover:flex group-hover:flex-wrap z-50"
        style={{
          maxHeight: "80vh",
          overflowY: "auto",
          gap: "3rem",
        }}
      >
        {menu.columns.map((col, index) => (
          <div key={index} className="min-w-[180px]">
            <h4 className="font-bold mb-2 text-black">{col.heading}</h4>
            <ul className="space-y-1">
              {col.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="block hover:underline text-sm text-gray-700 hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

