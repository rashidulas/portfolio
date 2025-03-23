import { FocusCards } from "@/components/ui/focus-cards";

export function Project() {
  const cards = [
    {
      title: "Waste.0",
      src: "/projects/legalai.png",
    },
    {
      title: "ShelfShare",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "Trasva",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "Fleet Pulse",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "Legal AI",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "Enduro",
      src: "/projects/fleetpulse.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-5">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h3 className="text-xl font-semibold text-gray-500">Projects</h3>
        <h1 className="text-4xl font-bold">PORTFOLIO</h1>
      </div>
      <div className="w-full px-7">
        <FocusCards cards={cards} />
      </div>
      {/* Button Section */}
      <div className="mt-8">
        <a
          href="/portfolio"
          className="border border-gray-800 px-5 py-2 inline-flex items-center transition-colors hover:bg-black hover:text-white"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
}
