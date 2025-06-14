
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainHome = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  const Alumno = {
    redes: {
      instagram: "https://www.instagram.com/guillermojosecarrero/",
      linkedin: "https://www.linkedin.com/in/guillermo-jose-carrero-llovera-80b994202/",
      github: "https://github.com/GuillermoCarrero",
    },
  };

  return (

    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Header/>
        <MainHome/>
        <Footer datos={Alumno}/>
      </div>
    </div>
  );
};

export default MainHome;




  