import { head } from "framer-motion/client";

export interface TechStackItem {
    name: string;
    useCase: string;
}

export interface Project {
    title: string;
    slug: string;
    desc: string;
    content: string;
    tags: string[];
    techStack: TechStackItem[];
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
        title: "HR Management",
        slug: "hr-management",
        desc: "Comprehensive HR management system featuring employee tracking and payroll.",
        content: "Enterprise-grade HR module built on  ERP for employee lifecycle management.",
        tags: [
            "Next.js 16 (App Router)",
            "PostgreSQL (Neon)",
            "Prisma ORM",
            "NextAuth.js v5",
            "Shadcn/UI"
        ],
        techStack: [
            { name: "Next.js 16 (App Router)", useCase: "Core framework for server-side rendering and routing" },
            { name: "PostgreSQL (Neon)", useCase: "Scalable relational database for structured employee data" },
            { name: "Prisma ORM", useCase: "Type-safe database interactions and schema management" },
            { name: "NextAuth.js v5", useCase: "Secure role-based authentication and session management" },
            { name: "Shadcn/UI", useCase: "Accessible and customizable component library for the UI" }
        ],
        link: "https://dayflow-rust.vercel.app",
        github: "https://github.com/tajagn01/hr_management_odoo",
        image: "/projects/hr_managemant_2.png",
        status: "Building",
        isBuilding: true
    },

    {
        title: "RankArena",
        slug: "rank-arena",
        desc: "Discover Your College Rank - A platform for students to track and compare academic performance.",
        content: "RankArena is a comprehensive platform designed for students to track their academic performance and compare their rankings with peers.",
        tags: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "Chart.js"
        ],
        techStack: [
            { name: "MongoDB", useCase: "NoSQL database for flexible user capability storage" },
            { name: "Express.js", useCase: "Backend API framework for handling ranking logic" },
            { name: "React", useCase: "Dynamic frontend for real-time leaderboards" },
            { name: "Node.js", useCase: "Runtime environment for server-side logic" },
            { name: "Chart.js", useCase: "Visualizing student performance trends" }
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
            "Three.js",
            "GSAP",
            "WebGL",
            "Framer Motion",
            "Vite"
        ],
        techStack: [
            { name: "Three.js", useCase: "Rendering interactive 3D models in the browser" },
            { name: "GSAP", useCase: "High-performance animations and timeline control" },
            { name: "WebGL", useCase: "Low-level graphics API for hardware-accelerated rendering" },
            { name: "Framer Motion", useCase: "Fluid layout transitions and UI animations" },
            { name: "Vite", useCase: "Next-generation frontend tooling for fast builds" }
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
            "OpenAI API",
            "Next.js",
            "PostgreSQL",
            "Prisma",
            "Vector Database"
        ],
        techStack: [
            { name: "OpenAI API", useCase: "Generating semantic embeddings and intelligent insights" },
            { name: "Next.js", useCase: "Full-stack framework for app structure and API routes" },
            { name: "PostgreSQL", useCase: "Robust storage for user data and content" },
            { name: "Prisma", useCase: "ORM for safe and easy database queries" },
            { name: "Vector Database", useCase: "Storing semantic embeddings for similarity search" }
        ],
        link: "https://secondbrain001.netlify.app",
        github: "https://github.com/tajagn01/Second-Brain",
        image: "/projects/second brain.png",
        status: "Live",
        isBuilding: false
    },
    {
        title: "LuxeState",
        slug: "luxe-state",
        desc: "Premium real estate platform with immersive animations.",
        content: "Luxury real estate application built for visual impact and performance, featuring smooth page transitions and interactive property showcases.",
        tags: [
            "React",
            "Vite",
            "TailwindCSS",
            "Framer Motion",
            "Radix UI"
        ],
        techStack: [
            { name: "React", useCase: "Component-based UI architecture for modular development" },
            { name: "Vite", useCase: "Next-generation frontend tooling for ultra-fast build times" },
            { name: "TailwindCSS", useCase: "Utility-first CSS framework for rapid and responsive styling" },
            { name: "Framer Motion", useCase: "Production-ready animation library for complex UI interactions" },
            { name: "Radix UI", useCase: "Unstyled, accessible components for building high-quality design systems" }
        ],
        link: "https://luxestate001.vercel.app",
        github: "https://github.com/tajagn01/LuxeState-frontend-website",
        image: "/projects/luxe_state.png",
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
            "EmailJS"
        ],
        techStack: [
            { name: "React", useCase: "Core library for building the UI components" },
            { name: "Vite", useCase: "Fast build tool and dev server" },
            { name: "Tailwind CSS", useCase: "Utility-first styling for specific design needs" },
            { name: "Framer Motion", useCase: "Page transitions and element reveal animations" },
            { name: "EmailJS", useCase: "Handling contact form submissions serverlessly" }
        ],
        link: "https://codecrafter01.netlify.app/",
        github: "https://github.com/tajagn01/portfolio",
        image: "/projects/protfolio_website.png",
        status: "Live",
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
            "Framer Motion",
            "Vercel",
            "Radix UI"
        ],
        techStack: [
            { name: "React", useCase: "Component-based architecture for reusable UI blocks" },
            { name: "Tailwind CSS", useCase: "Implementing a custom design system and responsive layout" },
            { name: "Framer Motion", useCase: "Adding subtle micro-interactions and entry animations" },
            { name: "Vercel", useCase: "Continuous deployment and hosting" },
            { name: "Radix UI", useCase: "Accessible unstyled primitives for complex interactive components" }
        ],
        link: "https://ravel01.netlify.app",
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
            "Socket.io",
            "Redis",
            "React",
            "Node.js",
            "Recharts"
        ],
        techStack: [
            { name: "Socket.io", useCase: "Bi-directional real-time communication between client and server" },
            { name: "Redis", useCase: "In-memory store for fast session management and caching" },
            { name: "React", useCase: "Reactive UI that updates instantly with socket events" },
            { name: "Node.js", useCase: "Event-driven backend to handle concurrent connections" },
            { name: "Recharts", useCase: "Real-time data visualization charts" }
        ],
        link: "https://realcs01.netlify.app",
        github: "https://github.com/tajagn01/Real_CS",
        image: "/projects/real_cs.png",
        status: "Building",
        isBuilding: false
    },

    {
        title: "AI Visual Search",
        slug: "ai-visual-search",
        desc: "Next-gen visual search engine powered by artificial intelligence.",
        content: "Search using images instead of text with deep learning–based visual similarity matching.",
        tags: [
            "PyTorch",
            "CNN Models",
            "Flask",
            "OpenCV",
            "NumPy"
        ],
        techStack: [
            { name: "PyTorch", useCase: "Building and training the deep learning models" },
            { name: "CNN Models", useCase: "Extracting visual features from input images" },
            { name: "Flask", useCase: "Serving the ML model via a REST API" },
            { name: "OpenCV", useCase: "Image pre-processing and manipulation" },
            { name: "NumPy", useCase: "High-performance numerical computations for vector matching" }
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
            "Django",
            "HTML5/CSS3",
            "SQLite/Postgres",
            "Bootstrap/Tailwind",
            "Render"
        ],
        techStack: [
            { name: "Django", useCase: "High-level Python web framework for rapid development" },
            { name: "HTML5/CSS3", useCase: "Semantic structure and responsive styling" },
            { name: "SQLite/Postgres", useCase: "Database for storing blog posts and user data" },
            { name: "Bootstrap/Tailwind", useCase: "Responsive layout system" },
            { name: "Render", useCase: "Cloud platform for hosting the application" }
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
            "TensorFlow Lite",
            "Firebase",
            "Node.js",
            "Expo"
        ],
        techStack: [
            { name: "React Native", useCase: "Building a cross-platform mobile application" },
            { name: "TensorFlow Lite", useCase: "On-device machine learning for offline crop disease detection" },
            { name: "Firebase", useCase: "Real-time database and authentication backend" },
            { name: "Node.js", useCase: "Backend API for market data and weather aggregation" },
            { name: "Expo", useCase: "Development framework for rapid iteration and testing" }
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
            "GSAP (GreenSock)",
            "ScrollTrigger",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "CSS3"
        ],
        techStack: [
            { name: "GSAP (GreenSock)", useCase: "Industry-standard library for complex web animations" },
            { name: "ScrollTrigger", useCase: "Triggering precise animations based on scroll position" },
            { name: "Tailwind CSS", useCase: "Rapid styling consistency across the landing page" },
            { name: "JavaScript (ES6+)", useCase: "Logic for interactive elements and DOM manipulation" },
            { name: "CSS3", useCase: "Hardware-accelerated transitions and effects" }
        ],
        link: "https://monster001.netlify.app",
        github: "https://github.com/tajagn01/Monster-Energy-drink-webiste",
        image: "/projects/monster_dp.png",
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
            "CSS Modules",
            "Netlify",
            "Responsive Design",
            "Figma"
        ],
        techStack: [
            { name: "React", useCase: "Building a dynamic Single Page Application" },
            { name: "CSS Modules", useCase: "Scoped styling to prevent conflicts" },
            { name: "Netlify", useCase: "Automated deployment and form handling" },
            { name: "Responsive Design", useCase: "Ensuring mobile-friendly access for customers" },
            { name: "Figma", useCase: "Prototyping the UI before implementation" }
        ],
        link: "https://gujaratflaver01.netlify.app/",
        github: "#",
        image: "/projects/restorunt_frontend.png",
        status: "Live",
        isBuilding: false
    },


];
