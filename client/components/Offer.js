"use client";

import Image from "next/image";

const items = [
  {
    src: "/icons/1service.webp",
    alt: "Image 1",
    title: "International Presence",
    description: "We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.",
  },
  {
    src: "/icons/2service.png",
    alt: "Image 2",
    title: "Professional Team",
    description: "Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.",
  },
  {
    src: "/icons/3service.png",
    alt: "Image 3",
    title: "Warehouse & Logistics",
    description: "We're an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.",
  },
  {
    src: "/icons/4service.webp",
    alt: "Image 4",
    title: "Customer Service",
    description: "With more than 75 years' industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.",
  },
];

export default function ImageWithDescription() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-oswald font-bold text-center mb-12 text-black">
Other Services We Offer      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {items.map(({ src, alt, description }, index) => (
          <div key={index} className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-base text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
