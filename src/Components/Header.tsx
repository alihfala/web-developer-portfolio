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
            className="w-12 h-12 -mt-2 ml-2 flex justify-start border-[2px] rounded-sm border-[#A239CA] p-0.5 cursor-pointer"
            style={{
              width: "48px",
              height: "48px",
              border: "2px",
              borderColor: "#A239CA",
            }}
          >
            <Image src="/af.png" className="w-full h-full" alt="" />
          </div>
        </Link>
        <div className="grid grid-cols-4 items-center self-center w-[50%]">
          <Link href="/" className="col-span-1">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              Home
            </h1>
          </Link>
          <Link href="/about" className="col-span-1">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              About
            </h1>
          </Link>
          <Link href="/projects" className="col-span-1">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center">
              Projects
            </h1>
          </Link>
          <Link href="/contact" className="col-span-1">
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
