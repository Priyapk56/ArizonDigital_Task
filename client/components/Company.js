import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Company() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-lg font-bold mb-4">Quality Bearings Online Ltd</h2>
          <p>Canada - 438 800 2658</p>
          <p className="mt-2 underline cursor-pointer">Contact Us</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">NAVIGATE</h2>
          <ul className="space-y-1">
            {[
              'Home', 'About Us', 'Contact Us', 'Customer Service',
              'Delivery Information', 'FAQs', 'Privacy Policy',
              'Customer Reviews', 'Terms & Conditions', 'Blog'
            ].map(link => (
              <li key={link} className="cursor-pointer hover:text-gray-300">{link}</li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col gap-6">
  <div className="flex justify-center">
    <img
      src="/icons/footer-logo.webp"
      alt="Logo 1"
      className="h-24 w-[800px] object-contain"
    />
  </div>

  <div className="flex justify-center">
    <img
      src="/icons/sc21.webp"
      alt="Logo 2"
      className="h-22 object-contain"
    />
  </div>

  <div className="flex justify-center gap-8 flex-wrap">
    <img
      src="/icons/Queens_Award_White.webp"
      alt="Logo 3"
      className="h-24 object-contain "
    />
    <img
      src="/icons/Investers_In_People_23_24-01.jpg"
      alt="Logo 4"
      className="h-24 object-contain"
    />
  </div>

    <p className="text-sm text-center mt-2">Follow Us on Social Media</p>

  <div className="flex space-x-4 text-2xl mt-2 justify-center">
    <FaFacebookF className="cursor-pointer hover:text-gray-400" />
    <FaInstagram className="cursor-pointer hover:text-gray-400" />
    <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
  </div>
       </div>
</div>
    <hr className="border-gray-600 my-6" />

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
  <div>© 2025 Quality Bearings Online – All rights reserved.</div>

  <div className="flex items-center gap-4">
    <img src="/icons/american-express.svg" alt="American Express" className="h-6 object-contain" />
    <img src="/icons/mastercard.svg" alt="MasterCard" className="h-6 object-contain" />
    <img src="/icons/paypal-3.svg" alt="PayPal" className="h-6 object-contain" />
    <img src="/icons/visa-10.svg" alt="Visa" className="h-6 object-contain" />
    <img src="/icons/google-pay-2.svg" alt="Google Pay" className="h-6 object-contain" />
  </div>
</div>


      

    </footer>
  );
}
