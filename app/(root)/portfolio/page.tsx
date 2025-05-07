// app/portfolio/page.tsx
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function PortfolioList() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Works</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group block"
          >
            {/* thumbnail: first media item */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={p.media[0].src}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* subtitle + title */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 italic">{p.subtitle}</p>
              <h2 className="text-lg font-semibold">{p.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
