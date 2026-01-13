import Container from "@/components/ui/Container";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import TechIcon from "@/components/TechIcon";

export default function Projects() {
    return (
        <Container>
            <div className="space-y-4 mt-8">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>
                <div className="space-y-24">


                    {/* Projects Section */}
                    <section>
                        <div className="mb-8">
                            <p className="text-sm text-zinc-500 mb-1">Featured</p>
                            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Projects</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                            {projects.map((project, i) => (
                                <div key={i} className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                                    <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${project.isBuilding ? "border-red-300 bg-red-100 dark:bg-red-500/10 text-red-500" : "border-green-300 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500"}`}>
                                                <div className={`size-2 rounded-full ${project.isBuilding ? "bg-red-500" : "bg-green-500"} animate-pulse`}></div>
                                                {project.status}
                                            </div>
                                        </div>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                            {project.desc}
                                        </p>
                                        <div>
                                            <h4 className="text-xs font-medium text-zinc-500 mb-2">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tech => (
                                                    <TechIcon key={tech} name={tech} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:underline group/btn"
                                            >
                                                View more <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                            <div className="flex gap-3">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" title="View Source">
                                                    <Github className="h-5 w-5" />
                                                </a>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" title="Live Demo">
                                                    <ExternalLink className="h-5 w-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}


