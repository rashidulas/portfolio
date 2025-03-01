"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname(); // Get current route
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure hydration consistency
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORKS", path: "/work" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      className="w-full flex items-center border-b border-solid"
      style={{
        borderColor: "rgb(226, 226, 227)",
        backgroundColor: "rgb(245, 245, 245)",
        height: "64px",
      }}
    >
      {/* Logo Section */}
      <div
        className="h-full flex items-center border-r border-solid"
        style={{ borderColor: "rgb(226, 226, 227)", width: "16.666%" }}
      >
        <div className="px-6">
          <Link href="/" className="font-bold text-xl uppercase">
            <span
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "rgb(20, 20, 21)",
              }}
            >
              RASHIDUL AS.
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Links with Slow Hover Effect */}
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`h-full flex items-center justify-center border-r border-solid relative overflow-hidden group transition-all duration-700 ${
            pathname === item.path ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
          style={{ borderColor: "rgb(226, 226, 227)", width: "16.666%" }}
        >
          <Link
            href={item.path}
            className="relative h-full w-full flex items-center justify-center"
          >
            {/* Default Grey Text (slides up and disappears on hover) */}
            <span
              className={`absolute transition-all duration-700 ${
                pathname === item.path
                  ? "text-black font-semibold"
                  : "text-gray-500"
              } group-hover:-translate-y-full group-hover:opacity-0`}
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                transition:
                  "transform 0.7s ease-in-out, opacity 0.7s ease-in-out",
              }}
            >
              {item.name}
            </span>

            {/* Black Text Appears on Hover (Slides up) */}
            <span
              className="absolute text-black font-semibold transition-all duration-700 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                transition:
                  "transform 0.7s ease-in-out, opacity 0.7s ease-in-out",
              }}
            >
              {item.name}
            </span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
