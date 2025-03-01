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
      className="w-full flex items-center border-b border-solid bg-gray-100 h-16"
      style={{ borderColor: "rgb(226, 226, 227)" }}
    >
      {/* Logo Section */}
      <div
        className="h-full flex items-center  border-solid px-6"
        style={{ borderColor: "rgb(226, 226, 227)", width: "16.666%" }}
      >
        <Link href="/" className="font-bold text-xl uppercase">
          <span className="font-roboto text-[20px] font-bold tracking-tight text-gray-900">
            RASHIDUL AS.
          </span>
        </Link>
      </div>

      {/* Navigation Links with Smooth Hover Effect */}
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`h-full flex items-center justify-center border-solid relative group transition-all duration-300 ease-in-out`}
          style={{ borderColor: "rgb(226, 226, 227)", width: "16.666%" }}
        >
          <Link
            href={item.path}
            className="relative h-full w-full flex items-center justify-center"
          >
            {/* Default Text */}
            <span
              className={`absolute transition-all duration-300 ease-in-out ${
                pathname === item.path
                  ? "text-black font-semibold"
                  : "text-gray-500 background-grey-100"
              } group-hover:translate-y-[-100%] group-hover:opacity-0`}
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              {item.name}
            </span>

            {/* Hover Text Effect */}
            <span
              className="absolute text-black font-semibold transition-all duration-300 ease-in-out translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              style={{ fontSize: "16px", fontWeight: 500 }}
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
