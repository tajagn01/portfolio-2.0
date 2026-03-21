
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
        title: "RentalHub",
        slug: "rentalhub",
        desc: "A role-based rental management platform designed around real-world workflows and scalability.",
        content: "RentalHub is a modern rental management system with dedicated dashboards for Admin, Vendor, and Customer roles â€” enabling seamless product listing, browsing, renting, and platform oversight.",
        tags: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "Tailwind CSS"
        ],
        techStack: [
            { name: "MongoDB", useCase: "NoSQL database for flexible rental and user data storage" },
            { name: "Express.js", useCase: "Backend API framework for handling role-based routes and logic" },
            { name: "React", useCase: "Dynamic frontend with separate dashboards for each role" },
            { name: "Node.js", useCase: "Runtime environment powering the server-side application" },
            { name: "Tailwind CSS", useCase: "Utility-first CSS framework for responsive, modern UI design" }
        ],
        link: "https://rental-management-system-nine.vercel.app",
        github: "https://github.com/tajagn01/rental-management-system",
        image: "/projects/rent_hub.png",
        status: "Live",
        isBuilding: false,
        details: {
            overview: "RentalHub is a full-stack MERN application that provides a complete rental management solution with role-based access control. It features three distinct dashboards â€” Admin, Vendor, and Customer â€” each tailored to specific workflows.",
            features: [
                "Vendor Dashboard â€“ List products, manage rentals, and track activity",
                "Customer Dashboard â€“ Browse available products and rent seamlessly",
                "Admin Dashboard â€“ Manage vendors, customers, and platform-wide insights",
                "Role-based authentication with separate dashboards for Admin, Vendor, and Customer",
                "Invoice download functionality available for all user roles",
                "Real-time rental tracking and activity management"
            ],
            motivation: "Built to solve the complexity of multi-role rental platforms, providing a scalable and intuitive experience for property managers trusted by 10,000+ users.",
            techStack: [
                { name: "MongoDB", desc: "Flexible document database for storing rental listings, users, and transactions" },
                { name: "Express.js", desc: "Lightweight Node.js framework for building RESTful APIs" },
                { name: "React", desc: "Component-based frontend library for building interactive dashboards" },
                { name: "Node.js", desc: "JavaScript runtime for scalable backend services" },
                { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid, responsive UI development" }
            ],
            impact: "A production-ready rental management platform demonstrating full-stack MERN proficiency with real-world multi-role architecture and scalable design patterns."
        }
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
        content: "Search using images instead of text with deep learningâ€“based visual similarity matching.",
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
        link: "https://github.com/tajagn01/Krishimitra-app",
        github: "https://github.com/tajagn01/Krishimitra-app",
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

export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
}

