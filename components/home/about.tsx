import React from "react";

const PhotographyHero = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
        {/* Left side with image and text */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-3/4">
            <img
              src="/ras/ny3.png"
              alt="Person cycling on a road with lake and mountains"
              className="w-full h-auto rounded"
            />
          </div>
          <p className="text-sm text-gray-400 mt-8 text-center md:text-left">
            I love spending time to create masterpieces that are timeless.
          </p>
        </div>

        {/* Right side with text content */}
        <div className="flex flex-col justify-between h-full">
          <div className="mt-8 md:mt-16 text-center md:text-left">
            <p className="text-lg mb-8">
              It's my passion and my art form. Each image I capture is a story
              waiting to be told, a moment frozen in time, and an emotion
              expressed through light and shadow.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="border border-white px-6 py-3 inline-flex items-center transition-colors hover:bg-white hover:text-black">
                <span className="mr-2">ABOUT ME</span>
                <span>↗</span>
              </button>
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">
                We can make it together
              </p>
              <a
                href="#contact"
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
