"use client";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Grid Section (Shown on md and up) */}
      <div className="hidden md:grid grid-cols-5 gap-0 w-full h-[20vh] border-gray-400">
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
      <div className="w-full md:w-[80%] border border-gray-200 relative flex flex-col md:flex-row items-center justify-center p-4 overflow-hidden">
        {/* Responsive Image Container */}
        <div className="w-full md:w-1/3 flex items-center justify-center p-4">
          <img
            src="/ras/2.jpg"
            alt="Md RASHIDUL ALAM SAMI"
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            MD RASHIDUL ALAM SAMI
          </h1>
          {/* Mobile-only: show the description in the center box */}
          <p className="block md:hidden text-center text-gray-600">
            Software engineering Honors student at The University of Texas at
            Arlington (UTA)
          </p>
        </div>
      </div>

      {/* Bottom Grid Section (Shown on md and up) */}
      <div className="hidden md:grid grid-cols-5 gap-0 w-full border h-[10vh] border-gray-200">
        <div className="border-r border-gray-200 border-t-0"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200"></div>
        <div className="border-r border-gray-200 border-t-0"></div>
      </div>
    </div>
  );
}
