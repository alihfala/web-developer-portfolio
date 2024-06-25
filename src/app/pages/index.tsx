// pages/index.js
import Layout from "@/Components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="lg:flex md:flex flex-col items-center justify-between min-h-screen bg-[#0E0B16] text-[#E7DFDD] px-24 ">
        <div className="flex flex-col items-center justify-start w-[50%]">
          <h1 className="text-4xl font-bold mb-4 flex justify-start w-full">
            Welcome to My Portfolio!
          </h1>
          <p className="text-lg ">
            I&apos;m Ali fala, a passionate Full Stack Developer dedicated to
            bringing innovative solutions and a touch of creativity to every
            project. With a strong foundation in both front-end and back-end
            technologies, I thrive on transforming complex problems into
            elegant, user-friendly applications. Whether it&apos;s designing
            intuitive interfaces or building robust server-side logic, I&apos;m
            always eager to learn and adapt in the ever-evolving tech landscape.
            Explore my work, and let&apos;s connect to create something
            extraordinary together!
          </p>
        </div>
        <div className="w-96 h-96 border-[#A239CA] border-2 rounded-full">
          <Image src="/profile-pic.png" className="h-full w-full" alt="" />
        </div>
      </div>
    </Layout>
  );
}
