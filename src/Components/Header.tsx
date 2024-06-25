// components/Header.js
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#0E0B16] px-4 pt-4 pb-2 border-b-[0.5px] border-b-[#E7DFDD]">
      <nav className="container mx-auto !flex justify-between items-center">
        <Link href="/">
          <div className="w-12 h-12 -mt-2 ml-2 flex justify-start border-[2px] rounded-sm border-[#A239CA] p-0.5 cursor-pointer">
            <Image src="/af.png" className="w-full h-full" alt="" />
          </div>
        </Link>
        <div className="grid grid-cols-4 items-center self-center w-[50%]">
          <Link href="/">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center col-span-1">
              Home
            </h1>
          </Link>
          <Link href="/about">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center col-span-1">
              About
            </h1>
          </Link>
          <Link href="/projects">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center col-span-1">
              Projects
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-[#E7DFDD] text-lg animated-border pb-2 w-fit px-3 text-center col-span-1">
              Contact
            </h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
