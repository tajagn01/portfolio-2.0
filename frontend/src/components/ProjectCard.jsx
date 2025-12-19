import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaArrowRight } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiJavascript, SiPython, SiVercel } from 'react-icons/si';
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
  'Vercel': <SiVercel />,
};

const ProjectCard = ({ project, darkMode, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group h-full w-full overflow-hidden rounded-xl border transition-all duration-300 flex flex-col 
        ${darkMode 
          ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
          : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with Play Button Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay with Play Button */}
        <div 
          className={`absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 transition-opacity duration-200
            ${isHovered ? 'opacity-100 backdrop-blur-[2px]' : 'opacity-0'}`}
          onClick={onViewDetails}
        >
          <button className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200">
            <FaPlay className="text-white text-xl ml-1" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="px-5 py-4 flex-1 flex flex-col overflow-hidden">
        {/* Title and Links Row */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 
            className={`text-lg font-semibold leading-tight transition-colors duration-200 cursor-pointer
              ${darkMode 
                ? 'text-white group-hover:text-blue-400' 
                : 'text-gray-900 group-hover:text-blue-600'
              }`}
            onClick={onViewDetails}
          >
            {project.name}
          </h3>
          
          <div className="flex items-center gap-2">
            {project.live && (
              <a 
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex size-7 items-center justify-center rounded-md transition-colors duration-200
                  ${darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                title="Live Demo"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex size-7 items-center justify-center rounded-md transition-colors duration-200
                  ${darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                title="View Source"
              >
                <FaGithub size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm line-clamp-3 mb-4 flex-1
          ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          {project.shortDesc}
        </p>

        {/* Technologies Section */}
        <div className="mb-4">
          <h4 className={`text-xs font-medium mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <div 
                key={index}
                className="size-6 hover:scale-110 cursor-pointer transition-transform duration-200"
                title={tech}
              >
                {techIcons[tech] || (
                  <span className={`text-xs px-1.5 py-0.5 rounded ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {tech.charAt(0)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className={`px-5 py-4 flex items-center justify-between border-t
        ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}
      >
        {/* Status Badge */}
        <div className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs
          ${darkMode 
            ? 'border border-green-800 bg-green-500/10 text-green-400' 
            : 'border border-green-300 bg-green-50 text-green-700'
          }`}
        >
          <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Live</span>
        </div>

        {/* View Details Link */}
        <button 
          onClick={onViewDetails}
          className={`flex items-center gap-2 text-sm transition-colors duration-200 hover:underline underline-offset-4
            ${darkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-500 hover:text-gray-900'
            }`}
        >
          View Details
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
