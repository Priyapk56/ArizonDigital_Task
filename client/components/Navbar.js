
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
        items: [ "Advance", "Aeroshell", "Air Tool Oil", "Argina", "Caprinus",
          "Corena", "Diala", "Gadinia", "Gadus", "Heat Transfer Oil", "Helix",
          "Hydraulic", "Melina", "Morlina", "Mysella", "Naturelle", "Nautilus",
          "Omala", "Refrigeration", "Rhodina", "Rimula", "Rotella", "Skydrol",
          "Spirax", "Sterak", "Tegula", "Tellus", "Tonna"],
      },
      {
        heading: "Kluber Products",
        items: [ "Altemp", "Amblygon", "Asonic", "Barrierta", "Catenera",
          "Centoplex", "Constant", "Contrakor", "Costrac", "Duotempi",
          "Fluoropan", "Forminol", "Grafloscon", "Hotemp"],
      },
      {
        heading: "Dow Corning Products",
        items: [
          
        ],
      },
    ],
  },
  {
    title: "Brands",
    columns: [
      {
        heading: "SKF",
        items: ["Angle Rings", "Angular Contact Spherical Plain", "CARB Toroidal Roller Bearing",
           "Cylindrical Roller Bearing", "Deep Groove Radial Ball Bearings", "Double Row Angular Contact",
            "Double Row Self Aligning", "Flanged Housing", "Four Point Contact Bearings", "Magneto",
             "Maintenance Products", "Miniatures", "Plummer Block Housing", "Radial Shaft Seals"],
      },
    ],
  },
  {
    title: "Ball Bearings",
    columns: [
      {
        heading: "Deep Groove | Radial Ball Bearings",
        items: [
          "16000 Series", "4200 Series", "4300 Series", "6000 Series", "6200 Series", "6300 Series", "6400 Series", 
          "62200 Series", "62300 Series", "63000 Series", "Imperial", "Max Capacity Bearings", "Stainless Steel"
        ],
      },
    ],
  },
  {
    title: "Roller Bearings",
    columns: [
      {
        heading: "Cylindrical Roller Bearings",
        items: [
           "N Series", "NF Series", "NJ Series", "NNF Series", "NU Series", "NUP Series"
        ],
      },
    ],
  },
  {
    title: "Housings and Inserts",
    columns: [
      {
        heading: "Bearings and Inserts",
        items: [
          "1000 Series", "1000 Series With Adapter Sleeve", "1100 Series", "1200 Series", "YAR Series", "YAT Series", 
          "YEL Series", "YET Series", "YSA Series", "UC Series", "SB Series", "UK Series - Tapered Bore"
        ],
      },
    ],
  },
  {
    title: "Linear",
    columns: [
      {
        heading: "Cam and Roller Follwers",
        items: [ "CF - Standard Type","CRH - Inch Series", 
          "CF RU1|FU1 - Centralized Lubrication Type","CF SFU - Easy Mounting Type","CF W - Thrust Disk Type",
          "CF WB SG- C-Lube Cam Follower", "CFE - Eccentric Type","CFES - Solid Eccentric Stud Type","CFKR - Double Hex Hole Type",
          "CFS - Miniature Series","CR - Inch Series","CRY - Non Separable"],
      },
    ],
  },
  {
    title: "Super Precision",
    columns: [
      {
        heading: "Super Precision Angular Contact",
        items: [ "2MM", "3MM", "7000 Series", "71800 Series", "7900 Series","71900 Series","7200 Series","7300 Series"],
      },
    ],
  },
  {
    title: "Spherical Plains",
    columns: [
      {
        heading: "Spherical Plain Bearings",
        items: [
          "GE Series","GEG Series","GEH Series","GEM Series","GEP Series","Imperial"
        ],
      },
    ],
  },
  {
    title: "Power Transmission",
    columns: [
      {
        heading: "ContiTech SilentSync Belts",
        items: [  "Blue","Green","Orange","Purple","Red","White","Yellow"],
      },
    ],
  },
  {
    title: "Maintenance Tools",
    columns: [
      {
        heading: "Basic Condition Monitoring Tools",
        items: [
          "Electrical Discharge Detector Pen", "Electronic Stethoscope", "Endoscope", "K-type Thermocouple Probe",
          "Microlog Analyzer","Sound Pressure Meter", "Stroboscope", "Tachometer","Thermometer", "Ultrasonic Leak Detector"
        ],
      },
    ],
  },
  {
    title: "Oil Seals",
    columns: [
      {
        heading: "Bearing Insert",
        items: [
          "1000 Series", "1000 Series With Adapter Sleeve", "1100 Series", "1200 Series", "YAR Series",
          "YAT Series", "YEL Series", "YET Series", "YSA Series", "UC Series","SB Series", "UK Series - Tapered Bore"
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

