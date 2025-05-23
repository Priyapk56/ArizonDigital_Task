import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image'

export default function Company() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 py-10 shadow-inner border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        <div>
          <h2 className="text-lg font-bold mb-4">Quality Bearings Online Ltd</h2>
          <p>Canada - 438 800 2658</p>
          <p className="mt-2 cursor-pointer">Contact Us</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">NAVIGATE</h2>
          <ul className="space-y-1">
            {[
              "Home",
              "About Us",
              "Contact Us",
              "Customer Service",
              "Delivery Information",
              "FAQs",
              "Privacy Policy",
              "Customer Reviews",
              "Terms & Conditions",
              "Blog",
            ].map((link) => (
              <li key={link} className="cursor-pointer hover:text-gray-300">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            src="/icons/footer-logo.webp"
            alt="Logo 1"
            width={250}
            height={80}
            className="w-[140px] sm:w-[250px] object-contain"
          />

          <Image
            src="/icons/sc21.webp"
            alt="Logo 2"
            width={220}
            height={80}
            className="w-[140px] sm:w-[220px] object-contain"
          />

          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
            <Image
              src="/icons/Queens_Award_White.webp"
              alt="Logo 3"
              width={100}
              height={96}
              className="h-20 sm:h-24 object-contain"
            />
            <Image
              src="/icons/Investers_In_People_23_24-01.jpg"
              alt="Logo 4"
              width={200}
              height={96}
              className="h-20 sm:h-24 object-contain"
            />
          </div>

          <p className="text-sm text-center sm:text-left mt-2">
            Follow Us on Social Media
          </p>
          <div className="flex space-x-4 text-2xl mt-2 justify-center sm:justify-start">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-6" />

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
        <div>© 2025 Quality Bearings Online – All rights reserved.</div>

        <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
          <Image
            src="/icons/american-express.svg"
            alt="American Express"
            width={40}
            height={24}
            className="h-6 object-contain"
          />
          <Image
            src="/icons/mastercard.svg"
            alt="MasterCard"
            width={40}
            height={24}
            className="h-6 object-contain"
          />
          <Image
            src="/icons/paypal-3.svg"
            alt="PayPal"
            width={40}
            height={24}
            className="h-6 object-contain"
          />
          <Image
            src="/icons/visa-10.svg"
            alt="Visa"
            width={40}
            height={24}
            className="h-6 object-contain"
          />
          <Image
            src="/icons/google-pay-2.svg"
            alt="Google Pay"
            width={40}
            height={24}
            className="h-6 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
