"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure hydration consistency
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Determine if navbar should be dark
  const isDarkTheme = pathname === "/about" || pathname === "/contact";

  return (
    <nav
      className={`relative w-full flex items-center border-b h-16 transition-all duration-300 ${
        isDarkTheme ? "bg-black border-gray-800" : "bg-gray-100 border-gray-300"
      }`}
    >
      {/* Logo Section */}
      <div
        className="h-full flex items-center px-6 whitespace-nowrap"
        style={{ width: "16.666%" }}
      >
        <Link href="/">
          <span
            className={`font-roboto text-[20px] font-bold tracking-tight transition-colors duration-300 uppercase ${
              isDarkTheme ? "text-white" : "text-gray-900"
            }`}
          >
            RASHIDUL AS.
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-grow items-center justify-center">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="h-full flex items-center justify-center relative group transition-all duration-300 ease-in-out"
            style={{ width: "16.666%" }}
          >
            <Link href={item.path} legacyBehavior>
              <a className="relative h-full w-full flex items-center justify-center">
                {/* Default Text */}
                <span
                  className={`absolute transition-all duration-300 ease-in-out ${
                    pathname === item.path ? "font-semibold" : "text-gray-500"
                  } ${
                    isDarkTheme ? "text-white" : "text-black"
                  } group-hover:translate-y-[-100%] group-hover:opacity-0`}
                  style={{ fontSize: "16px", fontWeight: 500 }}
                >
                  {item.name}
                </span>

                {/* Hover Text Effect */}
                <span
                  className="absolute font-semibold transition-all duration-300 ease-in-out translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: isDarkTheme ? "white" : "black",
                  }}
                >
                  {item.name}
                </span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Menu Icon */}
      <div
        className="md:hidden flex items-center justify-end px-6 ml-auto"
        style={{ width: "16.666%" }}
      >
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isDarkTheme ? "white" : "black"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isDarkTheme ? "white" : "black"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-16 right-0 z-10 md:hidden border-t transition-all duration-300 ${
            isDarkTheme
              ? "bg-black border-gray-800"
              : "bg-gray-100 border-gray-300"
          } w-auto`}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} legacyBehavior>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-6 py-3 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
