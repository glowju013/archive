import IntroSection from "../../components/IntroSection";
import ProjectSection from "../../components/ProjectSection";
import { projects } from "@/lib/siteContent";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <IntroSection />
      {projects.map((project, index) => (
        <ProjectSection
          key={project.id}
          id={project.id}
          label={project.label}
          title={project.title}
          description={project.description}
          work={"work" in project ? project.work : undefined}
          image={project.image}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
