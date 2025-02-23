"use client"; // Required for Next.js App Router

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-100 text-black mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Social Media</h2>
          <p>Find me on social media</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a
              href="https://github.com/rashidulas"
              className="text-black hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://x.com/Rashidul12558"
              className="text-black hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.instagram.com/rashidul___/"
              className="text-black hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rashidulas/"
              className="text-black hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Md Rashidul Alam Sami.</p>
          <Link
            href="/legal-disclaimer"
            className="text-blue-500 hover:underline"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
