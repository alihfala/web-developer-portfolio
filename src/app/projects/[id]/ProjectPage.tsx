'use client';

import Layout from "@/Components/layout/Layout";
import Image from "next/image";
import type { Project } from "@/app/projects/data";
import ImageViewer from "@/Components/ImageViewer";
import { useState } from "react";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container mx-auto p-4 bg-[#0E0B16] min-w-full">
        <h1 className="text-4xl font-bold mb-4 text-[#E7DFDD]">
          {project.title}
        </h1>
        <p className="mb-4 text-[#E7DFDD]">{project.description}</p>
        {!project.mobile ? (
          <>
            <div className="grid gap-10 w-[80%] mx-auto">
              {project.images.slice(0, 1).map((image: string, index: number) => (
                <div 
                  key={index} 
                  className="relative w-full h-[500px] rounded-lg border-2 border-[#A239CA] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Click to view fullscreen</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] my-10 mx-auto">
              {project.images.slice(1).map((image: string, index: number) => (
                <div 
                  key={index} 
                  className="relative w-full h-72 rounded-lg border-2 border-[#A239CA] overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Click to view fullscreen</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] md:w-[60%] mx-auto my-10">
              {project.images.slice(0, 6).map((image: string, index: number) => (
                <div 
                  key={index} 
                  className="relative w-full h-[650px] rounded-lg overflow-hidden bg-black/5 cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Click to view fullscreen</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-10 w-[90%] md:w-[60%] mx-auto mb-10">
              {project.images.slice(6).map((image: string, index: number) => (
                <div 
                  key={index} 
                  className="relative w-full h-[450px] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index + 6)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Click to view fullscreen</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {selectedImageIndex !== null && (
          <ImageViewer
            images={project.images}
            currentIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </div>
    </Layout>
  );
} 