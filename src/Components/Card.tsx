// components/Card.js
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/projects/data";

interface CardProps {
  project: Project;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="bg-[#E7DFDD] p-4 shadow-md rounded-lg">
      <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-${project.mobile ? 'contain' : 'cover'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <button
          className="text-[#E7DFDD] bg-[#4717F6] w-fit px-3 py-2 rounded-md hover:bg-[#A239CA] transition-colors duration-300"
        >
          View Project
        </button>
      </Link>
    </div>
  );
};

export default Card;
