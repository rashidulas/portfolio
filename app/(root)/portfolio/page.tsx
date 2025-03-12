"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "HomeSecurity",
    category: ["OpenCV", "TensorFlow", "Google Cloud"],
    image: "/projects/homesecurity.png",
    github: "https://github.com/yourgithub/homesecurity",
    description:
      "Developed a real-time monitoring system using OpenCV and TensorFlow, enhancing security alerts with Google Cloud Object Storage for video archival and real-time text notifications.",
  },
  {
    id: 2,
    title: "UTA Datathon Website",
    category: ["React.js", "Firebase", "Google Maps API"],
    image: "/projects/utadatathon.png",
    website: "https://utadatathon.com",
    description:
      "Managed the UTA Datathon 2024 website, integrating Firebase backend and React.js frontend with QR code-based sign-in and interactive venue mapping for 400+ students.",
  },
  {
    id: 3,
    title: "LegalAI",
    category: ["Next.js", "MongoDB", "OpenAI API", "AWS"],
    image: "/projects/legalai.png",
    github: "https://github.com/yourgithub/legalai",
    description:
      "Developed AI-driven legal document summarization using OpenAI's API, extracting key clauses while managing deployment on AWS with Terraform for scalability.",
  },
  {
    id: 4,
    title: "ShelfShare",
    category: [".NET MVC", "Microsoft SQL Server", "Docker"],
    image: "/projects/shelfshare.png",
    github: "https://github.com/yourgithub/shelfshare",
    description:
      "Built a platform for users to showcase and lend books, integrating Microsoft SQL Server for transaction tracking and Docker for streamlined deployment.",
  },
  {
    id: 5,
    title: "Trasva",
    category: ["Next.js", "TypeScript", "MongoDB", "Google API", "Clerk"],
    image: "/projects/trasva.png",
    github: "https://github.com/yourgithub/trasva",
    description:
      "Developed a social media platform for travelers, featuring real-time location tracking, trip discovery, and image storage using UploadThing and MongoDB.",
  },
  {
    id: 6,
    title: "LunGuardian",
    category: ["Machine Learning", "HealthKit API", "Firebase Firestore"],
    image: "/projects/lunguardian.png",
    description:
      "Led the development of a lung cancer detection tool using wrist sensors, ML models, and Apple's HealthKit API, achieving 96% accuracy in patient diagnostics.",
  },
  {
    id: 7,
    title: "Enduro",
    category: ["Spring Boot", "Java", "Docker", "Testcontainers"],
    image: "/projects/enduro.png",
    description:
      "Created a Java-based running activity tracker with Spring Boot, implementing CRUD REST API and integrating Testcontainers for reliable testing.",
  },
  {
    id: 8,
    title: "StateFarm PWA",
    category: ["AngularFire", "Firebase"],
    image: "/projects/statefarm.png",
    description:
      "Developed a mobile-responsive web app for StateFarm, integrating real-time service updates and reducing onboarding time by 60% with Firebase-based user management.",
  },
  {
    id: 9,
    title: "Library Management System",
    category: ["Java", "SQL", "GUI"],
    image: "/projects/libraryms.png",
    github: "https://github.com/yourgithub/libraryms",
    description:
      "Built a Java-based library management system streamlining cataloging and loan information, reducing manual data entry by 40% through SQL automation.",
  },
  {
    id: 10,
    title: "PriceSpy",
    category: ["Next.js", "TypeScript", "MongoDB", "Bright Data"],
    image: "/projects/pricespy.png",
    github: "https://github.com/yourgithub/pricespy",
    description:
      "Created an e-commerce scraping tool to aggregate Amazon listings, integrating MongoDB and cron jobs for real-time updates, reducing manual checks by 15 hours weekly.",
  },
  {
    id: 11,
    title: "Waste.0",
    category: ["Next.js", "AWS", "Databricks", "Streamlit", "MongoDB"],
    image: "/projects/waste0.png",
    github: "https://github.com/yourgithub/waste0",
    description:
      "Designed an AI-powered food waste reduction tool, predicting inventory levels and spoilage timelines using ML models, while integrating scalable cloud architecture on AWS.",
  },
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [categories, setCategories] = useState([{ id: "all", label: "All" }]);

  // Extract unique categories from projects
  useEffect(() => {
    const allCategories = projects.flatMap((project) => project.category);
    const uniqueCategories = [...new Set(allCategories)];

    setCategories([
      { id: "all", label: "All" },
      ...uniqueCategories.map((cat) => ({ id: cat.toLowerCase(), label: cat })),
    ]);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.category.some(
            (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
          )
        );

  return (
    <div className="min-h-screen bg-white relative">
      {/* Grid background lines */}
      <div className="absolute inset-0 grid-background"></div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-5xl font-bold mb-12">MY WORKS</h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 bg-gray-100 p-2 rounded-md shadow-sm text-xs">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 shadow-sm ${
                activeCategory === category.id
                  ? "bg-black text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Icons for GitHub and Website - only shown if links exist */}
                <div className="absolute top-4 right-4 flex space-x-3 z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
                    >
                      <FaGithub className="text-black text-lg" />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-black text-lg" />
                    </a>
                  )}
                </div>

                {/* Project Details Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.category.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {project.category.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded mr-1"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.category.length > 3 && (
                    <span className="text-xs text-gray-600">
                      +{project.category.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
