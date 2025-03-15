import type { Project } from "@/app/projects/data";
import { projects } from "@/app/projects/data";
import ProjectPage from "./ProjectPage";

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <ProjectPage id={params.id} />;
}
