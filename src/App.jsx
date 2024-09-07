import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Navbar = () => (
  <nav className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
          <img
            className="h-8 w-auto"
            src="/api/placeholder/32/32"
            alt="His Voice Logo"
          />
          <span className="ml-2 text-xl font-bold text-gray-100">
            His Voice
          </span>
        </div>
      </div>
    </div>
  </nav>
);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    "Introduction",
    "Installation",
    "Getting Started",
    "Features",
    "Sermon Management",
    "FAQ",
    "Contact",
   
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () =>
      links.forEach((link) => link.removeEventListener("click", handleScroll));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <div className="flex flex-1 pt-16">
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-20 left-4 z-40 bg-gray-800 text-white p-2 rounded-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`
            fixed md:sticky top-16 left-0 w-64 bg-gray-800 text-gray-100 p-4 h-[calc(100vh-4rem)]
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 overflow-y-auto border-r border-gray-700
          `}
        >
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="block hover:bg-gray-700 hover:text-gray-300 transition duration-300 p-2 rounded border border-gray-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                {section}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Introduction */}
            <section
              id="introduction"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">
                Introduction
              </h2>
              <p>
                <strong>His Voice</strong> is a mobile application designed to
                read, listen and search for Sermons preached by the Prophet{" "}
                <span className="italic font-bold text-blue-400">
                  Robert Lambert Lee
                </span>
                . It provides a local library of sermons both transcribed and
                audio preached by the prophet of God without the need for a
                backend or internet connection.
              </p>
            </section>

            {/* Installation */}
            <section
              id="installation"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">
                Installation Guide
              </h2>
              <p>
                Follow these steps to set up the <strong>His Voice</strong> app
                locally:
              </p>
              <ol className="list-decimal list-inside mt-4">
                <li>
                  Clone the repository:{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded break-words">
                    git clone https://github.com/codeDeSyntax/his-voiceAPK
                  </code>
                </li>
                <li>
                  Install dependencies:{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    npm install
                  </code>
                </li>
                <li>
                  Run the app:{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    npm start
                  </code>
                </li>
              </ol>
            </section>

            {/* Getting Started */}
            <section
              id="getting-started"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">
                Getting Started
              </h2>
              <p>
                Once the app is running, users can browse, play, and manage
                sermons. No internet connection is required as all content is
                stored locally in the application.
              </p>
            </section>

            {/* Features */}
            <section
              id="features"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">
                Features
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Offline Access: Access all sermons locally without internet.
                </li>
                <li>
                  Simple Navigation: Easy-to-use interface to browse sermon
                  categories.
                </li>
                {/* <li>Bookmarking: Save favorite sermons for quick access.</li> */}
                <li>
                  Search Functionality: Find sermons by title, year, or quote.
                </li>
              </ul>
            </section>

            {/* Sermon Management */}
            <section
              id="sermon-management"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">
                Sermon Management
              </h2>
              <p>
                Recently opened sermons are stored in local storage for quick
                access. Users can also add and delete sermons from recents.{" "}
                <span className="font-extrabold">Note:</span>
                recents can accommodate only 10 sermons at a time.
              </p>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {`// Example for sermon management
const sermons = [
  { id: 1, title: 'Sermon 1', speaker: 'Speaker A' },
  { id: 2, title: 'Sermon 2', speaker: 'Speaker B' },
];

// Add new sermon
const addSermon = (newSermon) => {
  sermons.push(newSermon);
};

// Delete a sermon
const deleteSermon = (id) => {
  const index = sermons.findIndex(sermon => sermon.id === id);
  if (index !== -1) {
    sermons.splice(index, 1);
  }
};`}
              </SyntaxHighlighter>
            </section>

            {/* FAQ */}
            <section
              id="faq"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">FAQ</h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Is an internet connection required?</strong> No, all
                  content is local.
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="bg-gray-800 p-6 shadow-md rounded-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-300">Contact</h2>
              <p>
                For any issues or inquiries, please contact us at{" "}
                <strong className="text-blue-400">minwidth49@gmail.com</strong>.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
