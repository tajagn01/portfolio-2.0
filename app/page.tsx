import Container from "@/components/ui/Container";
import DailyQuote from "@/components/DailyQuote";
import GitHubActivity from "@/components/GitHubActivity";
import StatusIndicator from "@/components/StatusIndicator";
import { FileText, Send, Twitter, Linkedin, Github, Briefcase, Music, Heart, StickyNote, Plug, Code2, Package, Database, Box, AtSign } from "lucide-react";

export default function Home() {
    return (
        <Container>
            <div className="space-y-24">
                {/* Hero Section */}
                <section className="space-y-8 mt-8">
                    <div className="relative h-24 w-24">
                        <div className="h-24 w-24 overflow-hidden rounded-full">
                            <img src="/logo.jpg" alt="Values" className="h-full w-full object-cover" />
                        </div>
                        <StatusIndicator />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            <span className="bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-400 dark:from-gray-300 dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                                Hi, I&apos;m Tajagn —
                            </span>{" "}
                            <span className="text-zinc-600 dark:text-zinc-500">A Full Stack web developer.</span>
                        </h1>

                        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-zinc-600 dark:text-zinc-400">
                            <span>I build interactive web apps using</span>
                            <a
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <span className="text-blue-600 dark:text-blue-400">TS</span>
                                Typescript
                            </a>
                            <span>,</span>
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <span className="text-cyan-500">⚛️</span>
                                React
                            </a>
                            <span>,</span>
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <span>N</span>
                                Next.js
                            </a>
                            <span>,</span>
                            <a
                                href="https://bun.sh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <span>🥟</span>
                                Bun
                            </a>
                            <span>and</span>
                            <a
                                href="https://www.postgresql.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <span className="text-blue-700 dark:text-blue-400">🐘</span>
                                PostgreSQL
                            </a>
                            <span>. With a focus on <span className="font-semibold text-zinc-900 dark:text-white">UI</span> design. Enthusiastic about <span className="font-semibold text-zinc-900 dark:text-white">Three.js</span>, driven by a keen eye for design.</span>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800/80 dark:bg-zinc-800/80 px-4 py-2 text-sm font-medium text-white dark:text-zinc-300 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-800 hover:text-white ring-1 ring-zinc-700/50">
                                <FileText className="h-4 w-4" />
                                Resume / CV
                            </button>
                            <button className="inline-flex items-center gap-2 rounded-md bg-zinc-100 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-white">
                                <Send className="h-4 w-4" />
                                Get in touch
                            </button>
                        </div>

                        <div className="flex gap-2 pt-4">
                            <a href="https://x.com/Garala_Tajagn" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/tajagn-garala-06ba45265/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://github.com/tajagn01" target="_blank" rel="noopener noreferrer" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="mailto:trgarala@gmail.com" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
                                <AtSign className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section>
                    <div className="mb-8">
                        <p className="text-sm text-zinc-500 mb-1">Featured</p>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Experience</h2>
                    </div>

                    <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-zinc-100 dark:hover:bg-zinc-900/30 p-4 -mx-4 rounded-xl transition-colors">
                        {/* Left Column: Icon */}
                        <div className="md:col-span-1">
                            <div className="h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 backdrop-blur-md ring-1 ring-zinc-200 dark:ring-zinc-700/50 flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="md:col-span-11 space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer inline-flex items-center gap-2">
                                        Freelance Full Stack Developer
                                        <span className="inline-flex items-center gap-1 bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-400/20">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                                            Working
                                        </span>
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Self-Employed • Remote</p>
                                </div>
                                <span className="text-xs text-zinc-500 uppercase tracking-wide whitespace-nowrap">January 2024 - Present</span>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-300 mb-3">Technologies & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span>N</span>
                                        Next.js
                                    </a>
                                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span className="text-cyan-600 dark:text-cyan-400">~</span>
                                        Tailwind CSS
                                    </a>
                                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span className="text-blue-600 dark:text-blue-400">TS</span>
                                        TypeScript
                                    </a>
                                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span className="text-cyan-500">⚛️</span>
                                        React
                                    </a>
                                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span>F</span>
                                        Figma
                                    </a>
                                    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span>▲</span>
                                        Vercel
                                    </a>
                                    <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span className="text-orange-500">☁</span>
                                        AWS
                                    </a>
                                    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span className="text-orange-600">P</span>
                                        Postman
                                    </a>
                                    <a href="https://bun.sh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-black/5 dark:bg-white/15 border border-dashed dark:border-white/30 border-black/20 px-2 py-1 text-xs font-bold text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors">
                                        <span>🥟</span>
                                        Bun
                                    </a>
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                <li className="flex gap-2">
                                    <span className="text-zinc-600 dark:text-zinc-600 mt-1.5">•</span>
                                    <span>Architected and developed complete frontend infrastructure for multiple client projects, delivering comprehensive solutions for web applications and promotional campaigns.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-600 dark:text-zinc-600 mt-1.5">•</span>
                                    <span>Led comprehensive codebase refactoring initiatives that improved maintainability, scalability, and development velocity across various platforms.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-600 dark:text-zinc-600 mt-1.5">•</span>
                                    <span>Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-600 dark:text-zinc-600 mt-1.5">•</span>
                                    <span>Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* GitHub Activity Section */}
                <GitHubActivity />

                {/* Projects Section */}
                <section>
                    <div className="mb-8">
                        <p className="text-sm text-zinc-500 mb-1">Featured</p>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project Card 1 */}
                        <div className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                                    <StickyNote className="h-16 w-16" />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                                        NotesBuddy
                                    </h3>
                                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500">
                                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Live
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools
                                </p>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "TypeScript", "React", "Vercel"].map(tech => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                                    <Plug className="h-16 w-16" />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                                        Appwrite MCP Server
                                    </h3>
                                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500">
                                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Live
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools
                                </p>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["TypeScript", "Bun", "Vercel", "Appwrite"].map(tech => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                                    <Music className="h-16 w-16" />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                                        Syncify
                                    </h3>
                                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500">
                                        <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Live
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    Real-time music streaming platform with synchronized playback, live chat, and social listening features
                                </p>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Node.js", "Tailwind CSS", "Socket.io"].map(tech => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 4 */}
                        <div className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
                                    <Heart className="h-16 w-16" />
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                                        Pasandida Aurat
                                    </h3>
                                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-red-300 bg-red-100 dark:bg-red-500/10 text-red-500">
                                        <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
                                        Building
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    Innovative dating platform featuring anonymous questions and authentic connections - currently in development
                                </p>
                                <div>
                                    <h4 className="text-xs font-medium text-zinc-500 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map(tech => (
                                            <span key={tech} className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button className="inline-flex items-center gap-2 rounded-md bg-zinc-800/80 dark:bg-zinc-800/80 px-4 py-2 text-sm font-medium text-zinc-100 dark:text-zinc-300 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-800 hover:text-white ring-1 ring-zinc-700/50">
                            Show all projects
                        </button>
                    </div>
                </section>

                {/* About Me Section */}
                <section>
                    <div className="mb-8">
                        <p className="text-sm text-zinc-500 mb-1">About</p>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Me</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="h-60 w-60 rounded-md overflow-hidden flex-shrink-0">
                            <img src="/logo.jpg" alt="About" className="h-full w-full object-contain" />
                        </div>

                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Tajagn Garala</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.
                            </p>

                            <div>
                                <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-4">Skills</p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-cyan-500" title="React">
                                        <Code2 className="h-6 w-6" />
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-orange-500" title="Bun">
                                        <Box className="h-6 w-6" />
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer bg-yellow-400 rounded" title="JavaScript">
                                        <span className="text-sm font-bold">JS</span>
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer bg-blue-600 rounded" title="TypeScript">
                                        <span className="text-sm font-bold text-white">TS</span>
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer bg-black rounded" title="Next.js">
                                        <span className="text-sm font-bold text-white">N</span>
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-green-600" title="Node.js">
                                        <Package className="h-6 w-6" />
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer text-blue-600" title="PostgreSQL">
                                        <Database className="h-6 w-6" />
                                    </div>
                                    <div className="h-8 w-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer bg-gray-800 rounded" title="Prisma">
                                        <span className="text-sm font-bold text-white">P</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="border border-zinc-200 dark:border-zinc-800 py-8 rounded-md bg-white dark:bg-transparent shadow-sm dark:shadow-none">
                    <div className="px-6 sm:px-12 flex flex-col items-center">
                        <p className="opacity-50 text-base md:text-xl mb-6 text-center text-zinc-900 dark:text-white">
                            Hey, you scrolled this far, let's talk.
                        </p>
                        <div className="group inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-zinc-200 dark:border-zinc-800 py-2 px-3 rounded-md cursor-pointer transition-all hover:bg-black/10 dark:hover:bg-white/20">
                            <div className="flex items-center gap-2 group-hover:gap-8 transition-all duration-300 relative">
                                {/* Profile Image */}
                                <div className="w-5 h-5 flex-shrink-0">
                                    <img
                                        src="/logo.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-contain rounded-sm"
                                    />
                                </div>

                                {/* Animated Plus and "You" badge */}
                                <div className="flex items-center gap-1 absolute left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-900 dark:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[8px] ml-1">
                                        You
                                    </div>
                                </div>

                                {/* Button Text */}
                                <span className="whitespace-nowrap font-bold text-sm ml-0 group-hover:ml-16 transition-all duration-300 text-zinc-900 dark:text-white">
                                    Book a Free Call
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <DailyQuote />

            </div>
        </Container>
    );
}
