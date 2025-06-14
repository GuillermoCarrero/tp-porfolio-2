import useThemeStore from '../../store/themeStore'; // Importa el store

export const About = () => {
  const frontendSkills = ["bootstrap", "React", "JavaScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Phyton", "Neo4j", "MySQL"];
  const { darkMode } = useThemeStore(); // Obtiene el estado darkMode del store

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me{" "}
        </h2>
        <div className={`rounded-xl p-8  hover:-translate-y-1 transition-all ${darkMode ? 'border-white/10 border' : 'border-gray-300 border'}`}>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Junior developer searching to expand his experience in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className={`p-6 rounded-xl hover:-translate-y-1 transition-all ${darkMode ? 'border-white/10 border' : 'border-gray-300 border'}`}>
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>
                <strong>Mechanical Technician</strong> - Colegio Salesiano Lorenzo
                Massa (2001-2007)
              </li>
              <li>
                <strong>Mechanical Engineer</strong> - Universidad Tecnologica
                Regional Tucuman (still studying)
              </li>
              <li>
                <strong>Programming Technician</strong> - Universidad
                Tecnologica Regional Tucuman (still studying)
              </li>
            </ul>
          </div>
          <div className={`p-6 rounded-xl  hover:-translate-y-1 transition-all ${darkMode ? 'border-white/10 border' : 'border-gray-300 border'}`}>
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Intern as Junior Analyst - at SCANIA{" "}
                </h4>
                <p>Wrote instructions for warehouse workers.</p>
                <p>Created reports for inventory management.</p>
                <p>Designed automated processes to facilitate work in
                  logistics.</p>
              </div>
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Banknote Counter Maintenance Assistant - for Martin Curia
                </h4>
                <p></p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Automotive Service Assistant - at Alperovich Ford
                </h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;