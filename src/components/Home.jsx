import {
  ChevronRight,
  Github,
  CreditCard,
  FileText,
  Layout,
  Table,
  Menu,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiEslint,
  SiPrettier,
  SiStorybook,
  SiJest,
} from "react-icons/si";
import { Link } from "react-router-dom";

const TechStack = () => {
  const technologyIcons = [
    { icon: <SiReact size={30} color="#61DAFB" />, name: "React" }, // React logo color
    { icon: <SiTypescript size={30} color="#3178C6" />, name: "TypeScript" }, // TypeScript logo color
    { icon: <SiTailwindcss size={30} color="#06B6D4" />, name: "Tailwind CSS" }, // Tailwind CSS logo color
    { icon: <SiVite size={30} color="#646CFF" />, name: "Vite" }, // Vite logo color
    { icon: <SiEslint size={30} color="#4B32C3" />, name: "ESLint" }, // ESLint logo color
    { icon: <SiPrettier size={30} color="#F7B93E" />, name: "Prettier" }, // Prettier logo color
    { icon: <SiStorybook size={30} color="#FF4785" />, name: "Storybook" }, // Storybook logo color
    { icon: <SiJest size={30} color="#C21325" />, name: "Jest" }, // Jest logo color
    // You can add more icons and colors as needed
  ];

  return (
    <div className="overflow-hidden py-10 bg-white bg-opacity-10">
      <div className="flex animate-scroll">
        {[...technologyIcons, ...technologyIcons].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center text-xl font-semibold space-x-2"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const components = [
    {
      name: "Buttons",
      icon: <button className="p-2 border border-blue-500">click me</button>,
    },
    { name: "Cards", icon: <CreditCard /> },
    { name: "Forms", icon: <FileText /> },
    { name: "Modals", icon: <Layout /> },
    { name: "Tables", icon: <Table /> },
    { name: "Navigation", icon: <Menu /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white pb-10">
      <main className="container mx-auto px-4 py-16 text-center pt-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build stunning UIs with YourUI
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          A modern, responsive, and customizable UI library for React
          applications. Create beautiful interfaces in minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/docs"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold flex items-center hover:bg-indigo-100 transition-colors"
          >
            Get Started
            <ChevronRight size={20} className="ml-2" />
          </Link>
          <a
            href="https://github.com/ui-forge/ui-forge"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 rounded-full font-semibold flex items-center hover:bg-white hover:text-indigo-600 transition-colors"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>
        </div>
      </main>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Featured Components
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-colors flex flex-col items-center"
            >
              {component.icon}
              <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
              <p className="text-gray-300 text-center">
                Customizable {component.name.toLowerCase()} with various styles
                and sizes.
              </p>
            </div>
          ))}
        </div>
      </section>
      <TechStack />
    </div>
  );
};

export default Home;
