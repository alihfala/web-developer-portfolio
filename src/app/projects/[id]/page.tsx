// pages/projects/[id].js
import Layout from "@/Components/layout/Layout";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Lebanese Newspaper Website",
    description:
      "Implementing the website for a Lebanese newspaper involved a modern and efficient tech stack to ensure a seamless user experience and robust content management. We utilized Next.js and TypeScript to build a fast, scalable, and type-safe front-end application. Tailwind CSS was employed to create a responsive and visually appealing design, enhancing the overall user interface. For the back-end, Strapi served as the headless CMS, offering flexible and powerful content management capabilities. GraphQL was integrated to streamline data fetching, providing a smooth and efficient way to query the necessary information. This combination of technologies enabled the development of a dynamic, high-performance website that effectively delivers news and updates to its audience.",
    images: ["/image1.png", "/image7.png", "/image8.png", "/image9.png"],
    mobile: false,
  },
  {
    id: "2",
    title: "Repair Website",
    description: `The repair and maintenance website was designed to provide users with an easy and efficient way to book services, track repairs, and access maintenance tips. The website was built using a powerful and modern tech stack. Next.js and TypeScript were chosen for the front-end to create a fast, scalable, and type-safe application. Tailwind CSS was used for styling, ensuring a responsive and visually appealing user interface. The back-end was developed with NestJS, which provided a robust and maintainable structure. Prisma ORM facilitated seamless interactions with the PostgreSQL database, ensuring efficient data management and retrieval. 
    In this project, my role as the front-end developer was to transform the provided design mockups into a fully functional website. I meticulously implemented the designs using Next.js and Tailwind CSS, ensuring that the site was not only visually appealing but also responsive and user-friendly. By leveraging TypeScript, I maintained type safety and reduced potential bugs in the code. My focus was on creating an intuitive user experience, making it easy for users to navigate the site, and find the information they needed efficiently.`,
    images: ["/w4.png", "/w1.png", "/w2.png", "/w3.png"],
    mobile: false,
  },
  {
    id: "3",
    title: "Beirut By Bike Website - University Project",
    description: `Implementing the website for renting and selling bikes involved creating a user-friendly platform where customers can easily browse, rent, or purchase bikes. The front-end was developed using ReactJS, enabling the creation of a dynamic and interactive user interface. CSS played a crucial role in styling the application, ensuring a responsive and visually appealing design that enhanced user experience across various devices.
    On the back-end, ASP.NET Web API provided a robust and scalable framework for implementing the application's business logic and managing interactions with the database. My primary responsibility in this project was to develop the entire website, encompassing both front-end and back-end aspects. I transformed design mockups into fully functional web pages using ReactJS and CSS, ensuring seamless navigation and intuitive user interactions. This approach empowered users to effortlessly find and rent or purchase bikes according to their preferences, enhancing overall usability and satisfaction.`,
    images: ["/bbbw1.png", "/bbbw2.png", "/bbbw3.png"],
    mobile: false,
  },
  {
    id: "4",
    title: "Beirut By Bike Mobile App - Capstone Project",
    description: `Creating the mobile app for renting and selling bikes involved overseeing the entire project from inception to completion. I focused on developing a seamless and efficient platform accessible on both iOS and Android devices using React Native. This allowed me to craft a native-like experience that empowered users to browse, rent, or purchase bikes directly from their mobile devices with ease.
    On the back-end, Node.js served as the core technology for implementing robust server-side logic. I integrated Prisma ORM with PostgreSQL for efficient database management, ensuring smooth data operations throughout the app.
    Key to the app's functionality was the integration of Stripe for secure online payments, enabling users to complete transactions seamlessly for bike rentals and purchases. Renting bikes was further streamlined through QR code scanning, offering a convenient and swift process for users to initiate rentals.
    Moreover, I designed and implemented a comprehensive dashboard accessible to both administrators and staff members. This dashboard facilitated real-time management of bike listings, user interactions, and transaction tracking, ensuring operational efficiency.
  
    Throughout the project, my role encompassed not only front-end development using React Native but also overseeing the entire development process. I ensured that the user interface aligned with design specifications while optimizing performance across different mobile platforms, thereby delivering a cohesive and intuitive mobile experience for users.`,
    images: [
      "/bbb11.jpeg",
      "/bbb2.jpeg",
      "/bbb3.jpeg",
      "/bbb4.jpeg",
      "/bbb5.jpeg",
      "/bbb6.jpeg",
      "/bbbw4.png",
      "/bbbw5.png",
      "/bbbw6.png",
    ],
    mobile: true,
  },
  {
    id: "5",
    title: "Hotel Explorer - University Project",
    description: `Implementing the Hotel Explorer website using ASP.NET MVC involved developing a robust platform that seamlessly integrates hotel exploration and booking functionalities. ASP.NET MVC provided a structured framework for efficiently managing the back-end, encompassing business logic and data interactions. This enabled dynamic content generation and seamless database integration to handle hotel listings, user bookings, and reviews effectively.
    On the front-end, I took charge of crafting a responsive and intuitive user interface using HTML, CSS, and JavaScript. Leveraging Razor views and partial views, I translated design mockups into functional web pages that enhanced user engagement and navigation. My comprehensive role spanned the entire project, from conceptualization to implementation, ensuring a cohesive and user-friendly experience throughout the hotel exploration and booking process.`,
    images: [
      "/hotel2.png",
      "/hotel1.png",
      "/hotel3.png",
      "/hotel4.png",
      "/hotel5.png",
    ],
    mobile: false,
  },
  {
    id: "6",
    title: "Clinic Mobile App - University Project",
    description:
      "Implementing the mobile app for a clinic involved collaborative efforts with a partner to create a functional and user-friendly platform. Using Java and Android Studio, we developed the app to streamline patient management, appointment scheduling, and health record access. Java provided a robust foundation for building reliable and efficient code, while Android Studio facilitated seamless integration and debugging throughout the development process. SQLite was utilized for local data storage, ensuring quick access to patient information offline. Our focus was on creating an intuitive user interface that allowed healthcare professionals to efficiently manage clinic operations and patient interactions. Working closely with my partner, I contributed to designing and implementing key features, ensuring the app met healthcare industry standards for usability and security.",
    images: [
      "/clinic5.jpeg",
      "/clinic1.jpeg",
      "/clinic2.jpeg",
      "/clinic3.jpeg",
      "/clinic4.jpeg",
      "/clinic5.jpeg",
    ],
    mobile: true,
  },
];

const Project = ({ params }: any) => {
  const id = params.id;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }
  return (
    <Layout>
      <div className="container mx-auto p-4 bg-[#0E0B16]">
        <h1 className="text-4xl font-bold mb-4 text-[#E7DFDD]">
          {project.title}
        </h1>
        <p className="mb-4 text-[#E7DFDD]">{project.description}</p>
        {!project.mobile ? (
          <>
            <div className="grid gap-10 w-[80%] mx-auto">
              {project.images.slice(0, 1).map((image: any, index: any): any => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-[500px] rounded-lg border-2 border-[#A239CA]"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] my-10 mx-auto">
              {project.images.slice(1).map((image: any, index: any): any => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-72 rounded-lg border-2 border-[#A239CA]"
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[60%] mx-auto my-10">
              {project.images.slice(0, 6).map((image: any, index: any): any => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-[650px] rounded-lg"
                />
              ))}
            </div>
            <div className="grid gap-10 w-[60%] mx-auto mb-10">
              {project.images.slice(6).map((image: any, index: any): any => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-[450px] rounded-lg"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Project;
