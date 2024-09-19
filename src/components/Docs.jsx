import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Maincontent";
import { Menu, X } from "lucide-react";

const Docs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState({
    tech: "React",
    component: "Button",
  });
  const [history, setHistory] = useState([
    { tech: "React", component: "Button" },
  ]);

  useEffect(() => {
    if (activeComponent !== history[history.length - 1]) {
      setHistory([...history, activeComponent]);
    }
  }, [activeComponent]);

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <div className="flex flex-1 pt-16">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-20 left-4 z-40 bg-gray-800 text-white p-2 rounded-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveComponent={setActiveComponent}
        />

        <MainContent
          activeComponent={activeComponent}
          history={history}
          setHistory={setHistory}
        />
      </div>
    </div>
  );
};

export default Docs;
