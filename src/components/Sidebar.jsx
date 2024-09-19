import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setActiveComponent }) => {
  const [expandedTech, setExpandedTech] = useState(null);
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from an API when the component mounts using axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://uiforge-sage.vercel.app/api/components"
        );
        setComponents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch components");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Group components by technology
  const technologies = [
    {
      name: "React",
      components: components.filter((component) =>
        component.tech.includes("React")
      ),
    },
    {
      name: "Vue",
      components: components.filter((component) =>
        component.tech.includes("Vue")
      ),
    },
    {
      name: "Angular",
      components: components.filter((component) =>
        component.tech.includes("Angular")
      ),
    },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <aside
      className={`
      fixed top-16 left-0 w-64 bg-secondary text-gray-100 p-4 h-[calc(100vh-4rem)]
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0 overflow-y-auto border-r border-gray-700
    `}
    >
      {technologies.map((tech, index) => (
        <div key={index}>
          <button
            className="w-full text-left p-2 hover:bg-gray-700 rounded transition duration-300"
            onClick={() =>
              setExpandedTech(expandedTech === tech.name ? null : tech.name)
            }
          >
            {tech.name}
            <ChevronRight
              className={`float-right transform transition-transform ${
                expandedTech === tech.name ? "rotate-90" : ""
              }`}
            />
          </button>
          {expandedTech === tech.name && (
            <div>
              {tech.components.map((component, compIndex) => (
                <li
                  key={compIndex}
                  className="px-3 py-2 border-b border-gray-700"
                >
                  <button
                    onClick={() => {
                      setActiveComponent({
                        tech: tech.name,
                        component: component.componentName,
                        images: component.componentImages,
                        description: component.description,
                        code: component.componentCode,
                      });
                      setIsSidebarOpen(false);
                    }}
                  >
                    {component.componentName}
                  </button>
                </li>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Sidebar;
