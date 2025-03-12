import { FaArrowDown } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Wrapper between Navbar & Footer */}
      <div className="flex-grow relative w-full">
        {/* First Section - Shorter with Grid Background */}
        <section className="w-full min-h-[25vh] bg-black grid-background-white flex flex-col justify-center items-center px-10 text-center z-10 relative">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
            YOU HAVE A VISION? LET'S BRING IT TO LIFE. FILL THE FORM AND LET'S
            START
          </h1>

          {/* Scroll Down Prompt */}
          <div className="mt-6 flex items-center gap-2 text-white text-lg italic">
            <FaArrowDown className="animate-bounce text-xl" />
            <span>
              Scroll down to{" "}
              <span className="not-italic font-semibold">fill</span>
            </span>
          </div>
        </section>

        {/* Background Image - Fullscreen between Sections */}
        <div
          className="w-full h-screen bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('/projects/fleetpulse.png')`, // Replace with your image path
          }}
        ></div>

        {/* Second Section - Contact Form with Grid Background */}
        <section className="w-full min-h-[75vh] bg-white grid-background flex flex-col justify-center items-center px-6 md:px-10 text-center z-10 relative">
          <div className="bg-white p-8 md:p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <h2 className="text-black text-4xl md:text-5xl font-bold text-left">
              FILL OUT THE FORM AND I WILL ANSWER IN 24 HOURS
            </h2>

            {/* Contact Form */}
            <form className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col text-left">
                  <label className="text-gray-700 font-semibold mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col text-left">
                  <label className="text-gray-700 font-semibold mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="brandon@paul.com"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col text-left mt-6">
                <label className="text-gray-700 font-semibold mb-2">
                  MESSAGES
                </label>
                <textarea
                  placeholder="Write your request here"
                  className="border border-gray-300 px-4 py-2 h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-md cursor-pointer hover:bg-gray-400 transition-all flex items-center gap-2"
              >
                SUBMIT <FaArrowDown className="text-sm" />
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
