import Sidebar from "./Sidebar";
import DocumentationContent from "./DocumentationContent";

const Documentation = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <DocumentationContent />
      </div>
    </div>
  );
};

export default Documentation;
