// components/Header.js
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#0E0B16] px-4 pt-4 pb-2 border-b-[0.5px] border-b-[#E7DFDD]">
      <div
        className="container mx-auto !flex justify-between items-center"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link href="/">
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
            <Image src="/af.png" className="w-full h-full" alt="" />
          </div>
        </Link>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            alignItems: "center",
            justifySelf: "center",
            width: "50%",
          }}
        >
          {" "}
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              Home
            </h1>
          </Link>
          <Link href="/about" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              About
            </h1>
          </Link>
          <Link href="/projects" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              Projects
            </h1>
          </Link>
          <Link href="/contact" style={{ gridColumn: "span 1" }}>
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
