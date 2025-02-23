import { TracingBeam } from "@/components/ui/tracing-beam";
import React from "react";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      <TracingBeam>
        <div className="min-h-screen flex flex-col items-center justify-center px-8 py-32 space-y-16">
          {/* About Me Section */}
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-wide text-white">
              About Me
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I’m a passionate developer with expertise in Next.js, React, and
              AI integrations. I thrive on building **innovative projects** that
              push the boundaries of technology.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="max-w-4xl w-full bg-gray-900/50 p-12 rounded-lg shadow-lg space-y-12">
            <h2 className="text-4xl font-bold text-white text-center">
              Experience
            </h2>

            {/* IT Support Specialist */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Information Technology Support Specialist
              </h3>
              <p className="text-gray-400 text-lg">
                Office of Information Technology, UTA | Arlington, TX
                <br />
                <span className="text-gray-500 text-base">
                  Oct. 2022 – Present
                </span>
              </p>
              <ul className="list-disc list-inside text-gray-400 text-lg space-y-2 pl-5">
                <li>
                  Provided campus-wide tech support for **42,000+ users** across
                  multiple departments.
                </li>
                <li>
                  Led migration of **39,000+ customer records** to the
                  Service-Now ticketing system.
                </li>
                <li>
                  Implemented **Adobe Intune, Microsoft Azure AD, and Jamf
                  Connect** across **500+ devices**.
                </li>
              </ul>
            </div>

            {/* Research Assistant */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Undergraduate Research Assistant
              </h3>
              <p className="text-gray-400 text-lg">
                Abacus Cloud and Edge Systems Lab (ACES) | Arlington, TX
                <br />
                <span className="text-gray-500 text-base">
                  May 2023 – Sept. 2023
                </span>
              </p>
              <ul className="list-disc list-inside text-gray-400 text-lg space-y-2 pl-5">
                <li>
                  Designed network architecture with **Kubernetes**, achieving a
                  **35% increase in network speed**.
                </li>
                <li>
                  Developed a **data simulation system** using **Raspberry Pis
                  and K3s**.
                </li>
                <li>
                  Created a **web-based weather visualization tool** for **50+
                  counties** using JSON-mapped data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default Page;
