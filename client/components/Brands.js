"use client";

import Image from "next/image";

const productImages = [
  { src: "/icons/1b.webp", alt: "Brand 1", link: "#" },
  { src: "/icons/2b.webp", alt: "Brand 2", link: "#" },
  { src: "/icons/3b.webp", alt: "Brand 3", link: "#" },
  { src: "/icons/4b.webp", alt: "Brand 4", link: "#" },
  { src: "/icons/5b.webp", alt: "Brand 5", link: "#" },
  { src: "/icons/6b.webp", alt: "Brand 6", link: "#" },
  { src: "/icons/7b.webp", alt: "Brand 7", link: "#" },
  { src: "/icons/8b.webp", alt: "Brand 8", link: "#" },
  { src: "/icons/9b.webp", alt: "Brand 9", link: "#" },
  { src: "/icons/10b.webp", alt: "Brand 10", link: "#" },
  { src: "/icons/11b.webp", alt: "Brand 11", link: "#" },
];

export default function Brands() {
  return (
    <section className="py-20 px-8 bg-gray-100 text-blue-1000">
      <h2 className="text-xl md:text-2xl font-oswald font-bold text-center mb-12">
        Distributing World Renowned Brands
      </h2>

      <div className="grid grid-cols-11 gap-6 justify-items-center">
        {productImages.map(({ src, alt, link }, index) => (
          <a
            key={index}
            href={link}
            className="relative w-12 h-12 md:w-15 md:h-15 transform transition-transform duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </a>
        ))}
      </div>
    </section>
  );
}
