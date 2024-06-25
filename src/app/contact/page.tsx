// pages/contact.js

import Layout from "@/Components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 min-h-screen bg-[#0E0B16] flex justify-center items-center flex-col gap-4 min-w-full">
        <h2 className="text-4xl font-bold mb-4 text-[#E7DFDD]">Get in Touch</h2>
        <p className="text-xl text-[#E7DFDD] w-[80%] text-center">
          Looking for a Full Stack Developer ready to infuse creativity and
          dedication into your dynamic organization? Let&apos;s connect!
        </p>
        <div className="mt-5 text-[#E7DFDD] gap-5 space-y-5 flex flex-col justify-center items-center text-lg">
          <div className="flex gap-2">
            <span>
              Email:{" "}
              <a href="mailto:alihfala@gmail.com" className="underline">
                alihfala@gmail.com
              </a>
            </span>
          </div>
          <div className="flex gap-2">
            <span>
              On the Internet:{" "}
              <a
                href="https://www.linkedin.com/in/ali-fala-08a9382a2/"
                className="underline"
              >
                LinkedIn
              </a>
            </span>
          </div>
          <div className="flex gap-2">
            <span>
              Github:{" "}
              <a
                href="https://github.com/alihfala"
                className="underline hover:text-[#A239CA]"
              >
                alihfala
              </a>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
