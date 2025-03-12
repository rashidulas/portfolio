import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <div>
      <ExperienceCard
        image="/icons/oit.png" // Replace with your actual image path
        title="LEAD TECHNOLOGY ASSISTANT"
        description="Office of Information Technology - UTA"
        price="Oct 2022 - Present"
      />
      <ExperienceCard
        image="/icons/uta.png"
        title="UNDERGRADUATE RESEARCH ASSISTANT"
        description="Abacus Cloud and Edge Systems"
        price="May 2023 - Aug 2023"
      />
      <ExperienceCard
        image="/icons/ACM.png"
        title="OFFICER - ACM Create"
        description="Association for Computing Machinery - UTA"
        price="Aug 2024 - Present"
      />
    </div>
  );
}
