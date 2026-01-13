export const projects = [
    {
        title: "RankArena",
        slug: "rank-arena",
        desc: "Discover Your College Rank - A platform for students to track and compare academic performance.",
        content: "RankArena is a comprehensive platform designed for students to track their academic performance and compare their rankings with peers. Built with React and Node.js, it provides a seamless interface for viewing grades, analyzing trends, and setting academic goals. The dashboard offers intuitive visualizations and detailed reports to help students stay on top of their studies. By Gamifying the academic experience, RankArena encourages healthy competition and motivates students to achieve their best.",
        tags: ["React", "MongoDB", "Node.js", "Tailwind CSS", "Lenis"],
        link: "https://rank-arena.vercel.app",
        github: "https://github.com/tajagn01/RankArena",
        image: "/projects/rank-arena.png",
        status: "Live",
        isBuilding: false,
        details: {
            overview: "RankArena is a dedicated platform for students to monitor their academic standing within their college hierarchy. It transforms raw grade data into actionable insights, allowing users to see exactly where they stand among their peers.",
            features: [
                "Real-time ranking updates based on latest exam results",
                "Comparative analytics with batch and department averages",
                "Personalized performance growth charts",
                "Secure student authentication system"
            ],
            motivation: "I noticed that students often lacked a clear picture of their relative academic performance. I wanted to build a transparent tool that not only shows rank but also highlights areas for improvement, fostering a data-driven approach to studying.",
            techStack: [
                { name: "React", desc: "For a dynamic and responsive user interface" },
                { name: "Node.js", desc: "To handle backend logic and rank calculations" },
                { name: "Tailwind CSS", desc: "For rapid and consistent styling" }
            ],
            impact: "Since launch, it has helped hundreds of students visualize their academic progress, leading to more targeted study sessions and a healthier competitive spirit within the department."
        }
    },
    {
        title: "Velorent-3D",
        slug: "velorent-3d",
        desc: "Interactive 3D bicycle rental showcase utilizing modern webGL technologies.",
        content: "Experience the future of bicycle rentals with Velorent-3D. This interactive showcase leverages modern WebGL technologies to present a stunning 3D visualization of rental bikes. Users can rotate, zoom, and explore the details of each bike before making a reservation. The project demonstrates the power of JavaScript and CSS in creating immersive web experiences, setting a new standard for e-commerce product displays.",
        tags: ["GSAP", "Framer Motion", "Tailwind CSS", "Three.js", "JavaScript"],
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
        content: "Second Brain is an AI-powered knowledge management system designed to help you capture ideas, organize information, and unlock new insights. By leveraging advanced machine learning algorithms, it automatically categorizes your notes and suggests connections between seemingly unrelated concepts. This tool acts as an extension of your mind, ensuring that no great idea is ever lost and helping you build a personal knowledge base that grows with you.",
        tags: ["TypeScript", "OpenAI", "Next.js", "Tailwind CSS", "PostgreSQL", "Node.js"],
        link: "https://secondbrain001.netlify.app",
        github: "https://github.com/tajagn01/Second-Brain",
        image: "/projects/second-brain.png",
        status: "Building",
        isBuilding: true,
        details: {
            overview: "Second Brain serves as a digital extension of your memory, allowing users to store disjointed thoughts and have them automatically organized and interconnected by AI.",
            features: [
                "AI-driven auto-tagging and categorization",
                "Semantic search to find related notes by concept, not just keywords",
                "Visual knowledge graph of connected ideas",
                "Markdown support for rich text editing"
            ],
            motivation: "Information overload is a real problem. I built this to help myself and others move from simply 'saving' information to actually 'connecting' and 'using' it for creative work.",
            techStack: [
                { name: "TypeScript", desc: "For type-safe code and better maintainability" },
                { name: "OpenAI API", desc: "To power the semantic analysis and tagging" },
                { name: "Next.js", desc: "For server-side rendering and swift navigation" }
            ],
            impact: "Even in its building phase, the prototype has demonstrated how AI can drastically reduce the friction of organizing personal knowledge, making information retrieval instant and intuitive."
        }
    },
    {
        title: "AI Visual Search",
        slug: "ai-visual-search",
        desc: "Next-gen visual search engine powered by artificial intelligence.",
        content: "AI Visual Search is a next-generation search engine that allows users to find information using images instead of text. Powered by advanced computer vision and machine learning models in Python, it analyzes visual content to deliver accurate and relevant search results. This technology opens up new possibilities for e-commerce, digital asset management, and content discovery, changing the way we interact with data.",
        tags: ["AI", "Computer Vision", "Python"],
        link: "https://aisearch01.netlify.app",
        github: "https://github.com/tajagn01/AI-Visual-Search",
        image: "/projects/ai-visual-search.png",
        status: "Building",
        isBuilding: true,
        details: {
            overview: "A search engine that sees. Upload an image, and it finds similar items, product matches, or information sources by analyzing the visual features of the query.",
            features: [
                "Image-based query input",
                "Feature extraction using Convolutional Neural Networks",
                "Fast similarity search on large datasets",
                "Clean results gallery UI"
            ],
            motivation: "Text search has limits. I wanted to bridge the gap between what we see and what we can find, making search more intuitive for visual learners and shoppers.",
            techStack: [
                { name: "Python", desc: "Core language for ML models" },
                { name: "PyTorch", desc: "Deep learning framework" },
                { name: "Flask", desc: "API to serve the model results" }
            ],
            impact: "Demonstrates the practical application of Computer Vision in web apps, providing a template for e-commerce visual discovery tools."
        }
    },
    {
        title: "Odoo HR Management",
        slug: "odoo-hr-management",
        desc: "Comprehensive HR management system featuring employee tracking and payroll.",
        content: "A robust and comprehensive HR management system built on the Odoo platform. This solution streamlines employee tracking, payroll processing, and leave management. Developed with Python and PostgreSQL, it offers a secure and scalable architecture suitable for businesses of all sizes. The system improves operational efficiency by automating routine HR tasks and providing insightful analytics for better workforce management.",
        tags: ["Python", "Odoo", "PostgreSQL"],
        link: "https://github.com/tajagn01/hr_management_odoo",
        github: "https://github.com/tajagn01/hr_management_odoo",
        image: "/projects/odoo-hr.png",
        status: "Live",
        isBuilding: false,
        details: {
            overview: "An enterprise-grade ERP module designed to simplify Human Resources operations. From onboarding to offboarding, it manages the entire employee lifecycle within the Odoo ecosystem.",
            features: [
                "Automated payroll calculation and slip generation",
                "Leave and attendance tracking via calendar view",
                "Employee directory and document management",
                "Customizable reporting dashboard for HR managers"
            ],
            motivation: "HR processes are often bogged down by paperwork. I built this to digitize and automate those workflows, allowing HR teams to focus on people rather than spreadsheets.",
            techStack: [
                { name: "Python", desc: "Core logic and backend processing" },
                { name: "Odoo Framework", desc: "Rapid application development platform" },
                { name: "PostgreSQL", desc: "Robust relational database for data integrity" }
            ],
            impact: "Successfully deployed in a pilot environment, reducing time spent on payroll processing by 40% and eliminating errors associated with manual data entry."
        }
    },
    {
        title: "Blog Website",
        slug: "blog-website",
        desc: "A clean, modern blog platform built with semantic HTML and CSS.",
        content: "A modern, minimalist blog platform designed for speed and readability. Built with semantic HTML and CSS, it prioritizes content delivery and accessibility. The clean design ensures a distraction-free reading experience, while the responsive layout adapts perfectly to any device. This project serves as a solid foundation for sharing thoughts and stories online, with a focus on typography and whitespace.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/tajagn01/blog-website",
        github: "https://github.com/tajagn01/blog-website",
        image: "/projects/blog-website.png",
        status: "Live",
        isBuilding: false,
        details: {
            overview: "A lightweight, content-first blogging platform. It strips away the bloat of modern frameworks to deliver a pure, fast, and accessible reading experience.",
            features: [
                "Semantic HTML5 structure for optimal SEO",
                "Dark/Light mode toggle for reading comfort",
                "Responsive grid layout for featured posts",
                "Fast loading times with zero heavy dependencies"
            ],
            motivation: "I believe the web should be simple. I built this to remind myself and others that you don't always need a complex stack to build something beautiful and functional.",
            techStack: [
                { name: "HTML5", desc: "For structural semantics" },
                { name: "CSS3", desc: "For styling and responsive design" },
                { name: "Vanilla JS", desc: "For lightweight interactivity" }
            ],
            impact: "Serves as a high-performance template for writers, achieving a perfect 100 Lighthouse score for performance and accessibility."
        }
    },
    {
        title: "KrishiMitra",
        slug: "krishimitra",
        desc: "Smart agricultural app empowering farmers with real-time crop insights.",
        content: "KrishiMitra is a smart agricultural application dedicated to empowering farmers. By providing real-time insights into crop health, weather conditions, and market prices, it helps farmers make informed decisions. Built with React Native, the mobile app offers an intuitive interface that is accessible even in low-bandwidth environments, bridging the gap between technology and agriculture to support sustainable farming practices.",
        tags: ["React Native", "API", "Mobile"],
        link: "https://github.com/tajagn01/KrishiMitra",
        github: "https://github.com/tajagn01/KrishiMitra",
        image: "/projects/krishimitra.png",
        status: "Building",
        isBuilding: true,
        details: {
            overview: "A mobile companion for farmers, providing them with the data they need to maximize their crop yields and profits. It bridges the digital divide in the agricultural sector.",
            features: [
                "Real-time weather forecasts and alerts",
                "Crop disease identification via image upload",
                "Live market prices (Mandi rates) for various crops",
                "Multilingual support for regional accessibility"
            ],
            motivation: "Farming is risky, and information is power. I wanted to use technology to reduce that risk by giving farmers the same quality of data analytics that corporate businesses use.",
            techStack: [
                { name: "React Native", desc: "For cross-platform mobile compatibility" },
                { name: "Node.js API", desc: "Backend for serving weather and market data" },
                { name: "TensorFlow Lite", desc: "On-device plant disease detection" }
            ],
            impact: "Currently in development, but initial user testing suggests high engagement due to the localized language support and critical weather alert feature."
        }
    },
    {
        title: "Monster Energy Website",
        slug: "monster-energy-website",
        desc: "Cinematic scroll experience showcasing frontend animation techniques.",
        content: "This project is a cinematic scroll experience that pushes the boundaries of frontend animation. It showcases a dynamic and engaging presentation of the Monster Energy brand, utilizing advanced CSS techniques and JavaScript libraries to create smooth transitions and parallax effects. The result is a visually striking website that captures the energy and excitement of the product, providing users with an unforgettable digital journey.",
        tags: ["GSAP", "Framer Motion", "CSS", "Tailwind CSS"],
        link: "https://github.com/tajagn01/Monster-Energy-drink-webiste",
        github: "https://github.com/tajagn01/Monster-Energy-drink-webiste",
        image: "/projects/monster-energy.png",
        status: "Building",
        isBuilding: true,
        details: {
            overview: "A highly visual, scroll-driven brand experience for Monster Energy. This project focuses on immersive storytelling through motion, making the web page feel like an interactive movie.",
            features: [
                "Parallax scrolling effects",
                "Complex GSAP animations triggered by scroll position",
                "High-fidelity responsive layout",
                "Custom sound design integration"
            ],
            motivation: "I wanted to push my frontend skills to the limit by creating a site where 'feeling' and 'vibe' were just as important as information. It was an experiment in modern web choreography.",
            techStack: [
                { name: "GSAP", desc: "For professional-grade scroll animations" },
                { name: "CSS3", desc: "For advanced styling and layout" },
                { name: "JavaScript", desc: "For logic and interaction control" }
            ],
            impact: "This project serves as a strong portfolio piece demonstrating advanced frontend capabilities, receiving praise for its fluid user experience and attention to micro-interactions."
        }
    },
    {
        title: "SaaS Frontend",
        slug: "saas-frontend",
        desc: "Modern SaaS landing page with high-conversion design.",
        content: "This project features a high-conversion landing page designed for SaaS products. It incorporates modern UI/UX principles to effectively communicate value propositions and drive user sign-ups. Built with React and Tailwind CSS, the page is fully responsive and optimized for performance, ensuring a professional and engaging first impression for potential customers looking for reliable software solutions.",
        tags: ["React", "Tailwind CSS", "UI/UX"],
        link: "https://github.com/tajagn01/saas-website-frontend",
        github: "https://github.com/tajagn01/saas-website-frontend",
        image: "/projects/saas-frontend.png",
        status: "Live",
        isBuilding: false
    },
    {
        title: "Real CS",
        slug: "real-cs",
        desc: "Real-time SaaS platform with advanced frontend architecture.",
        content: "Real CS is a cutting-edge SaaS platform designed for real-time customer support. Featuring a high-performance dashboard, it allows support teams to monitor tickets, chat with customers, and analyze metrics instantly. The advanced frontend architecture ensures a responsive and seamless user experience, making it an essential tool for modern customer service operations that demand speed and reliability.",
        tags: ["React", "SaaS", "Dashboard"],
        link: "https://github.com/tajagn01/Real_CS",
        github: "https://github.com/tajagn01/Real_CS",
        image: "/projects/real-cs-saas.png",
        status: "Building",
        isBuilding: true,
        details: {
            overview: "A specialized Customer Success dashboard designed for speed. It aggregates tickets, chats, and customer health scores into a single real-time view.",
            features: [
                "WebSocket-based real-time ticket updates",
                "Live chat widget integration",
                "Agent performance analytics dashboard",
                "Customer health scoring algorithm"
            ],
            motivation: "Customer support tools are often slow and clunky. I wanted to build a 'racer' version of a CS tool—one that feels instant and keeps up with the pace of live support.",
            techStack: [
                { name: "React", desc: "For high-performance UI rendering" },
                { name: "Socket.io", desc: "For real-time bi-directional communication" },
                { name: "Redis", desc: "For fast session management and caching" }
            ],
            impact: "Prototype shows promise in reducing ticket response times by streamlining the information an agent needs to see in one glance."
        }
    },
];
