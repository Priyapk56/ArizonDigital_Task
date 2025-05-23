
"use client";

import React from "react";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full">
      <div className="h-[5px] bg-yellow-600 w-full" />

      <div className="hidden sm:block bg-gray-100 w-full px-4 py-3 shadow-md font-roboto-slab">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl justify-items-center">
            {[
              {
                src: "/icons/Customer-Service.webp",
                alt: "Free Delivery",
                text: ["Free Delivery", "Over $300.00"],
              },
              {
                src: "/icons/UK-Delivery.webp",
                alt: "1-3 Day Delivery",
                text: ["1-3 Day DHL & UPS", "Delivery"],
              },
              {
                src: "/icons/Queens_Award_Logo_black.webp",
                alt: "Queen’s Award",
                text: ["Queen’s Award For", "Enterprise Winners"],
              },
              {
                src: "/icons/qms.webp",
                alt: "ISO Certified",
                text: ["ISO 9001 : 2015", "Cert. No.291342018"],
              },
            ].map(({ src, alt, text }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-center"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="text-sm font-medium leading-tight">
                  {text[0]} <br /> {text[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={170}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
