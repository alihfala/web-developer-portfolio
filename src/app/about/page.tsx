// pages/about.js
import Footer from "@/Components/Footer";
import Header from "../../Components/Header";
import Layout from "@/Components/layout/Layout";
import ImageCard from "@/Components/ImageCard";

const index = () => {
  const data = [
    {
      id: 1,
      imageSrc: "/html.png",
      title: "HTML",
    },
    {
      id: 2,
      imageSrc: "/css.png",
      title: "CSS",
    },
    {
      id: 3,
      imageSrc: "/js.png",
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      imageSrc: "/tail.png",
      title: "TAILWINDCSS",
    },
    {
      id: 5,
      imageSrc: "/rj.png",
      title: "REACTJS",
    },
    {
      id: 6,
      imageSrc: "/next.png",
      title: "NEXTJS",
    },
    {
      id: 7,
      imageSrc: "/node.png",
      title: "NODEJS",
    },
    {
      id: 8,
      imageSrc: "/rn.png",
      title: "REACT NATIVE",
    },
    {
      id: 9,
      imageSrc: "/str.png",
      title: "STRAPI.JS",
    },
    {
      id: 10,
      imageSrc: "/jav.png",
      title: "JAVA",
    },
    {
      id: 11,
      imageSrc: "/aspd.png",
      title: "ASP.NET",
    },
    {
      id: 12,
      imageSrc: "/pris.png",
      title: "PRISMA ORM",
    },
    {
      id: 13,
      imageSrc: "/mysql.png",
      title: "MYSQL",
    },
    {
      id: 14,
      imageSrc: "/ps.png",
      title: "POSTGRESQL",
    },
    {
      id: 15,
      imageSrc: "/grp.png",
      title: "GRAPHQL",
    },
    {
      id: 16,
      imageSrc: "/php1.png",
      title: "PHP",
    },
    {
      id: 17,
      imageSrc: "/psh.png",
      title: "ADOBE PHOTOSHOP",
    },
    {
      id: 18,
      imageSrc: "/figma.png",
      title: "FIGMA",
    },
  ];
  return (
    <Layout>
      <div className="container mx-auto p-4 bg-[#0E0B16] min-h-screen flex flex-col justify-center pt-10 min-w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E7DFDD] text-center">
            About Me
          </h2>
          <p className="text-lg text-[#E7DFDD] text-center w-[80%] mx-auto">
            Hello, I&apos;m Ali Fala, a recent graduate in Computer Science with
            a Bachelor&apos;s degree. With a passion for crafting innovative
            solutions and a thirst for knowledge, I&apos;ve spent the past few
            years honing my skills in programming languages such as JavaScript,
            ReactJS, React Native, NextJS. My expertise in web development has
            equipped me to design and build robust applications that seamlessly
            integrate on both mobile and web platforms. As a team player with
            excellent communication skills, I thrive in collaborative
            environments where I can leverage my problem-solving abilities and
            creative thinking to drive results. Currently, I&apos;m working as a
            full-time developer at WZ Techno, where I&apos;m eager to apply my
            skills and knowledge to contribute to the development of
            cutting-edge projects. With a solid foundation in computer science
            and a strong work ethic, I&apos;m ready to take on new challenges
            and make a meaningful impact in the tech industry.
          </p>
        </div>
        <hr className="w-[60%] bg-[#E7DFDD] my-10 mx-auto" />
        <div className="flex flex-col justify-center mb-10">
          <h2 className="text-3xl font-bold text-[#E7DFDD] text-center mb-8">
            Skills
          </h2>
          <div className="w-[90%] md:w-[85%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 mx-auto">
            {data.map((data) => (
              <ImageCard
                key={data.id}
                imageSrc={data.imageSrc}
                title={data.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
