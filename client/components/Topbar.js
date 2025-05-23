"use client";

import React from "react";
import Image from "next/image";

export default function Topbar() {
  return (
    <div>
      <div className="h-[5px] bg-yellow-600 w-full" />

      <div className="bg-gray-100 w-full px-2 py-3 shadow-md flex flex-col items-center font-roboto-slab">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/Customer-Service.webp"
              alt="Free Delivery"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-sm font-medium leading-tight">
              Free Delivery <br/>Over $300.00
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/UK-Delivery.webp"
              alt="1-3 Day Delivery"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-sm font-medium leading-tight">
              1-3 Day DHL & UPS <br/> Delivery
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/Queens_Award_Logo_black.webp"
              alt="Queen’s Award"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-sm font-medium leading-tight">
              Queen’s Award For <br/>Enterprise Winners
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/icons/qms.webp"
              alt="ISO Certified"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-sm font-medium leading-tight">
              ISO 9001 : 2015<br/> Cert. No.291342018
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Image
            src="/icons/logo.png" 
            alt="Chat Box"
            width={170}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
