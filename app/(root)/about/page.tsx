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
        <section className="w-full min-h-screen bg-black grid-background text-white px-6 md:px-16 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar (ABOUT ME) */}
            <div className="col-span-1 flex flex-col justify-start">
              <h2 className="text-lg font-semibold uppercase tracking-widest">
                ABOUT ME
              </h2>
            </div>

            {/* Main Content */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image */}
              <div className="w-full">
                {/* <Image
                  src="/your-image.jpg" // Replace with actual image
                  width={300}
                  height={300}
                  alt="Brandon Paul"
                  className="rounded-lg object-cover w-full"
                /> */}
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <p className="text-lg">
                  I'M BRANDON PAUL, A PHOTOGRAPHER BASED IN CANADA. FOR ME,
                  PHOTOGRAPHY IS MORE THAN JUST CAPTURING IMAGES, IT'S ABOUT
                  PRESERVING FLEETING MOMENTS AND TELLING STORIES THROUGH MY
                  LENS.
                </p>

                {/* Notable Clients & Awards */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                  {/* Notable Clients */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase">
                      NOTABLE CLIENTS
                    </h3>
                    <ul className="mt-2 text-gray-300">
                      <li>ADIDAS</li>
                      <li>NIKE</li>
                      <li>LUMINOUS</li>
                      <li>DREAMSCAPE</li>
                    </ul>
                  </div>

                  {/* Awards */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase">AWARDS</h3>
                    <ul className="mt-2 text-gray-300">
                      <li>Magnum Photos Awards</li>
                      <li>Annie Leibovitz MasterClass 3rd rank</li>
                      <li>Pulitzer Prize 1st rank</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facts Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Sidebar (FACTS) */}
            <div className="col-span-1 flex flex-col justify-start">
              <h2 className="text-lg font-semibold uppercase tracking-widest">
                FACTS
              </h2>
            </div>

            {/* Facts Data */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fact 1 */}
              <div className="border border-gray-700 p-6">
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm">(Years of Experience)</p>
                <p className="mt-2 text-gray-300">
                  It’s my passion and my art form. Each image I capture is a
                  story waiting to be told, a moment frozen in time.
                </p>
              </div>

              {/* Fact 2 */}
              <div className="border border-gray-700 p-6">
                <h3 className="text-4xl font-bold">20+</h3>
                <p className="text-gray-400 text-sm">(Awards)</p>
                <p className="mt-2 text-gray-300">
                  It’s my passion and my art form. Each image I capture is a
                  story waiting to be told, a moment frozen in time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
