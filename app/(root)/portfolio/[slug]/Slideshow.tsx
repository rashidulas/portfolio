"use client";

import { useState } from "react";
import Image from "next/image";

export interface MediaEntry {
  type: "image" | "video";
  src: string;
}

interface SlideshowProps {
  media: MediaEntry[];
}

export default function Slideshow({ media }: SlideshowProps) {
  const [idx, setIdx] = useState(0);
  if (!media || media.length === 0) return null;

  const prev = () => setIdx((idx - 1 + media.length) % media.length);
  const next = () => setIdx((idx + 1) % media.length);
  const current = media[idx];

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh]">
      {current.type === "image" ? (
        <Image
          src={current.src}
          alt={`slide ${idx + 1}`}
          fill
          className="object-cover"
        />
      ) : (
        <video
          src={current.src}
          controls
          className="w-full h-full object-cover"
        />
      )}

      {/* Prev/Next buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
