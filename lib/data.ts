import { head } from "framer-motion/client";

export interface Project {
    title: string;
    slug: string;
    desc: string;
    content: string;
    tags: string[];
    link: string;
    github: string;
    image: string;
    status: string;
    isBuilding: boolean;
    details?: {
        overview: string;
        features: string[];
        motivation: string;
        techStack: {
            name: string;
            desc: string;
        }[];
        impact: string;
    };
}

export const projects: Project[] = [
    {
        title: "Odoo HR Management",
        slug: "odoo-hr-management",
        desc: "Comprehensive HR management system featuring employee tracking and payroll.",
        content: "Enterprise-grade HR module built on Odoo ERP for employee lifecycle management.",
        tags: [
            "Python",
            "Odoo Framework",
            "PostgreSQL",
            "XML Views",
            "ORM",
            "RBAC",
            "ERP Modules"
        ],
        link: "https://github.com/tajagn01/hr_management_odoo",
        github: "https://github.com/tajagn01/hr_management_odoo",
        image: "/projects/odoo_hr.png",
        status: "Building",
        isBuilding: true
    },

    {
        title: "RankArena",
        slug: "rank-arena",
        desc: "Discover Your College Rank - A platform for students to track and compare academic performance.",
        content: "RankArena is a comprehensive platform designed for students to track their academic performance and compare their rankings with peers.",
        tags: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Chart.js",
            "JWT Authentication"
        ],
        link: "https://rank-arena.vercel.app",
        github: "https://github.com/tajagn01/RankArena",
        image: "/projects/rank_arena.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "Velorent-3D",
        slug: "velorent-3d",
        desc: "Interactive 3D bicycle rental showcase utilizing modern WebGL technologies.",
        content: "An immersive 3D product showcase demonstrating modern WebGL-powered UI experiences.",
        tags: [
            "JavaScript",
            "Three.js",
            "WebGL",
            "GSAP",
            "Framer Motion",
            "Tailwind CSS",
            "Vite"
        ],
        link: "https://velorent-3-d.vercel.app",
        github: "https://github.com/tajagn01/Velorent-3D",
        image: "/projects/velorent.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "Second Brain",
        slug: "second-brain",
        desc: "Capture ideas, organize knowledge, and unlock insights with AI-powered intelligence.",
        content: "AI-powered knowledge management system that connects ideas using semantic intelligence.",
        tags: [
            "Next.js",
            "TypeScript",
            "OpenAI API",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Prisma ORM"
        ],
        link: "https://secondbrain001.netlify.app",
        github: "https://github.com/tajagn01/Second-Brain",
        image: "/projects/second brain.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "AI Visual Search",
        slug: "ai-visual-search",
        desc: "Next-gen visual search engine powered by artificial intelligence.",
        content: "Search using images instead of text with deep learning–based visual similarity matching.",
        tags: [
            "Python",
            "Computer Vision",
            "PyTorch",
            "CNN Models",
            "Flask",
            "NumPy",
            "OpenCV"
        ],
        link: "https://aisearch01.netlify.app",
        github: "https://github.com/tajagn01/AI-Visual-Search",
        image: "/projects/ai_search.png",
        status: "Building",
        isBuilding: true
    },

    {
        title: "Blog Website",
        slug: "blog-website",
        desc: "A clean, modern blog platform built with semantic HTML and CSS.",
        content: "Lightweight blogging platform focused on speed, accessibility, and readability.",
        tags: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
            "SEO Optimization",
            "Accessibility",
            "Netlify"
        ],
        link: "https://github.com/tajagn01/blog-website",
        github: "https://github.com/tajagn01/blog-website",
        image: "/projects/blog.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "KrishiMitra",
        slug: "krishimitra",
        desc: "Smart agricultural app empowering farmers with real-time crop insights.",
        content: "Mobile-first agriculture companion delivering weather, crop, and market insights.",
        tags: [
            "React Native",
            "Node.js API",
            "REST APIs",
            "TensorFlow Lite",
            "Firebase",
            "Mobile UX",
            "Multilingual Support"
        ],
        link: "https://github.com/tajagn01/KrishiMitra",
        github: "https://github.com/tajagn01/KrishiMitra",
        image: "/projects/krishimirta.png",
        status: "Building",
        isBuilding: true
    },

    {
        title: "Monster Energy Website",
        slug: "monster-energy-website",
        desc: "Cinematic scroll experience showcasing frontend animation techniques.",
        content: "Scroll-driven brand storytelling using high-end frontend animation techniques.",
        tags: [
            "JavaScript",
            "GSAP",
            "ScrollTrigger",
            "CSS Animations",
            "Tailwind CSS",
            "Framer Motion",
            "Parallax Effects"
        ],
        link: "https://github.com/tajagn01/Monster-Energy-drink-webiste",
        github: "https://github.com/tajagn01/Monster-Energy-drink-webiste",
        image: "/projects/monster_dp.png",
        status: "Building",
        isBuilding: false
    },

    {
        title: "SaaS Frontend",
        slug: "saas-frontend",
        desc: "Modern SaaS landing page with high-conversion design.",
        content: "High-performance SaaS landing page focused on conversions and UX.",
        tags: [
            "React",
            "Tailwind CSS",
            "UI/UX Design",
            "Responsive Design",
            "Component Architecture",
            "Performance Optimization",
            "Vercel"
        ],
        link: "https://github.com/tajagn01/saas-website-frontend",
        github: "https://github.com/tajagn01/saas-website-frontend",
        image: "/projects/saas_website.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "Real CS",
        slug: "real-cs",
        desc: "Real-time SaaS platform with advanced frontend architecture.",
        content: "Real-time customer success dashboard built for speed and scalability.",
        tags: [
            "React",
            "Socket.io",
            "WebSockets",
            "Redis",
            "Dashboard UI",
            "State Management",
            "SaaS Architecture"
        ],
        link: "https://github.com/tajagn01/Real_CS",
        github: "https://github.com/tajagn01/Real_CS",
        image: "/projects/real_cs.png",
        status: "Building",
        isBuilding: false
    },

    {
        title: "Gujarat Flavors",
        slug: "gujarat-flavors",
        desc: "Authentic Taste of Gujarat with traditional recipes and modern presentation.",
        content: "Restaurant landing page showcasing Gujarati cuisine with a modern UI.",
        tags: [
            "React",
            "CSS3",
            "Responsive Design",
            "UI Components",
            "Netlify",
            "Web Performance",
            "Branding"
        ],
        link: "https://gujaratflaver01.netlify.app/",
        github: "#",
        image: "/projects/restorunt_frontend.png",
        status: "Live",
        isBuilding: false
    },

    {
        title: "CodeCrafter",
        slug: "codecrafter",
        desc: "A modern web application built with React and Vite.",
        content: "Personal portfolio showcasing projects and frontend expertise.",
        tags: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Responsive Design",
            "Component Architecture",
            "Netlify"
        ],
        link: "https://codecrafter01.netlify.app/",
        github: "https://github.com/tajagn01/portfolio",
        image: "/projects/protfolio_website.png",
        status: "Live",
        isBuilding: false
    },
];
