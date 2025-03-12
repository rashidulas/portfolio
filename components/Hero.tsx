"use client";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Top Grid Section */}
      <div className="grid grid-cols-5 gap-0 w-full h-[20vh] border-gray-400">
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400">sdasda</div>
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400"></div>
        <div></div>
      </div>

      {/* Centered Box with Border */}
      <div className="w-[80%] h-[35vh] border border-gray-400 flex items-center justify-center ">
        <span className="text-gray-600">Large Centered Box</span>
      </div>

      {/* Bottom Grid Section */}
      <div className="grid grid-cols-5 gap-0 w-full h-[20vh] border-gray-400">
        <div className="border-r border-gray-400 border-t-0"></div>
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400 border-t-0"></div>
        <div></div>
      </div>
      {/* Additional Bottom Grid of half height */}
      <div className="grid grid-cols-5 gap-0 w-full border h-[10vh] border-gray-400">
        <div className="border-r border-gray-400 border-t-0"></div>
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400"></div>
        <div className="border-r border-gray-400 border-t-0"></div>
      </div>
    </div>
  );
}
