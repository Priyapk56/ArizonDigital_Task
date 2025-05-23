import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <main className={`text-gray-800 font-sans`}>
      
<div className="bg-black text-white text-sm py-2.5 px-4 flex justify-end items-center font-oswald sticky top-0 z-[60]">
  <div className="flex items-center space-x-4 font-normal">
    <a href="#" className="hover:underline">About Us</a>
    <div className="flex items-center space-x-1">
      <span>Select Currency:</span>
      <select
        className="bg-black text-white border-none focus:outline-none cursor-pointer"
        defaultValue="CAD"
      >
        <option value="CAD">CAD</option>
        <option value="USD">USD</option>
      </select>
    </div>
    <a href="#" className="hover:underline">Contact Us</a>
    <a href="#" className="hover:underline">CAN: 438 800 2658</a>
  </div>
</div>

<div className="flex items-center py-6 px-6 bg-white shadow-md sticky top-[40px] z-40">
  <div className="flex-shrink-0">
    <Image src='/icons/image.webp' alt="Logo" width={400} height={80} />
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

    </main>
  );
}
