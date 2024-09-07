const Sidebar = () => {
  return (
    <div className="w-full md:w-64 h-screen bg-gray-800 text-white fixed md:relative">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Documentation</h2>
        <nav className="mt-8 space-y-4">
          <a href="#overview" className="block hover:text-secondary">
            Project Overview
          </a>
          <a href="#installation" className="block hover:text-secondary">
            Installation
          </a>
          <a href="#structure" className="block hover:text-secondary">
            Project Structure
          </a>
          <a href="#routing" className="block hover:text-secondary">
            Routing & Navigation
          </a>
          <a href="#ui" className="block hover:text-secondary">
            UI Components
          </a>
          <a href="#api" className="block hover:text-secondary">
            API Integration
          </a>
          <a href="#auth" className="block hover:text-secondary">
            Authentication
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
