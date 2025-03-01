import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 px-6 overflow-hidden">
      {/* Background Box Shapes */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        {/* Left Box */}
        <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 bg-gray-800 rounded-lg shadow-2xl opacity-30"></div>

        {/* Center Box */}
        <div className="absolute top-20 w-48 h-48 md:w-72 md:h-72 bg-gray-900 rounded-lg shadow-2xl opacity-40"></div>

        {/* Right Box */}
        <div className="absolute top-10 right-10 w-40 h-40 md:w-60 md:h-60 bg-gray-700 rounded-lg shadow-2xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-bold drop-shadow-lg">
            +1 234 456-56-56
          </h2>
          <p className="text-2xl font-semibold drop-shadow-lg">
            INFO@CLERK.COM
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-medium drop-shadow-lg">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            PORTFOLIO
          </a>
          <a href="#" className="hover:underline">
            CONTACT
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400 transition">
            <Instagram size={28} />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <Linkedin size={28} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>2024: WIZE TEMPLATES. ALL RIGHTS RESERVED.</p>
          <p>ADDRESS: LEVEL 1, 12 SAMPLE ST, SYDNEY NSW 2000</p>
        </div>
      </div>
    </footer>
  );
}
