import type { Project } from "@/app/projects/data";
import { projects } from "@/app/projects/data";
import ProjectPage from "@/app/projects/[id]/ProjectPage";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  
  return {
    title: project ? `${project.title} - Portfolio` : 'Project Not Found',
    description: project?.description || 'Project details',
  };
}

export default async function Page({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return <ProjectPage project={project} />;
}
