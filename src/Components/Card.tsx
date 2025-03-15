// components/Card.js
'use client';

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/projects/data";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="bg-[#0E0B16] p-4 rounded-lg border-2 border-[#A239CA] hover:border-[#4717F6] transition-colors duration-300">
      <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-${project.mobile ? 'contain' : 'cover'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#E7DFDD]">{project.title}</h3>
      <p className="text-[#E7DFDD]/80 mb-4 line-clamp-3">{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <button className="bg-[#4717F6] text-[#E7DFDD] px-4 py-2 rounded-md hover:bg-[#A239CA] transition-colors duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
