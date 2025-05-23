"use client";

import Image from "next/image";

const categories = [
  { title: "Precision Bearings", image: "/icons/1.webp" },
  { title: "Deep Groove Bearings", image: "/icons/2.webp" },
  { title: "Taper Roller Bearings", image: "/icons/3.webp" },
  { title: "Spherical Roller Bearings", image: "/icons/4.webp" },
  { title: "Maintenance Tools", image: "/icons/5.webp" },
  { title: "Adhesives", image: "/icons/6.webp" },
  { title: "Oil Seals", image: "/icons/7.webp" },
  { title: "Linear Motion", image: "/icons/8.webp" },
  { title: "Housings", image: "/icons/9.webp" },
  { title: "Super Precision", image: "/icons/10.webp" },
];

export default function TopCategories() {
  return (
    
    <section className="py-10 px-4 md:px-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-oswald font-bold text-center mb-6">
        Top Categories
      </h2>
      <p className="font-sans text-center text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
        Whatever bearing, adhesive, lubricant or grease you are after at Quality Bearings Online we are bound to stock it. As a leading bearings supplier we offer products from trusted industry manufacturers. Discover some of our top product categories below.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center ">
        {categories.map((category, index) => (
          <div key={index} className="text-center text-lg space-y-2">
            <div className="w-full h-30  relative">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-oswald text-base md:text-lg font-bold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
    

  );
}
