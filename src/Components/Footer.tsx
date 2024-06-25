// components/Header.js
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0E0B16] h-[230px] border-t-[0.5px] border-t-[#E7DFDD]  text-[#E7DFDD] flex justify-center items-center flex-col mx-auto">
      <div className="container mx-auto flex justify-between items-center ml-5">
        <div
          className="mx-auto my-8"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            alignItems: "center",
            justifySelf: "center",
            width: "50%",
          }}
        >
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-base  pb-2 w-fit px-3 text-center col-span-1">
              Home
            </h1>
          </Link>
          <Link href="/about" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-base pb-2 w-fit px-3 text-center col-span-1">
              About
            </h1>
          </Link>
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <div
              style={{
                width: "3rem", // Equivalent to w-12
                height: "3rem", // Equivalent to h-12
                marginTop: "-0.5rem", // Equivalent to -mt-2
                marginLeft: "0.5rem", // Equivalent to ml-2
                display: "flex", // Equivalent to flex
                justifyContent: "start", // Equivalent to justify-start
                border: "2px solid #A239CA", // Equivalent to border-[2px] rounded-sm border-[#A239CA]
                padding: "0.125rem", // Equivalent to p-0.5
                cursor: "pointer", // Equivalent to cursor-pointer
              }}
            >
              {" "}
              <Image src="/af.png" className="w-full h-full" alt="" />
            </div>
          </Link>
          <Link href="/projects" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-base pb-2 w-fit px-3 text-center col-span-1">
              Projects
            </h1>
          </Link>
          <Link href="/contact" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-base pb-2 w-fit px-3 text-center col-span-1">
              Contact
            </h1>
          </Link>
        </div>
      </div>
      <div className="border-b-[0.5px] border-b-[#48403e] w-full flex justify-center items-center mx-auto py-3">
        <div className="text-center mb-5 flex gap-5 -ml-5">
          <a
            href="https://www.facebook.com/alihfala/"
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://www.instagram.com/alihfala"
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-fala-08a9382a2/"
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/alihfala"
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="text-center p-3 -ml-5 text-[#E7DFDD]">
        © 2024 Copyright: <a href="/">alihfala</a>
      </div>
    </div>
  );
};

export default Footer;
