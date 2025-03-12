import { FocusCards } from "@/components/ui/focus-cards";

export function Project() {
  const cards = [
    {
      title: "LegalAI",
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
      title: "Camping is for pros",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "The road not taken",
      src: "/projects/fleetpulse.png",
    },
    {
      title: "LunGuardian",
      src: "/projects/fleetpulse.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-5">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h3 className="text-xl font-semibold text-gray-500">projects</h3>
        <h1 className="text-4xl font-bold">
          <span className="text-yellow-600">(03) </span>PORTFOLIO
        </h1>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
