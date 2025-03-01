import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      <ExperienceCard
        image="/portfolio-shoot.jpg" // Replace with your actual image path
        title="PORTFOLIO SHOOT"
        description="12 - 20 Edited photo"
        price="500 - 1000$"
      />
      <ExperienceCard
        image="/editorial-shoot.jpg"
        title="EDITORIAL SHOOT"
        description="12 - 20 Edited photo"
        price="1000 - 1500$"
      />
      <ExperienceCard
        image="/location-shoot.jpg"
        title="LOCATION SHOOT"
        description="12 - 20 Edited photo"
        price="1500 - 2000$"
      />
    </div>
  );
}
