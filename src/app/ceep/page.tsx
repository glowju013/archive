import ProjectSection from "../../../components/ProjectSection";
import { projects } from "@/lib/siteContent";

export default function CeepPage() {
  const ceepProject = projects[0];

  return (
    <ProjectSection
      id={ceepProject.id}
      label={ceepProject.label}
      title={ceepProject.title}
      description={ceepProject.description}
      work={ceepProject.work}
      image={ceepProject.image}
      priority
    />
  );
}
