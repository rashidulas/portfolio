"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation Links
  const navLinks = [
    { id: "/", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "portfolio", title: "Portfolio" },
    { id: "contact", title: "Contact" },
    { id: "resume", title: "Resume", external: true, url: "/RESUME.pdf" },
  ];

  // Scroll Effect for Background Change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setActive("")}
        >
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <p className="text-white text-lg font-bold">Rashidul AS</p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-white text-lg hover:text-gray-400 cursor-pointer"
            >
              {nav.external ? (
                <a href={nav.url} target="_blank" rel="noopener noreferrer">
                  {nav.title}
                </a>
              ) : (
                <Link href={`/${nav.id}`} scroll={true}>
                  {nav.title}
                </Link>
              )}
            </li>
          ))}
          {/* Social Icons */}
          <li className="flex items-center space-x-4">
            <a
              href="https://github.com/rashidulas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} className="text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/rashidulas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={22}
                className="text-white hover:text-gray-400"
              />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setToggle(!toggle)} className="sm:hidden">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="Menu"
            width={30}
            height={30}
          />
        </button>

        {/* Mobile Dropdown Menu */}
        {toggle && (
          <div className="absolute top-16 right-6 bg-black bg-opacity-90 rounded-lg p-6 w-56">
            <ul className="flex flex-col space-y-4 text-white">
              {navLinks.map((nav) => (
                <li key={nav.id} onClick={() => setToggle(false)}>
                  {nav.external ? (
                    <a href={nav.url} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <Link href={`/#${nav.id}`} scroll={true}>
                      {nav.title}
                    </Link>
                  )}
                </li>
              ))}
              <li className="flex items-center space-x-4">
                <a
                  href="https://github.com/rashidulas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={22}
                    className="text-white hover:text-gray-400"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/rashidulas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={22}
                    className="text-white hover:text-gray-400"
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
