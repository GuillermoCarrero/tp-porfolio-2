import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import useThemeStore from '../store/themeStore'; 

const Footer = (props) => {

  const { redes } = props.datos;
  const { darkMode } = useThemeStore(); 

  return (
    <footer className={`w-full  backdrop-blur-lg border-t  shadow-lg py-4 ${darkMode ? 'bg-[rgba(10, 10, 10, 0.8)] border-white/10' : 'bg-gray-100 border-gray-300'}`}>
      <div className="max-w-5xl mx-auto px-4 flex justify-center items-center space-x-8">
        <a href={redes.instagram} target="_blank" rel="noreferrer" className={`hover:text-white transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FontAwesomeIcon icon={faInstagram} size="2x" /> {/* Iconos 50% más grandes */}
        </a>
        <a href={redes.linkedin} target="_blank" rel="noreferrer" className={`hover:text-white transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* Iconos 50% más grandes */}
        </a>
        <a href={redes.github} target="_blank" rel="noreferrer" className={`hover:text-white transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Iconos 50% más grandes */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;