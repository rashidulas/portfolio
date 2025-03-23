"use client";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Grid Section */}
      <div className="grid grid-cols-5 gap-0 w-full h-[20vh] border-gray-400">
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200 flex items-center justify-center px-2 text-center">
          Software engineering Honors student at The University of Texas at
          Arlington (UTA)
        </div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200"></div>
        <div></div>
      </div>

      {/* Centered Box with Border */}
      <div className="w-[80%] h-[35vh] border border-gray-200 relative flex items-center justify-center p-4">
        {/* Image aligned to top-left */}
        <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
          <img
            src="/ras/linkedin2.png"
            alt="Md RASHIDUL ALAM SAMI"
            className="w-70 h-70 object-cover"
          />
        </div>
        {/* Name aligned to bottom-right */}
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            MD RASHIDUL ALAM SAMI
          </h1>
        </div>
      </div>

      {/* Bottom Grid Section
      <div className="grid grid-cols-5 gap-0 w-full h-[20vh] border-gray-200">
        <div className="border-r border-gray-200 border-t-0"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200 border-t-0"></div>
        <div></div>
      </div> */}
      {/* Additional Bottom Grid of half height */}
      <div className="grid grid-cols-5 gap-0 w-full border h-[10vh] border-gray-200">
        <div className="border-r border-gray-200 border-t-0"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200 border-t-0"></div>
      </div>
    </div>
  );
}
