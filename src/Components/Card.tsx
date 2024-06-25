// components/Card.js
import Image from "next/image";
import Link from "next/link";

const Card = ({ project }: any) => {
  return (
    <div className="bg-[#E7DFDD] p-4 shadow-md rounded-lg">
      <Image
        src={project.image}
        alt={project.title}
        className={`w-full h-60 rounded-lg mb-4 ${
          !project.mobile ? "object-fill" : "object-contain"
        }`}
      />
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <p className="text-[#E7DFDD] bg-[#4717F6] w-fit px-3 py-2 rounded-md hover:bg-[#A239CA]">
          View Project
        </p>
      </Link>
    </div>
  );
};

export default Card;
