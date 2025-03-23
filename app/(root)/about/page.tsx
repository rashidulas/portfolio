import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Wrapper between Navbar & Footer */}
      <div className="flex-grow relative w-full">
        {/* First Section - Shorter with Grid Background */}
        <section className="w-full min-h-[25vh] bg-black  px-6 md:px-10 py-16 z-10 relative">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Profile Picture */}
            <div className="w-full flex justify-center md:justify-start">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/ras/standing.JPG"
                  fill
                  alt="Md Rashidul Alam Sami"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Side - School Information */}
            <div className="flex flex-col justify-center space-y-4 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Md Rashidul Alam Sami
              </h1>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-lg text-blue-400">
                      Software Engineering Student
                    </p>
                    <p className="text-gray-300">
                      University of Texas at Arlington
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-lg text-blue-400">
                      Expected Graduation
                    </p>
                    <p className="text-gray-300">May 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-lg text-blue-400">
                      Achievements
                    </p>
                    <p className="text-gray-300">Dean's List 2023-2024</p>
                    <p className="text-gray-300">3.8 GPA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-lg text-blue-400">
                      Relevant Coursework
                    </p>
                    <p className="text-gray-300">
                      Data Structures, Algorithms, Web Development, Database
                      Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Background Image - Fullscreen between Sections */}
        <div
          className="w-full h-screen bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url('/random/laptop.webp')`, // Replace with your image path
          }}
        ></div>

        <section className="w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Sidebar (ABOUT ME) */}
              <div className="col-span-1 flex flex-col justify-start">
                <h2 className="text-lg font-semibold uppercase tracking-widest relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-white-400">
                  ABOUT ME
                </h2>
              </div>

              {/* Main Content */}
              <div className="col-span-2 flex flex-col gap-8">
                {/* Text Content First */}
                <div className="flex flex-col justify-center">
                  <p className="text-lg sm:text-xl">
                    Hi, I'm Md Rashidul Alam Sami — a passionate software
                    engineering student at UTA who loves turning ideas into
                    impactful digital solutions.
                  </p>

                  {/* Notable Clients & Awards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {/* Notable Clients */}
                    {/* <div>
                      <h3 className="text-sm font-semibold uppercase text-blue-400 mb-3">
                        NOTABLE CLIENTS
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="transition-colors hover:text-blue-400">
                          ADIDAS
                        </li>
                        <li className="transition-colors hover:text-blue-400">
                          NIKE
                        </li>
                        <li className="transition-colors hover:text-blue-400">
                          LUMINOUS
                        </li>
                        <li className="transition-colors hover:text-blue-400">
                          DREAMSCAPE
                        </li>
                      </ul>
                    </div> */}

                    {/* Awards */}
                    <div>
                      <h3 className="text-sm font-semibold uppercase text-blue-400 mb-3">
                        AWARDS
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="transition-colors hover:text-blue-400">
                          2025 Dean’s List
                        </li>
                        <li className="transition-colors hover:text-blue-400"></li>
                        <li className="transition-colors hover:text-blue-400"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mt-20 sm:mt-24">
              <h2 className="text-4xl sm:text-3xl font-bold mb-8 sm:mb-12">
                WORK EXPERIENCE
              </h2>

              <div className="space-y-12 sm:space-y-16">
                {/* Experience Item 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-start">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Information Technology Support Specialist
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-blue-400">
                      Office of Information Technology, UTA
                    </p>
                  </div>

                  <div className="lg:col-span-3 mt-3 lg:mt-0">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <p className="text-base sm:text-lg text-gray-300">
                        Arlington, TX
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-300 mt-1 sm:mt-0">
                        Oct. 2022 – Present
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-3 text-gray-300 text-base sm:text-lg">
                      <li>
                        Orchestrated campus-wide tech support services for
                        42,000+ users, managing hardware and software
                        installations, setups, and configurations, and migrating
                        39,000+ customer records to the Service-Now ticketing
                        system.
                      </li>
                      <li>
                        Implemented Adobe Intune, Microsoft Azure AD, and Jamf
                        Connect for device management across 500+ devices.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-start">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Undergraduate Research Assistant
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-blue-400">
                      Abacus Cloud and Edge Systems Lab (ACES)
                    </p>
                  </div>

                  <div className="lg:col-span-3 mt-3 lg:mt-0">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <p className="text-base sm:text-lg text-gray-300">
                        Arlington, TX
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-300 mt-1 sm:mt-0">
                        May 2023 – Sept. 2023
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-3 text-gray-300 text-base sm:text-lg">
                      <li>
                        Directed network architecture and design projects
                        utilizing Kubernetes for resource management, achieving
                        a 35% increase in network speed and architecting a data
                        simulation system with Raspberry Pis and K3s.
                      </li>
                      <li>
                        Created a web page illustrating weather data for 50+
                        counties through a map design sourced from a JSON file.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Experience Item 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 items-start">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      ACM Create Officer
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-blue-400">
                      Association for Computing Machinery
                    </p>
                  </div>

                  <div className="lg:col-span-3 mt-3 lg:mt-0">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <p className="text-base sm:text-lg text-gray-300">
                        Arlington, TX
                      </p>
                      <p className="text-base sm:text-lg font-medium text-gray-300 mt-1 sm:mt-0">
                        Aug. 2024 – Present
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-3 text-gray-300 text-base sm:text-lg">
                      <li>
                        Collaborated with students at UTA to organize ACM-UTA
                        projects and events, fostering skill development and
                        teamwork through hands-on project creation and
                        initiatives focused on enhancing UTA's technological
                        landscape.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
