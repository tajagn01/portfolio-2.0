import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import TechIcon from "@/components/TechIcon";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <Container>
            <div className="py-8 space-y-8">
                {/* Navigation */}
                <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                {/* Hero Section */}
                <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl sm:text-4xl font-bold text-white shadow-sm">{project.title}</h1>
                                <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border ${project.isBuilding ? "border-red-500/50 bg-red-500/20 text-red-100" : "border-green-500/50 bg-green-500/20 text-green-100"} backdrop-blur-md`}>
                                    <div className={`size-2 rounded-full ${project.isBuilding ? "bg-red-500" : "bg-green-500"} animate-pulse`}></div>
                                    {project.status}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md transition-colors border border-white/20"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </Link>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {project.details ? (
                            <>
                                <section>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="h-1 w-6 bg-zinc-900 dark:bg-white rounded-full"></span>
                                        Overview
                                    </h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                                        {project.details.overview}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="h-1 w-6 bg-zinc-900 dark:bg-white rounded-full"></span>
                                        What Users Can Do
                                    </h2>
                                    <ul className="grid gap-3 sm:grid-cols-2">
                                        {project.details.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
                                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                                                <span className="text-zinc-600 dark:text-zinc-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="h-1 w-6 bg-zinc-900 dark:bg-white rounded-full"></span>
                                        Why I Built This
                                    </h2>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed italic border-l-4 border-zinc-200 dark:border-zinc-700 pl-4 py-1">
                                        "{project.details.motivation}"
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="h-1 w-6 bg-zinc-900 dark:bg-white rounded-full"></span>
                                        Tech Stack
                                    </h2>
                                    <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            {project.details.techStack.map((tech, idx) => (
                                                <div key={idx} className="space-y-1">
                                                    <h3 className="font-semibold text-zinc-900 dark:text-white">{tech.name}</h3>
                                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                                        {tech.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="h-1 w-6 bg-zinc-900 dark:bg-white rounded-full"></span>
                                        After Launch & Impact
                                    </h2>
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                            {project.details.impact}
                                        </p>
                                    </div>
                                </section>
                            </>
                        ) : (
                            // Fallback for projects without detailed sections
                            <>
                                <div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">About</h2>
                                    <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Project Overview</h2>
                                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                            {project.content}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tech => (
                                    <TechIcon key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
