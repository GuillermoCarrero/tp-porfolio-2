import React from 'react';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"> 
       
        <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl shadow-md border border-white/10 hover:-translate-y-1 transition-all">
          <a
            href="/imagenguillermo.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full overflow-hidden mx-auto md:w-72 md:h-72"
          >
            <img
              src="/imagenguillermo.jpg"
              alt="Guillermo"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        
        <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl shadow-md border border-white/10 hover:-translate-y-1 transition-all">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Guillermo
          </h1>
          <p className="text-gray-400 text-lg">
            I am 35 years old student pursuing a degree in Programming and
            Mechanical Engineering at UTN - FRT, aiming to be a Full Stack developer.
            I'm currently in my second year. In my free time, I practice
            programming. My goal is to build solutions that offer both exceptional
            performance and a delightful user experience.
          </p>
        </div>
      </div>
    </section>
  );
};