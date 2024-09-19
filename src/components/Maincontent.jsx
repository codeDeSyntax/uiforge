import PropTypes from "prop-types";
import { ChevronLeft } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const MainContent = ({ activeComponent, history, setHistory }) => {
  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
    }
  };

  const currentComponent = history[history.length - 1] || activeComponent;

  return (
    <main className="flex-1 p-6 md:ml-64 overflow-y-auto h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto space-y-8">
        {history.length > 1 && (
          <button
            onClick={goBack}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <ChevronLeft />
            Back
          </button>
        )}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {currentComponent.component}
          </h2>
          <p className="mb-4">
            This is the content for the {currentComponent.component} component
            in {currentComponent.tech}.
          </p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Sample code for ${currentComponent.component}`}
            {currentComponent.code}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {currentComponent.code}
          </SyntaxHighlighter>
        </section>
        {/* images of component */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentComponent.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={currentComponent.component}
              className="rounded-lg"
            />
          ))}
        </section>
      </div>
    </main>
  );
};

MainContent.propTypes = {
  activeComponent: PropTypes.shape({
    tech: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      tech: PropTypes.string.isRequired,
      component: PropTypes.string.isRequired,
    })
  ).isRequired,
  setHistory: PropTypes.func.isRequired,
};

export default MainContent;
