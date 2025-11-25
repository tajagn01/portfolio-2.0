import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // <- IMPORTED
import { FiTwitter, FiLinkedin, FiMail, FiMoon, FiSun } from 'react-icons/fi';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiBun, SiThreedotjs, SiReact, SiMongodb, SiJavascript, SiPostman } from 'react-icons/si';
import { BiFile } from 'react-icons/bi';
import avatarImg from '../assets/imag.jpg';
import resume from '../assets/Tajagn.pdf';
import realcs from '../assets/realcs.png';
import searchify from '../assets/searchify.png';  
import secondBrainImg from '../assets/secondBrain.png';
import velorant from '../assets/velorent.png';
import GitHubContribProgress from "../components/GitHubContribProgress";
// Reusable SkillTag component
const SkillTag = ({ icon, name }) => (
  <div className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 border border-gray-600 dark:border-gray-400 rounded-lg px-3 py-1.5 text-sm text-gray-200 dark:text-gray-800">
    {icon}
    {name}
  </div>
);

const projectsData = [
  {
    name: "Velorent — Valorant Remastered",
    image: velorant,
    shortDesc: "A Valorant-inspired landing experience with rich GSAP animations and interactions.",
    fullDesc: `Valorant Remastered (Velorent) is a polished landing-site recreation inspired by an Awwwards entry. Built to learn advanced GSAP animation techniques and modern frontend patterns. Timeline: 1 week. Role: Frontend. Team: Solo. Status: Completed.`,
    technologies: ["TypeScript", "React", "GSAP"],
    keyFeatures: [
      "High-performance GSAP animations",
      "Awwwards-style layout and interactions",
      "Responsive, retina-ready imagery",
      "Experimentation with 3D transforms and performance tuning"
    ],
    github: "https://github.com/tajagn01/Velorent-3D",
    live: "https://velorent-3-d.vercel.app/"
  },
  {
    name: "Second Brain",
    image: secondBrainImg,
    shortDesc: "Intelligent link management platform with AI-powered search and a browser extension for saving links.",
    fullDesc: `Second Brain is an intelligent link management platform that saves and organizes links from social platforms. It includes a browser extension for one-click saving and AI-powered vector search for quick retrieval.`,
    technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "AI Agents"],
    keyFeatures: [
      "Automatic data fetching from X and YouTube",
      "AI-powered vector search with embeddings",
      "Browser extension for one-click saving",
      "Smart link categorization and organization"
    ],
    github: "https://github.com/tajagn01/second-brain",
    live: "https://secondbrain001.netlify.app/"
  },
  {
    name: "realcs",
    image: realcs,
    shortDesc: "A learning platform focused on coding and developer education.",
    fullDesc: `RealCS is a learning platform focused on teaching coding and developer skills through interactive lessons, projects, and assessments. Built with a modern React stack to provide a smooth learning experience.`,
    technologies: ["React", "Node.js", "JavaScript"],
    keyFeatures: [
      "Interactive lessons and exercises",
      "Project-based curriculum",
      "Progress tracking and assessments"
    ],
    github: "https://github.com/tajagn01/Real_CS",
    live: "https://realcs.netlify.app/"
  },
  {
    name: "AI Visual Search (Searchify)",
    image: searchify,
    shortDesc: "AI-powered visual & multimodal search (text, image, voice) with a modern frontend and backend microservices.",
    fullDesc: `AI Visual Search is a full-stack project offering text, image, and voice search. Image search uses Clarifai to detect likely objects and then queries product/search APIs. Frontend includes animated headings, category UI, and responsive product grids.`,
    technologies: ["React", "Node.js", "Python (AI)", "Clarifai"],
    keyFeatures: [
      "Text, image & voice search",
      "Clarifai-powered image keyword extraction",
      "Combined API product search with INR conversion",
      "Animated hero and responsive product cards"
    ],
    github: "https://github.com/tajagn01/ai-power-visual-search-",
    live: "https://aisearch01.netlify.app/"
  }
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [animating, setAnimating] = useState(false);

  // Sync theme with <html> tag (Tailwind dark mode)
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => setDarkMode(!darkMode), 450);
    setTimeout(() => setAnimating(false), 900); // match animation duration
  };

  const [hovered, setHovered] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    if (!isMobile) {
      setHovered(index);
    }
  };

  const handleCardClick = (index) => {
    if (isMobile) {
      setClickedCard(clickedCard === index ? null : index);
    }
  };

  return (
    <div className={`relative min-h-screen flex flex-col items-center p-5 sm:p-10 font-['Inter',_sans-serif] transition-colors duration-500
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

      {/* Circle + Blur Animation */}
      {animating && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Circle (under blur) */}
          <div
            className={`absolute top-0 right-0 w-full h-full animate-circleExpand ${darkMode ? "bg-black" : "bg-white"}`}
            style={{ zIndex: 10 }}
          />
          {/* Blur overlay on top */}
          <div
            className="absolute inset-0 backdrop-blur-md"
            style={{ zIndex: 20 }}
          />
        </div>
      )}

      <style>{`
        @keyframes circleExpand {
          0% { clip-path: circle(0% at 100% 0%); }
          100% { clip-path: circle(200% at 100% 0%); }
        }
        .animate-circleExpand {
          animation: circleExpand 0.9s ease-in-out forwards;
        }
      `}</style>

      {/* Header */}
      <header className={`w-full max-w-3xl fixed top-0 z-20 rounded-md backdrop-blur-sm p-3 sm:p-5 flex justify-between items-center transition-colors duration-500
        ${darkMode ? "bg-black/70 text-gray-300" : "bg-white/70 text-gray-700"}`}>
        <div className="flex items-center gap-3">
          <img src={avatarImg} alt="small avatar" width={40} height={40} className="rounded-sm" />
          <nav className="hidden sm:flex items-center gap-4">
            {[
              { name: "Work", href: "#work" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" }
            ].map(item => (
              <a key={item.name} href={item.href} className="relative hover:text-current transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <button onClick={toggleTheme} className="text-xl px-3">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      {/* Hero */}
      <main id="work" className="flex-grow flex flex-col items-start w-full max-w-3xl mt-[5rem] sm:mt-[4rem]">
        <div className="flex items-center justify-start w-full">
          <img
            src={avatarImg}
            alt="Tajagn's avatar"
            className="rounded-full w-24 h-24 sm:w-28 sm:h-28 m-5 sm:m-10"
          />
        </div>

        <h1 className="text-4xl sm:text-3xl font-bold mb-4">
          Hi, I'm Tajagn - <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>A Full Stack Web Developer</span>
        </h1>

        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-lg leading-loose`}>
          I build interactive web apps using{" "}
          <span className="inline-flex flex-wrap gap-2">
            <SkillTag icon={<SiTypescript size={18} color="#3178C6" />} name="TypeScript" />
            <SkillTag icon={<SiReact size={18} color="#61DAFB" />} name="React" />
            <SkillTag icon={<SiNextdotjs size={18} color={darkMode ? "#FFFFFF" : "#111111"} />} name="Next.js" />
            {/* <SkillTag icon={<SiBun size={18} color={darkMode ? "#f9d71c" : "#000000"} />} name="Bun" /> */}
          </span>
          <br />
          <span className="mt-4 block">
            and <span className="inline-flex flex-wrap gap-2">
              <SkillTag icon={<SiPostgresql size={18} color="#336791" />} name="PostgreSQL" />
            </span>
            . With a focus on <span className="font-semibold">UI design</span>. Enthusiastic about{" "}
            <span className="inline-flex flex-wrap gap-2">
              <SkillTag icon={<SiThreedotjs size={18} color="#FF9900" />} name="Three.js" />
            </span>
            , driven by a keen eye for design.
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 border px-4 py-2 rounded-lg transition-colors 
              ${darkMode ? "border-gray-500 hover:bg-gray-800" : "border-gray-400 hover:bg-gray-100"}`}
          >
            <BiFile /> Resume / CV
          </a>
          <a
            href="mailto:youremail@provider.com"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors 
              ${darkMode ? "bg-gray-200 text-black hover:bg-white" : "bg-black text-white hover:bg-gray-900"}`}
          >
            Get in touch
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-3xl mt-10 flex flex-col items-start gap-6">
        <div className="flex flex-wrap items-center gap-6 text-2xl">
          {[
            { icon: <FiTwitter />, label: "Twitter", href: "https://x.com/Garala_Tajagn" },
            { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/tajagn-garala-06ba45265/" },
            { icon: <FiMail />, label: "Email", href: "mailto:trgarala@gmail.com" },
            { icon: <FaGithub />, label: "GitHub", href: "https://github.com/tajagn01", target: "_blank" }
          ].map(({ icon, label, href, target }) => (
            <a key={label} href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className="relative group">
              {icon}
              <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg
                ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                {label}
              </span>
            </a>
          ))}
        </div>
      </footer>

      {/* About Section */}
      <section id="about" className='flex flex-col items-start w-full max-w-3xl mt-10'>
        <h5 className={`font-bold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>About</h5>
        <h2 className="text-2xl font-bold mb-6">Me</h2>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10">
          <div className="flex-shrink-0">
            <img src={avatarImg} alt="Tajagn's avatar" className="rounded-2xl w-64 h-64 md:w-64 md:h-64" />
          </div>

          <div className={`flex-1 text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">Garala Tajagn</h1>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-6`}>
              I'm a Full Stack Developer passionate about building web apps, contributing to open source, solving DSA challenges, and exploring AI and emerging tech trends.
            </p>
            <h5 className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-3 font-semibold`}>Skills</h5>

            <div className="flex flex-wrap items-center gap-4">
              {[
                { icon: <SiReact size={30} color="#61DAFB" />, label: "React" },
                { icon: <SiMongodb size={30} color="#47A248" />, label: "MongoDB" },
                { icon: <SiJavascript size={30} color="#F7DF1E" />, label: "JavaScript" },
                { icon: <SiTypescript size={30} color="#3178C6" />, label: "TypeScript" },
                { icon: <SiPostman size={30} color="#FF6C37" />, label: "Postman" },
                { icon: <SiNextdotjs size={30} color={darkMode ? "#FFFFFF" : "#111111"} />, label: "Next.js" },
                // { icon: <SiBun size={30} color={darkMode ? "#f9d71c" : "#000000"} />, label: "Bun" },
                { icon: <SiPostgresql size={30} color="#336791" />, label: "PL/pgSQL" }
              ].map(({ icon, label }) => (
                <div key={label} className="relative group cursor-pointer">
                  {icon}
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg
                    ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className='flex flex-col items-center justify-center min-h-screen w-full mt-20'>
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-10 flex flex-col items-center justify-center h-full">
          <h2 className={`text-3xl font-bold mb-10 ${darkMode ? "text-white" : "text-black"}`}>Projects</h2>

          <div className="relative overflow-visible flex items-center justify-center">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isMobile ? 'auto-rows-auto' : ''}`}>
          {projectsData.map((project, index) => {
            const isExpanded = isMobile ? clickedCard === index : hovered === index;
            
            return (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setHovered(index)}
              onMouseLeave={() => !isMobile && setHovered(null)}
              onClick={() => handleCardClick(index)}
              className={`relative rounded-xl p-4 border cursor-pointer group transition-all duration-300
                ${isExpanded && isMobile ? 'row-span-2' : ''}
                ${darkMode 
                  ? "bg-black border-gray-600 hover:border-gray-500" 
                  : "bg-white border-gray-200 hover:border-gray-400"
                }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                  {project.name}
                </h3>
                <div className={`flex gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-md transition-all duration-200 hover:scale-110
                      ${darkMode ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-100 hover:text-black"}`}
                  >
                    <FaGithub size={16} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-md transition-all duration-200 hover:scale-110
                      ${darkMode ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-100 hover:text-black"}`}
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-3 bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Description */}
              <p className={`text-xs leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {project.shortDesc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`px-2 py-0.5 text-xs rounded-md font-medium ${darkMode ? "bg-gray-800 text-gray-300 border border-gray-600" : "bg-gray-100 text-gray-700 border border-gray-300"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Mobile expanded content or desktop hover card */}
              {isExpanded && !isMobile && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    scale: 0.9
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: index % 2 === 0 ? -20 : 20,
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    scale: 0.9
                  }}
                  transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 300,
                    duration: 0.3 
                  }}
                  className={`absolute top-0 w-85 h-auto p-6 rounded-2xl shadow-2xl z-50 border-2 pointer-events-auto ${darkMode ? "bg-black text-white border-gray-600" : "bg-white text-black border-gray-200"}`}
                  style={{
                    left: index % 2 === 0 ? '-310px' : 'auto',
                    right: index % 2 === 1 ? '-310px' : 'auto',
                  }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                      {project.name}
                    </h3>
                    <div className={`flex gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${darkMode ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-100 hover:text-black"}`}
                      >
                        <FaGithub size={18} />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${darkMode ? "hover:bg-gray-800 hover:text-white" : "hover:bg-gray-100 hover:text-black"}`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Project image */}
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-40 object-cover"
                    />
                  </div>

                  {/* Full description */}
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.fullDesc}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full font-medium ${darkMode ? "bg-gray-800 text-gray-300 border border-gray-600" : "bg-gray-100 text-gray-700 border border-gray-300"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      Key Features
                    </h4>
                    <ul className={`text-xs space-y-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1 h-1 rounded-full bg-current mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${darkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"}`}
                    >
                      <FaGithub size={14} />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 border ${darkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300 text-black hover:bg-gray-100"}`}
                    >
                      <FaExternalLinkAlt size={12} />
                      View Demo
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Mobile expanded content within card */}
              {isExpanded && isMobile && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 border-t pt-4 border-gray-600"
                >
                  {/* Full description */}
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {project.fullDesc}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      Key Features
                    </h4>
                    <ul className={`text-xs space-y-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="w-1 h-1 rounded-full bg-current mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200
                        ${darkMode ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"}`}
                    >
                      <FaGithub size={14} />
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 border
                        ${darkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300 text-black hover:bg-gray-100"}`}
                    >
                      <FaExternalLinkAlt size={12} />
                      View Demo
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          );
          })}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <div className="w-full flex justify-center mt-10 mb-10">
        <GitHubContribProgress username="tajagn01" source="api" />
      </div>


      {/* Quote & Footer Section */}
      <section className={`w-full min-h-screen flex flex-col items-center justify-center py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="w-full max-w-4xl mx-auto px-5 sm:px-10 flex-grow flex items-center justify-center">
          <QuoteBox darkMode={darkMode} />
        </div>
        
        {/* Footer integrated in same section */}
        <div className="w-full text-center mt-20">
          <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className="font-normal">Design & Developed by</span>{" "}
            <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Tajagn</span>
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>© 2025. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

// Quote Box Component with Daily Changing Quotes
const QuoteBox = ({ darkMode }) => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

  // Array of backup quotes in case API fails
  const backupQuotes = [
    { text: "I'll take a potato chip... AND EAT IT!", author: "Light Yagami, Death Note" },
    { text: "The world is cruel, but also beautiful.", author: "Mikasa Ackerman, Attack on Titan" },
    { text: "It's a terrible day for rain.", author: "Roy Mustang, Fullmetal Alchemist" },
    { text: "I am not alone. I can hear them... I can hear everyone's voices... I can sense everyone's feelings...", author: "Naruto Uzumaki" },
    { text: "Hard work is what makes dreams come true.", author: "Rock Lee, Naruto" },
    { text: "The only thing we're allowed to believe is that we won't regret the choice we made.", author: "Levi Ackerman, Attack on Titan" },
    { text: "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!", author: "Monkey D. Luffy, One Piece" },
  ];

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        
        // Get today's date as seed for consistent daily quote
        const today = new Date().toDateString();
        const dateHash = today.split('').reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a;
        }, 0);
        
        // Use date hash to select quote consistently for the day
        const quoteIndex = Math.abs(dateHash) % backupQuotes.length;
        const selectedQuote = backupQuotes[quoteIndex];
        
        // Try to fetch from API, fallback to selected quote
        try {
          const response = await fetch('https://api.quotable.io/random?minLength=50&maxLength=150');
          if (response.ok) {
            const data = await response.json();
            setQuote({ text: data.content, author: data.author });
          } else {
            setQuote(selectedQuote);
          }
        } catch {
          setQuote(selectedQuote);
        }
      } catch (error) {
        // Fallback to backup quote
        const today = new Date().toDateString();
        const dateHash = today.split('').reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a;
        }, 0);
        const quoteIndex = Math.abs(dateHash) % backupQuotes.length;
        setQuote(backupQuotes[quoteIndex]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className={`relative rounded-2xl border p-8 sm:p-12 md:p-16 max-w-5xl mx-auto ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
        <div className="flex items-center justify-center">
          <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${darkMode ? 'border-gray-400' : 'border-gray-600'}`}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-2xl border p-6 sm:p-8 md:p-10 max-w-5xl mx-auto ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
      {/* Large Quote Marks */}
      <div className={`absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 text-4xl sm:text-6xl md:text-8xl font-serif leading-none select-none ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
        "
      </div>
      
      {/* Quote Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12">
        <blockquote className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal italic leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {quote.text}
        </blockquote>
        
        <cite className={`text-base sm:text-lg md:text-xl font-normal not-italic block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          — {quote.author}
        </cite>
      </div>

      {/* Skull Icon (matching the image) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8">
        <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H9C7.9 1 7 1.9 7 3V7H3V9H7V11H3V13H7V15H3V17H7V21H9V17H15V21H17V17H21V15H17V13H21V11H17V9H21Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

