// create a custom layout
import PropTypes from "prop-types";
import Navbar from "./Navbar";
// import Footer from './Footer';

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
