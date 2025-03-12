"use client";
import Image from "next/image";
import { useState } from "react";

interface ExperienceCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[200px] md:h-[250px] overflow-hidden shadow-md transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Effect - Expanding from Middle (Two Halves) */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top Half Expanding Up */}
        <div
          className={`bg-black w-full transition-all duration-500 ${
            isHovered ? "h-1/2" : "h-0"
          }`}
        ></div>
        {/* Bottom Half Expanding Down */}
        <div
          className={`bg-black w-full transition-all duration-500 ${
            isHovered ? "h-1/2" : "h-0"
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-between p-6 w-full h-full transition-all duration-300">
        {/* Left Section: Image & Text */}
        <div className="flex items-center gap-6">
          {/* Image with Hover Effect */}
          <div
            className={`w-20 h-20 md:w-24 md:h-24 transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          >
            <Image
              src={image}
              alt={title}
              width={96}
              height={96}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Job Title & Description */}
          <div>
            <h2
              className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                isHovered ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-gray-500 text-sm md:text-base transition-all duration-300 ${
                isHovered ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Right Section: Date */}
        <p
          className={`text-lg md:text-xl font-semibold transition-all duration-300 ${
            isHovered ? "text-white" : "text-black"
          }`}
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
