// components/Header.js
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#0E0B16",
        paddingLeft: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        borderBottom: "0.5px solid #E7DFDD",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "fit-content",
        }}
      >
        <Link href="/">
          <div
            style={{
              width: "3rem",
              height: "3rem",
              marginTop: "-0.5rem",
              marginLeft: "0.5rem",
              display: "flex",
              justifyContent: "start",
              border: "2px solid #A239CA",
              borderRadius: "0.25rem",
              padding: "0.125rem",
              cursor: "pointer",
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
          <Link href="/" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1.125rem",
                borderBottom: "2px solid transparent",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
              }}
            >
              Home
            </h1>
          </Link>
          <Link href="/about" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1.125rem",
                borderBottom: "2px solid transparent",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
              }}
            >
              About
            </h1>
          </Link>
          <Link href="/projects" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1.125rem",
                borderBottom: "2px solid transparent",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
              }}
            >
              Projects
            </h1>
          </Link>
          <Link href="/contact" style={{ gridColumn: "span 1" }}>
            <h1
              style={{
                color: "#E7DFDD",
                fontSize: "1.125rem",
                borderBottom: "2px solid transparent",
                paddingBottom: "0.5rem",
                width: "fit-content",
                padding: "0.75rem",
                textAlign: "center",
              }}
            >
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
