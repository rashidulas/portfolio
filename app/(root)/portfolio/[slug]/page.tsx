// app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Slideshow, { MediaEntry } from "./Slideshow";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="w-full">
      {/* 1) full-bleed slideshow */}
      <Slideshow media={project.media as MediaEntry[]} />

      {/* 2) details below */}
      <section className="container mx-auto px-4 py-12 space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-600 italic">{project.subtitle}</p>
        <p className="text-lg leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.category.map((c) => (
            <span
              key={c}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              View Code
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              Visit Site
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
