import Container from "@/components/ui/Container";
import { Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Work() {
    return (
        <Container>
            <div className="space-y-4 mt-8">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>
                <div className="space-y-24">
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
                </div>
            </div>
        </Container>
    );
}