export const blogs: BlogPost[] = [
    {
        title: "From Zero to Code: My First 2 Years as a CSE Student",
        slug: "from-zero-to-code-cse-journey",
        excerpt: "2024 batch. Real story. No filter. How I went from never writing a line of code to building real projects and what the Bhagavad Gita taught me about learning to program.",
        date: "2026-03-21",
        readTime: "12 min read",
        category: "Career",
        tags: ["CSE", "CodingJourney", "WebDevelopment", "DSA", "LeetCode", "StudentLife", "Hackathon", "Programming"],
        content: `The Bhagavad Gita says something that took me two full years to actually understand.

"You have the right to perform your actions, but you are not entitled to the fruits of your actions."

When I first read this, I thought okay, cool philosophical line. But sitting here at the end of my second year of CSE, having gone through everything I went through, this line feels less like a quote and more like a survival guide. Because that is exactly what these two years have been. You write the code. It breaks. You fix it. Sometimes it works, sometimes it doesn't. But you keep writing anyway.

This is my story. Not the polished LinkedIn version. The real one.

## It Started With a Dream and a Very Rude Reality Check

I remember the feeling of finishing 12th standard. Boards done. Entrance exams done. I was going to study Computer Science and become a software engineer and build cool things and life was going to be amazing.

Then college started.

Day one. First class. C programming. The professor is writing syntax on the board and everyone around me is nodding like they get it, and I'm sitting there thinking what is even happening right now. After 12th standard, where everything was structured and someone was always telling you exactly what to do next, sitting back down in a classroom and trying to learn to code felt like being dropped in the middle of a forest with no map.

The transition hit hard. Not just the concepts. The whole thing. The independence, the lack of guidance, the feeling that everyone else had figured something out that nobody told you about.

I hadn't written a single line of code in my life before college. And now I was supposed to understand pointers.

## Year One: The Year I Was Mostly Just Confused

So college was teaching me C. Loops, arrays, functions, structures. On paper it made sense. In practice I would stare at my screen for an hour trying to figure out why my code wasn't working and then realise I had missed a semicolon. A single semicolon. One character. And it broke everything.

But the real struggle wasn't even the syntax mistakes. It was the logic. The actual thinking. When a problem was in front of me, my brain didn't automatically know how to break it down into steps. That problem solving instinct, that programmer's brain, it doesn't come pre-loaded. You have to build it yourself, slowly, painfully, one problem at a time.

And nobody in college was going to hold my hand through that. That's just not how it works.

So I did what a lot of curious, slightly lost CSE students do. I went to YouTube.

I found Code With Harry and his Sigma Web Development course. If you know, you know. Harry bhai has this way of explaining things that just feels like a friend teaching you, not a professor lecturing you. I started from absolute zero. What is HTML. What is a tag. Why does CSS exist. I was watching videos, typing along, building small things.

And I was excited. For the first time I felt like okay, this is it. Web development is my thing. I am going to build websites and it is going to be great.

Then I hit a wall.

Not a small wall. A proper, full height, no door wall.

My layouts were breaking. My CSS wasn't doing what I wanted. I would follow a tutorial step by step and still end up with something that looked completely different from what was on screen. I started a project and got stuck halfway and didn't know how to get unstuck. The excitement started fading and in its place came this quiet, heavy feeling.

Maybe I'm just not getting it.

And that is where the real test began. Not a coding test. A mental one.

I would look around at my classmates and some of them seemed to be cruising. I'd go on social media and see people my age winning hackathons, building apps, getting internships. And I would close my laptop and wonder what was wrong with me.

The honest truth about year one is that I spent a lot of it feeling lost. No guidance, no clear roadmap, no senior telling me what to do or in what order to do it. Just me, a screen, some YouTube videos, and a lot of confusion.

But here is the other honest truth. I didn't stop.

Not because I was some motivated, disciplined, inspirational figure. But because I had this stubborn, restless feeling inside that I could not shake. This itch that said you cannot just sit here. You cannot just give up and do nothing. Do something. Anything. Just don't stop.

So I didn't.

## The Turning Point That Changed Everything

Second year started and something shifted. I can't point to one single moment but it was somewhere in semester three that things started feeling different.

I found Apna College on YouTube. Shradha didi and Aman bhaiya. And I started their DSA series properly this time, not jumping around, not skipping, actually sitting down and going through it from the beginning.

Data Structures and Algorithms. Arrays. Strings. Linked Lists. Recursion. And I started doing problems on LeetCode.

The first few weeks were humbling. I would read a problem and just blank. No idea where to even start. I'd look at the solution, understand it, think okay I get it, then try the next problem and blank again.

But somewhere around week three or four something started happening. I started seeing patterns. I started recognising that okay, this problem looks like that problem. I started being able to sit with a problem for fifteen minutes without panicking and just think.

And then it happened.

The first time I solved a DSA problem completely on my own, no hints, no looking at solutions, just me working through it until it clicked and the code ran and it passed all the test cases. I remember just sitting there staring at the screen.

That green checkmark.

That was it. That was the moment I understood why people get obsessed with competitive programming. Because that feeling, that tiny dopamine hit of solving something with your own brain, is genuinely addictive.

I kept going. I moved from Apna College into Striver's content. His DSA sheet, his explanations, his approach to breaking down hard problems. If Apna College gave me the foundation, Striver gave me the structure to go deeper. His A2Z DSA sheet became like a roadmap. I knew what to do next. I knew what I was working towards. And that clarity made all the difference.

For someone who spent year one feeling like there was no map, finally having a map felt like a superpower.

## Web Development: The Comeback Nobody Expected (Including Me)

Remember how web dev didn't go well in year one?

Year two was the comeback arc.

With DSA building my logical thinking and my confidence slowly growing, I came back to web development with a completely different energy. I went back to Code With Harry's Sigma course and this time things that had confused me before started making sense. The HTML structure felt logical now. CSS stopped feeling like random guessing and started feeling like actual problem solving.

I went deeper. JavaScript started clicking. I understood why things worked the way they worked, not just how to copy them from a tutorial.

And then the moment happened. I built my first complete website from scratch.

Not a tutorial project. Not following along with someone else's code. Mine. I designed it, I wrote it, I debugged it, I got it working.

I remember sitting back and just looking at it on screen. It wasn't perfect. There were things I would improve. But I had built it. Me. The same person who couldn't get a CSS layout to work in year one.

I genuinely felt emotional for a second and then felt slightly embarrassed about feeling emotional about a website and then decided you know what, no, I am allowed to feel good about this. This was hard and I did it.

By the end of second year, my understanding of web development had grown to a level that honestly surprised me. Not just building things but understanding the why behind them. Why we structure HTML this way. Why JavaScript works the way it does. Why certain approaches are better than others.

## Hackathons: Where Theory Meets Absolute Chaos

Somewhere in second year I also started entering hackathons.

If you've never been in one, here's the experience. You get a problem statement. You have 24 to 48 hours. You have a team. Everyone is running on no sleep and bad coffee and the deadline is very real and does not care about how you feel.

It's messy. It's stressful. Sometimes things break at 3 AM and you have no idea how to fix them. Sometimes you look at what you built in the last hour and want to throw your laptop out the window.

And it is the best learning experience I have ever had.

Because in a hackathon you don't have time to be scared. You don't have time to think about whether you're good enough or whether you know enough. You just build. You figure it out. You Google furiously. You ask your teammates. You try things until something works.

And you walk out the other end having learned more in one weekend than in some entire months of studying alone.

I didn't win every hackathon I entered. I didn't come close in some of them. But every single time, without fail, I walked away knowing something I didn't know when I walked in. And that, honestly, is the whole point.

## The Things Nobody Tells You But Somebody Should

### Results come later than you expect. Do the work anyway.

This is the hardest thing about learning to code and nobody warns you about it enough. You are going to spend weeks, sometimes months, putting in effort and seeing no visible results. No green checkmarks, no working projects, no breakthrough moments. Just you grinding away and feeling like nothing is happening.

And then one day it all starts connecting. The things you learned three weeks ago suddenly make sense. The problem you couldn't solve before feels approachable now. The growth was happening the whole time. You just couldn't see it yet.

The Bhagavad Gita keeps coming back to me here. Do the work. Detach from the outcome. Not because outcomes don't matter but because if you're only doing the work when you can see the results, you're going to quit too early every single time.

### Comparison is the fastest way to kill your own progress.

Your batchmate who seems to understand everything is struggling with something else you don't know about. That person online winning hackathons has been coding for three years longer than you. You are seeing everyone's highlight reel and comparing it to your behind the scenes footage.

The only useful comparison is you last month versus you this month.

### The people who make it are not the most talented. They're the most stubborn.

I genuinely believe this after two years. The people I've seen grow the most in CSE are not necessarily the smartest people in the room. They are the ones who kept showing up. Who came back after failing. Who didn't let a bad week become a permanent stop.

Talent is common. Stubbornness is rare. Be the stubborn one.

## Where I Am Now, Honestly

End of second year. Here is the real picture.

DSA is no longer scary. It's a puzzle I genuinely enjoy. I'm still learning, still grinding, still hitting problems that make me sit and think for a long time. But I'm not afraid of them anymore.

Web development has gone from something that broke my confidence to something I'm genuinely proud of. I can build real things. I understand what I'm building and why. That shift, from copying tutorials to actually understanding, is everything.

I've been in hackathons and come out better every time, win or lose.

Am I where I want to be? No. Not even close. I have so much more to learn and I know that.

But am I unrecognisably different from the confused, lost first year who couldn't get a CSS layout to work?

Yes. Absolutely yes.

## One Last Thing, If You're Reading This as a Fresher

Start early.

I mean it. Whatever year you're in, whatever day you're reading this, start earlier than you think you need to. Learn DSA early. Build something small early. Put in the hours before you feel ready because you will never feel ready. Readiness is a myth. You get good by doing, not by waiting until you feel good enough to start doing.

Every day you start before someone else is compounding interest on your future. It is the most unfair advantage you can give yourself and it is completely available to everyone.

The path is not linear. It is not clean. There will be weeks where nothing makes sense and you wonder why you chose this field. There will be moments where you feel so far behind that catching up feels impossible.

But the people who stay, who keep showing up, who are stubborn enough to just keep going even when it's hard, they are the ones who build the things that matter. They are the ones who get the opportunities. They are the ones who look back at year one and smile at how far they've come.

You can be one of those people. You just have to refuse to stop.

The Bhagavad Gita, chapter two, verse forty.

**"Even a little progress on this path protects one from the greatest fear."**

Even a little. Every problem you solve, every concept that clicks, every project you finish, every hackathon you enter, that is progress. That is protection. That is you building something that nobody can take away from you.

Keep going.

---

If this story meant something to you, share it with one person who needs to hear it right now. And if you're on this journey too, I'd love to connect. Let's figure this out together.

**2024 batch. Still learning. Always building.**`,
    },
];

