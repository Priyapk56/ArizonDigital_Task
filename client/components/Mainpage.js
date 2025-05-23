"use client";

import React from "react";
import Image from "next/image";

export default function Mainpage() {
  return (
    <div className="bg-white w-full px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Industry Leading Bearings Supplier
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-18 text-left text-lg">
          <div className="flex flex-col items-start text-gray-700">
            <Image
              src="/icons/fast.webp" 
              alt="Fast Delivery"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">
              Super-Fast, Hassle Free Delivery
            </h3>
            <p className="font-sans text-sm">
Delivered within 1-3 days, with all tax & duties paid within Canada. The price you see online is the price you pay.            </p>
          </div>

          <div className="flex flex-col items-start text-gray-700">
            <Image
              src="/icons/rating.webp" 
              alt="Customer Service"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">
              Unrivalled Customer Service
            </h3>
            <p className="text-sm">
              With over 75 years industry experience, you can trust Quality Bearings Online.
            </p>
          </div>

          <div className="flex flex-col items-start text-gray-700">
            <Image
              src="/icons/Awardss.webp" 
              alt="Award Winning"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">
              Multi-Award-Winning
            </h3>
            <p className="text-sm">
              Winners of the Queen&apos;s Award for Enterprise for International Trade, 2023. Lloyds Bank Employer of the Year.
            </p>
          </div>

          <div className="flex flex-col items-start text-gray-700">
            <Image
              src="/icons/Trusted_Brands.webp" 
              alt="Renowned Brands"
              width={200}
              height={200}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">
              World Renowned Brands
            </h3>
            <p className="text-sm">
              Quality branded products from the world&apos;s leading brands such as Kluber, Timken, FAG, and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
