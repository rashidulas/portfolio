import Image from "next/image";
import Hero from "@/components/Hero";
import { Project } from "@/components/home/project";
import About from "@/components/home/about";
import ExperiencePage from "@/components/home/experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <ExperiencePage />
    </div>
  );
}
