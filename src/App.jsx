// Import necessary components from React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Docs from "./components/Docs";
import Home from "./components/Home";
import Layout from './components/Layout';
// import About from "./components/About";

const App = () => {
  return (
    // Wrap the app in a Router component
    <Router>
      <Routes>
        {/* Define routes and associate them with components */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/docs" element={<Layout><Docs /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
