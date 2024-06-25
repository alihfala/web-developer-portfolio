// components/Card.js
import Image from "next/image";
import Link from "next/link";

const Card = ({ project }: any) => {
  const styles = {
    width: "100%",
    height: "60px",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    objectFit: project.mobile ? "contain" : ("fill" as "contain" | "fill"),
  };
  return (
    <div className="bg-[#E7DFDD] p-4 shadow-md rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-60 rounded-lg mb-4 ${
          !project.mobile ? "object-fill" : "object-contain"
        }`}
        style={styles}
      />
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <button
          className="text-[#E7DFDD] bg-[#4717F6] w-fit px-3 py-2 rounded-md hover:bg-[#A239CA]"
          style={{
            color: "#E7DFDD",
            backgroundColor: "#4717F6",
            padding: "0.5rem 0.75rem",
            borderRadius: "0.375rem",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          View Project
        </button>
      </Link>
    </div>
  );
};

export default Card;
