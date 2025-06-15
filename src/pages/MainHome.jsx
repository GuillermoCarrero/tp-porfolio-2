import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import Header from "../components/Header";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contacts";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import useThemeStore from '../store/themeStore'; 

export const MainHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const Alumno = {
    redes: {
      instagram: "https://www.instagram.com/guillermojosecarrero/",
      linkedin: "https://www.linkedin.com/in/guillermo-jose-carrero-llovera-80b994202/",
      github: "https://github.com/GuillermoCarrero",
    },
  };

  const { darkMode } = useThemeStore(); 

  return (
    <>
    <BrowserRouter>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-colors duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`} 
      >
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer datos={Alumno} />
      </div>
    </BrowserRouter>
    </>
  );
}

export default MainHome;