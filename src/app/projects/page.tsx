// pages/projects.js
import Card from "../../Components/Card";
import Layout from "@/Components/layout/Layout";

const projects = [
  {
    id: "1",
    title: "Lebanese Newspaper Website",
    description:
      "Stay informed with the latest news, insights, and updates from Lebanon and the world",
    image: "/image1.png",
    mobile: false,
  },
  {
    id: "2",
    title: "Repair Website",
    description:
      "Equipping a team to perform repairs in-house—the most cost-effective solution for the school.",
    image: "/w4.png",
    mobile: false,
  },
  {
    id: "3",
    title: "Beirut By Bike Website - University Project",
    description:
      "Discover the best deals on bike rentals and sales, offering a wide range of models to suit all your cycling needs.",
    image: "/bbbw1.png",
    mobile: false,
  },
  {
    id: "4",
    title: "Beirut By Bike Mobile App - Capstone Project",
    description:
      "Find and rent or buy the perfect bike effortlessly with our mobile app, featuring a diverse selection and seamless transactions.",
    image: "/bbb11.jpeg",
    mobile: true,
  },
  {
    id: "5",
    title: "Hotel Explorer - University Project",
    description:
      "Discover and book the perfect stay with Hotel Explorer, your gateway to the best hotels and accommodations worldwide.",
    image: "/hotel2.png",
    mobile: false,
  },
  {
    id: "6",
    title: "Clinic Mobile App - University Project",
    description:
      "Manage appointments, access health records, and connect with your doctor effortlessly with our Clinic Mobile App.",
    image: "/clinic5.jpeg",
    mobile: true,
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 bg-[#0E0B16] min-w-full">
        <h2 className="text-3xl font-bold mb-4 text-[#E7DFDD]">Work Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4 bg-[#0E0B16] pb-10 min-w-full">
        <h2 className="text-3xl font-bold mb-4 text-[#E7DFDD]">My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(2).map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
