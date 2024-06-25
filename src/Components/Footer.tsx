// components/Footer.js
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0E0B16",
        height: "240px",
        borderTop: "0.5px solid #E7DFDD",
        color: "#E7DFDD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        className="container flex justify-between items-center !mx-auto"
        style={{ padding: "40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            alignItems: "center",
            justifySelf: "center",
            width: "50%",
            margin: "auto",
          }}
        >
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1rem",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              Home
            </h1>
          </Link>
          <Link href="/about" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1rem",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              About
            </h1>
          </Link>
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <div
              style={{
                width: "3rem",
                height: "3rem",
                marginTop: "-0.5rem",
                marginLeft: "0.5rem",
                display: "flex",
                border: "2px solid #A239CA",
                borderRadius: "0.25rem",
                padding: "0.125rem",
                cursor: "pointer",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Image src="/af.png" className="w-full h-full" alt="" />
            </div>
          </Link>
          <Link href="/projects" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1rem",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              Projects
            </h1>
          </Link>
          <Link href="/contact" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1rem",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              Contact
            </h1>
          </Link>
        </div>
      </div>
      <div
        style={{
          borderBottom: "0.5px solid #48403e",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: "0.75rem 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "0.5rem",
            display: "flex",
            gap: "0.75rem",
            marginLeft: "-0.25rem",
            width: "fit-content",
          }}
        >
          <a
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
            href="https://www.facebook.com/alihfala/"
            style={{
              color: "#E7DFDD",
              backgroundColor: "#4717F6",
              padding: "0.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <RiFacebookFill />
          </a>
          <a
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
            href="https://www.instagram.com/alihfala"
            style={{
              color: "#E7DFDD",
              backgroundColor: "#4717F6",
              padding: "0.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <FaInstagram />
          </a>
          <a
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
            href="https://www.linkedin.com/in/ali-fala-08a9382a2/"
            style={{
              color: "#E7DFDD",
              backgroundColor: "#4717F6",
              padding: "0.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-[#E7DFDD] bg-[#4717F6] w-fit p-2 rounded-full hover:bg-[#A239CA]"
            href="https://github.com/alihfala"
            style={{
              color: "#E7DFDD",
              backgroundColor: "#4717F6",
              padding: "0.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "12px",
          marginLeft: "-0.5rem",
          color: "#E7DFDD",
        }}
      >
        © 2024 Copyright:{" "}
        <a href="/" style={{ color: "#E7DFDD" }}>
          alihfala
        </a>
      </div>
    </div>
  );
};

export default Footer;
