import React from "react";

const PhotographyHero = () => {
  return (
    <div className="bg-black text-white min-h-[500px] flex items-center justify-center py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
        {/* Left side with image and text */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-3/4">
            <img
              src="/ras/ny3.png"
              alt="Person cycling on a road with lake and mountains"
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center md:text-left">
            I love spending time crafting digital solutions that are both
            impactful and timeless.
          </p>
        </div>

        {/* Right side with text content */}
        <div className="flex flex-col justify-between h-full">
          <div className="mt-4 md:mt-8 text-center md:text-left">
            <p className="text-base mb-4">
              Building software is more than just code for me—it's my passion
              and my creative expression. Every project I take on is a chance to
              solve real problems, craft meaningful experiences, and bring ideas
              to life through logic, design, and innovation. It’s where
              technology meets purpose, and where I get to turn imagination into
              impact.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/about"
                className="border border-white px-5 py-2 inline-flex items-center transition-colors hover:bg-white hover:text-black"
              >
                <span className="mr-2">ABOUT ME</span>
                <span>↗</span>
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-1">
                We can make it together
              </p>
              <a
                href="/contact"
                className="uppercase border-b border-white pb-1 inline-block"
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyHero;
