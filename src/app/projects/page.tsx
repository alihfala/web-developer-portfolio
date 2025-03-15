// pages/projects.js
'use client';

import Layout from "@/Components/layout/Layout";
import Card from "@/Components/Card";
import type { Project } from "@/app/projects/data";
import { projects } from "@/app/projects/data";

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto p-4 bg-[#0E0B16] min-w-full">
        <h1 className="text-4xl font-bold mb-8 text-[#E7DFDD] text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
          {projects.map((project: Project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
