"use client"; // Required for Next.js 15 Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user's theme preference
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 sm:px-12 flex justify-between items-center transition-all 
      ${
        isDarkMode
          ? "bg-black/80 text-white shadow-md"
          : "bg-gray-100 text-black shadow-lg"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/site-logo.svg"
          width={25}
          height={25}
          alt="Rashidul AS Logo"
        />
        <p className="text-xl font-bold">
          Rashidul<span className="text-gray-500">AS</span>
        </p>
      </Link>

      {/* Navigation Links */}
      <div className="hidden sm:flex space-x-6 text-lg font-medium">
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition">
          About Me
        </Link>
        <Link href="/portfolio" className="hover:text-gray-400 transition">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
        <Link href="/resume" className="hover:text-gray-400 transition">
          Resume
        </Link>
      </div>

      {/* Social Icons & Theme Toggle */}
      <div className="flex items-center space-x-5">
        {/* Social Links */}
        <a
          href="https://github.com/rashidulas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/rashidulas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Theme Toggle Button */}
        <Theme />

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
