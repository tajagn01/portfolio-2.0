import Container from "@/components/ui/Container";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts on web development, Three.js, TypeScript, freelancing, and building products. Written by Tajagn Garala.",
};

const categoryColors: Record<string, string> = {
    "Three.js": "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20",
    "TypeScript": "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
    "Career": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
    "Next.js": "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-300 border-zinc-200 dark:border-zinc-500/20",
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPage() {
    const blogs = getAllBlogs();
    return (
        <Container>
            <div className="space-y-4 mt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-4"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Link>

                <div className="space-y-16">
                    {/* Header */}
                    <section>
                        <div className="mb-8">
                            <p className="text-sm text-zinc-500 mb-1">Writing</p>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Blog</h1>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-xl">
                                Thoughts on web development, 3D experiences, TypeScript, and the realities of freelancing.
                            </p>
                        </div>

                        {/* Blog Cards */}
                        <div className="flex flex-col gap-6 pb-12">
                            {blogs.map((post, i) => (
                                <article
                                    key={i}
                                    className="group relative bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-sm"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                        <div className="flex-1 space-y-3">
                                            {/* Category + Meta */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span
                                                    className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"}`}
                                                >
                                                    {post.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(post.date)}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                                                    <Clock className="h-3 w-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors leading-snug">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
                                                {post.excerpt}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400"
                                                    >
                                                        <Tag className="h-2.5 w-2.5" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Read Link */}
                                        <div className="flex-shrink-0 flex sm:items-center">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:underline group/btn whitespace-nowrap"
                                            >
                                                Read post
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </Container>
    );
}
