// pages/index.js
import Layout from "@/Components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#0E0B16] text-[#E7DFDD]">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to My <span className="text-[#A239CA]">Portfolio</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I&apos;m Ali fala, a passionate Full Stack Developer dedicated to
                bringing innovative solutions and a touch of creativity to every
                project.
              </p>
              <p className="text-base md:text-lg text-gray-400">
                With a strong foundation in both front-end and back-end
                technologies, I thrive on transforming complex problems into
                elegant, user-friendly applications.
              </p>
              <div className="flex gap-4 pt-4">
                <Link 
                  href="/projects"
                  className="bg-[#4717F6] hover:bg-[#A239CA] text-[#E7DFDD] px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-[#A239CA] text-[#E7DFDD] px-6 py-3 rounded-lg hover:bg-[#A239CA] transition-all duration-300 font-semibold"
                >
                  Contact Me
                </Link>
              </div>
              <div className="flex gap-4 pt-6">
                <a href="https://github.com/alihfala" target="_blank" rel="noopener noreferrer"
                   className="text-[#E7DFDD] hover:text-[#A239CA] transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ali-fala-08a9382a2/" target="_blank" rel="noopener noreferrer"
                   className="text-[#E7DFDD] hover:text-[#A239CA] transition-colors duration-300">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="https://www.instagram.com/alihfala" target="_blank" rel="noopener noreferrer"
                   className="text-[#E7DFDD] hover:text-[#A239CA] transition-colors duration-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-[#A239CA] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative border-2 border-[#A239CA] rounded-full overflow-hidden">
                  <Image 
                    src="/profile-pic.png" 
                    width={384} 
                    height={384} 
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
