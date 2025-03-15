// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/alihfala/", icon: RiFacebookFill },
    { href: "https://www.instagram.com/alihfala", icon: FaInstagram },
    { href: "https://www.linkedin.com/in/ali-fala-08a9382a2/", icon: FaLinkedinIn },
    { href: "https://github.com/alihfala", icon: FaGithub },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0E0B16] border-t border-[#E7DFDD]/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 border-2 border-[#A239CA] rounded-lg overflow-hidden">
                <Image
                  src="/af.png"
                  width={48}
                  height={48}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#E7DFDD] font-semibold text-xl">Ali Fala</span>
            </Link>
            <p className="text-[#E7DFDD]/60 text-sm text-center md:text-left">
              Full Stack Developer crafting elegant solutions for web and mobile applications.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#E7DFDD] hover:text-[#A239CA] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E7DFDD] hover:text-[#A239CA] transition-colors duration-300"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#E7DFDD]/10 text-center">
          <p className="text-[#E7DFDD]/60 text-sm">
            © {new Date().getFullYear()} Ali Fala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
