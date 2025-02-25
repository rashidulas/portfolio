"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Enduro",
    description:
      "Spring Boot-based Java application for tracking running activities, featuring REST API and H2 in-memory DB.",
    link: "https://github.com/rashidulas/enduro",
    image: "/projects/enduro.jpg", // Ensure images are in the 'public/projects' folder
  },
  {
    title: "Fleet Pulse",
    description:
      "AI-powered fleet management tool with machine learning, OpenAI GenAI, and AWS S3 for large-scale data analytics.",
    link: "https://github.com/rashidulas/fleet-pulse",
    image: "/projects/legalai.png",
  },
  {
    title: "ShelfShare",
    description:
      ".NET MVC-based book-sharing platform with Microsoft SQL Server, Azure Studio, and Docker for deployment.",
    link: "https://github.com/rashidulas/shelfshare",
    image: "/projects/statefirm.png",
  },
  {
    title: "Trasva",
    description:
      "Next.js social media platform for travelers with MongoDB, UploadThings, Google API & Clerk for authentication.",
    link: "https://github.com/rashidulas/trasva",
    image: "/projects/lung.jpg",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center w-full px-5 py-12">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-80 h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={project.image}
                  height={400}
                  width={400}
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  translateX={-20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  View Project →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={20}
                  as="a"
                  href={project.link}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
