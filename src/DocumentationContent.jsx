const DocumentationContent = () => {
  return (
    <div className="space-y-12">
      {/* Project Overview */}
      <section id="overview" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p>
          <strong>His Voice</strong> is a mobile application designed to provide
          users with a platform to receive motivational and inspirational
          messages. It aims to empower communities by connecting people with
          positive content that promotes mental well-being.
        </p>
      </section>

      {/* Installation */}
      <section id="installation" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4 underline">
          Installation Guide
        </h2>
        <p>
          Follow the steps below to set up the <strong>His Voice</strong> app on
          your local machine.
        </p>
        <ol className="list-decimal list-inside mt-4">
          <li>
            Clone the repository:{" "}
            <code>git clone https://github.com/your-repo.git</code>
          </li>
          <li>
            Install dependencies: <code>npm install</code>
          </li>
          <li>
            Start the development server: <code>npm start</code>
          </li>
        </ol>
      </section>

      {/* Project Structure */}
      <section id="structure" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Project Structure</h2>
        <p>{"Here's"} a breakdown of the folder structure:</p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>/src</strong> - Main source code
          </li>
          <li>
            <strong>/components</strong> - Reusable UI components
          </li>
          <li>
            <strong>/assets</strong> - Images, fonts, etc.
          </li>
        </ul>
      </section>

      {/* Routing & Navigation */}
      <section id="routing" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Routing & Navigation</h2>
        <p>
          The <strong>His Voice</strong> app uses React Navigation for smooth
          in-app transitions. {"Here's"} how routes are configured:
        </p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-4">
          {`{
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Contact: { screen: ContactScreen },
  }`}
        </pre>
      </section>

      {/* UI Components */}
      <section id="ui" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">UI Components</h2>
        <p>The app uses reusable components like buttons, forms, and modals.</p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Button</strong> - Custom button with Tailwind styles
          </li>
          <li>
            <strong>Modal</strong> - Popup for displaying additional information
          </li>
        </ul>
      </section>

      {/* API Integration */}
      <section id="api" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">API Integration</h2>
        <p>The app fetches motivational quotes from a third-party API:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-4">
          {`fetch("https://api.example.com/quotes")
    .then(response => response.json())
    .then(data => setQuotes(data));`}
        </pre>
      </section>

      {/* Authentication */}
      <section id="auth" className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Authentication</h2>
        <p>The app uses JWT-based authentication for secure access:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mt-4">
          {`{
    "token": "your-jwt-token",
    "user": { "id": 1, "name": "John Doe" }
  }`}
        </pre>
      </section>
    </div>
  );
};

export default DocumentationContent;
