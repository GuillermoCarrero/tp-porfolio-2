import useThemeStore from '../../store/themeStore';
import { Link } from 'react-router-dom'; // Importa el componente Link

export const Projects = () => {
  const { darkMode } = useThemeStore();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px,8px_rgba(59,130,246,0.2)] transition-all ${darkMode ? 'border-white/10 border' : 'border-gray-300 border'}`}>
            <h3 className="text-xl font-bold mb-2">Proyect 1</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-3`}>
              About project 1.
            </p>
            <div>
              {["bootstrap", "React", "JavaScript", "TailwindCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project ➡️
              </a>
            </div>
          </div>

          <div className={`p-6 rounded-xl hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px,8px_rgba(59,130,246,0.2)] transition-all ${darkMode ? 'border-white/10 border' : 'border-gray-300 border'}`}>
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-3`}>
              My porfolio.
            </p>
            <div>
              {["bootstrap", "React", "JavaScript", "TailwindCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              
              <Link to="/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project Portfolio ➡️
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;