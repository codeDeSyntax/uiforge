/* eslint-disable no-unused-vars */
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggleMenu(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <nav
      className={`fixed top-0 w-full flex justify-center flex-col shadow-md z-30 bg-primary`}
    >
      <div className="w-full py-2 flex items-center justify-between px-4 lg:px-12">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-[40px] w-[60px]" />
          <p className="font-bold tracking-widest font-serif ml-2 text-white">
            Ui forge
          </p>
        </div>
        <div className="hidden md:flex gap-8 items-center  font-body font-medium text-white">
          <a href="#" className="cursor-pointer">
            Documentation
          </a>
          <Link to="/" className="cursor-pointer">
            Examples
          </Link>
        </div>

        <div className="cursor-pointer md:hidden" onClick={handleToggle}>
          {toggleMenu ? (
            <FaTimes className="transition-transform transform rotate-360 duration-300 text-white" />
          ) : (
            <FaBars className="transition-transform transform rotate-360 duration-300 text-white" />
          )}
        </div>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden bg-[rgba(0,0,0,0.5)] z-20 transition-all duration-300 ease-in-out overflow-hidden rounded-b-[1rem] ${
          toggleMenu ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center p-2 justify-start text-white">
          <li className="border-gray-700 py-2 px-3 hover:text-gray-500 w-full  border-gray border-b">
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li className="border-gray-700 py-2 px-3 hover:text-gray-500 w-full ">
            <Link to="/ocs" onClick={handleToggle}>
              Docs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
