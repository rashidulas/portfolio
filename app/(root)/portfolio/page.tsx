import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Portfolio = () => {
  const projects = [
    {
      title: "Enduro",
      description:
        "Spring Boot-based Java application for tracking running activities, featuring REST API and H2 in-memory DB.",
      link: "https://github.com/rashidulas/enduro",
    },
    {
      title: "Fleet Pulse",
      description:
        "AI-powered fleet management tool with machine learning, OpenAI GenAI, and AWS S3 for large-scale data analytics.",
      link: "https://github.com/rashidulas/fleet-pulse",
    },
    {
      title: "ShelfShare",
      description:
        ".NET MVC-based book-sharing platform with Microsoft SQL Server, Azure Studio, and Docker for deployment.",
      link: "https://github.com/rashidulas/shelfshare",
    },
    {
      title: "Trasva",
      description:
        "Next.js social media platform for travelers with MongoDB, UploadThings, Google API & Clerk for authentication.",
      link: "https://github.com/rashidulas/trasva",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-8">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Portfolio
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
};

export default Portfolio;
