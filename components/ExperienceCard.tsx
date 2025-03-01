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
      className={`flex items-center justify-between p-4 transition-all duration-300 ${
        isHovered ? "bg-black text-white" : "bg-white text-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 transition-all duration-300 ${
            isHovered ? "scale-125" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">{description}</p>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
      <p className="text-xl font-bold">{price}</p>
    </div>
  );
};

export default ExperienceCard;
