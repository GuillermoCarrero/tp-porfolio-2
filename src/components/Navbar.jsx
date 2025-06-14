import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useThemeStore from '../store/themeStore'; // Importa el store

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { darkMode, toggleDarkMode } = useThemeStore(); // Obtiene el estado y la función del store

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-gray ">
            {" "}Carrero <span className="text-blue-500">.tech</span>{" "}
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Home{" "}
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              {" "}
              About{" "}
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Projects{" "}
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              {" "}
              Contact{" "}
            </Link>
            {/* Botón Toggle */}
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;