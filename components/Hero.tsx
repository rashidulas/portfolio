const Hero = () => {
  return (
    <div className="w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left side with text */}
        <div className="p-6 md:col-span-1 border-r border-gray-200">
          <p className="text-sm">
            It's my passion and my art form. Each image I capture is a story
            waiting to be told, a moment frozen in time, and an emotion
            expressed through light and shadow.
          </p>
        </div>

        {/* Empty grid cells */}
        <div className="hidden md:block border-r border-gray-200"></div>
        <div className="hidden md:block border-r border-gray-200"></div>
        <div className="hidden md:block border-r border-gray-200"></div>
        <div className="hidden md:block"></div>
      </div>

      {/* Booking section */}
      <div className="my-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-4xl font-bold border-b-2 border-black inline-block pb-1">
            BOOK ME
          </h2>

          <div className="flex mt-6 md:mt-0">
            {/* Image collage */}
            <div className="flex space-x-2">
              <img
                src="/image1.jpg"
                alt="Interior shot"
                className="h-32 w-24 object-cover"
              />
              <img
                src="/image2.jpg"
                alt="Leather bag"
                className="h-32 w-24 object-cover"
              />
              <img
                src="/image3.jpg"
                alt="Picnic by water"
                className="h-32 w-24 object-cover"
              />
              <img
                src="/image4.jpg"
                alt="Landscape"
                className="h-32 w-24 object-cover"
              />
            </div>

            {/* Star icon */}
            <div className="ml-8">
              <svg
                viewBox="0 0 24 24"
                className="w-16 h-16"
                stroke="currentColor"
                fill="none"
              >
                <path
                  d="M12 1L15 9L23 9L17 14L19 22L12 17L5 22L7 14L1 9L9 9L12 1Z"
                  strokeWidth="0.5"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto">
          <p className="text-lg font-medium">
            © BRANDON PAUL © BRANDON PAUL © BRANDON PAUL © BRANDON
          </p>
        </div>
      </div>
    </div>
  );
};
