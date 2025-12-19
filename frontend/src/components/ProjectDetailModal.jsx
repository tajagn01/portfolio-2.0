import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiJavascript, SiPython } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

// Tech icon mapping
const techIcons = {
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'Next.js': <SiNextdotjs />,
  'TailwindCSS': <SiTailwindcss className="text-[#38BDF8]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
  'Python (AI)': <SiPython className="text-[#3776AB]" />,
  'GSAP': <TbBrandFramerMotion className="text-[#88CE02]" />,
  'Express.js': <SiNodedotjs className="text-[#000000] dark:text-white" />,
  'AI Agents': <span className="text-purple-500">🤖</span>,
  'Clarifai': <span className="text-blue-500">🔍</span>,
};

const ProjectDetailModal = ({ project, isOpen, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border shadow-2xl scrollbar-none
              ${darkMode 
                ? 'bg-gray-900 border-gray-700 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
              }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200
                ${darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
            >
              <FaTimes size={16} />
            </button>

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.name}
                className="h-full w-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
              
              {/* Title Overlay */}
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Links */}
              <div className="flex gap-3 mb-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105
                      ${darkMode 
                        ? 'bg-white text-black hover:bg-gray-100' 
                        : 'bg-black text-white hover:bg-gray-800'
                      }`}
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 border
                      ${darkMode 
                        ? 'border-gray-600 text-white hover:bg-gray-800' 
                        : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  About
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.fullDesc}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                        ${darkMode 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      <span className="size-5">
                        {techIcons[tech] || '⚡'}
                      </span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Key Features
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0
                        ${darkMode ? 'bg-green-400' : 'bg-green-500'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
