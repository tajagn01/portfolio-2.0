import Container from "@/components/ui/Container";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const categoryColors: Record<string, string> = {
    "Three.js": "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20",
    "TypeScript": "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
    "Career": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
    "Next.js": "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-300 border-zinc-200 dark:border-zinc-500/20",
};

function isGitaQuote(line: string): boolean {
    const trimmed = line.trim();
    return (
        (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
        (trimmed.startsWith('\u201c') && trimmed.endsWith('\u201d'))
    );
}

function renderContent(content: string) {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let keyCounter = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Horizontal rule
        if (line.trim() === "---") {
            elements.push(
                <hr key={keyCounter++} className="my-10 border-zinc-200 dark:border-zinc-800" />
            );
            i++;
            continue;
        }

        // H2
        if (line.startsWith("## ") && !line.startsWith("### ")) {
            elements.push(
                <h2
                    key={keyCounter++}
                    className="mt-12 mb-4 text-2xl font-bold leading-snug tracking-tight text-zinc-900 dark:text-white"
                    style={{
                        fontFamily: "'Lora', Georgia, serif",
                    }}
                >
                    <span>
                        {line.slice(3)}
                    </span>
                </h2>
            );
            i++;
            continue;
        }

        // H3
        if (line.startsWith("### ")) {
            elements.push(
                <h3
                    key={keyCounter++}
                    className="mt-8 mb-3 text-lg font-semibold leading-snug text-zinc-800 dark:text-zinc-200"
                    style={{
                        fontFamily: "'Lora', Georgia, serif",
                    }}
                >
                    <span>
                        {line.slice(4)}
                    </span>
                </h3>
            );
            i++;
            continue;
        }

        // Code block
        if (line.startsWith("```")) {
            const lang = line.slice(3).trim();
            const codeLines: string[] = [];
            i++;
            while (i < lines.length && !lines[i].startsWith("```")) {
                codeLines.push(lines[i]);
                i++;
            }
            i++;
            elements.push(
                <div key={keyCounter++} className="my-4 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700/50">
                    {lang && (
                        <div className="px-4 py-1.5 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/70 border-b border-zinc-200 dark:border-zinc-700/50 font-mono">
                            {lang}
                        </div>
                    )}
                    <pre className="p-4 overflow-x-auto bg-zinc-50 dark:bg-zinc-900/60">
                        <code className="text-xs text-zinc-800 dark:text-zinc-200 font-mono leading-relaxed">
                            {codeLines.join("\n")}
                        </code>
                    </pre>
                </div>
            );
            continue;
        }

        // Unordered list item
        if (line.startsWith("- ")) {
            const listItems: string[] = [];
            while (i < lines.length && lines[i].startsWith("- ")) {
                listItems.push(lines[i].slice(2));
                i++;
            }
            elements.push(
                <ul key={keyCounter++} className="my-3 space-y-1.5 pl-4">
                    {listItems.map((item, j) => (
                        <li key={j} className="flex gap-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                            <span className="text-zinc-400 dark:text-zinc-600 mt-1.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
                        </li>
                    ))}
                </ul>
            );
            continue;
        }

        // Numbered list item
        if (/^\d+\.\s/.test(line)) {
            const listItems: string[] = [];
            while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
                listItems.push(lines[i].replace(/^\d+\.\s/, ""));
                i++;
            }
            elements.push(
                <ol key={keyCounter++} className="my-3 space-y-1.5 pl-4">
                    {listItems.map((item, j) => (
                        <li key={j} className="flex gap-2.5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                            <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs mt-0.5 flex-shrink-0">{j + 1}.</span>
                            <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
                        </li>
                    ))}
                </ol>
            );
            continue;
        }

        // Empty line
        if (line.trim() === "") {
            i++;
            continue;
        }

        // Bhagavad Gita quote — lines wrapped in double quotes
        if (isGitaQuote(line)) {
            elements.push(
                <blockquote
                    key={keyCounter++}
                    className="my-8 mx-auto max-w-xl text-center relative"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl text-zinc-300 dark:text-zinc-700 select-none leading-none">&ldquo;</div>
                    <p
                        className="relative z-10 text-base leading-8 italic px-6 text-zinc-600 dark:text-zinc-400"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        {line.slice(1, -1)}
                    </p>
                    <div className="mt-3 h-px w-16 mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                </blockquote>
            );
            i++;
            continue;
        }

        // Regular paragraph
        elements.push(
            <p
                key={keyCounter++}
                className="text-zinc-600 dark:text-zinc-400 text-sm leading-8 my-4"
                dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
            />
        );
        i++;
    }

    return elements;
}

function inlineFormat(text: string): string {
    // Bold (**text**)
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>');
    // Inline code (`code`)
    text = text.replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">$1</code>');
    return text;
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogs.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
        <>
            {/* Load Playfair Display + Lora from Google Fonts */}
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lora:wght@600;700&display=swap');`}</style>

            <Container>
                <div className="mx-auto max-w-4xl mt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    <article className="pb-16">
                        {/* Category badge */}
                        <div className="mb-5">
                            <span
                                className={`inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category] ?? "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700"}`}
                            >
                                {post.category}
                            </span>
                        </div>

                        {/* Title — Playfair Display, gradient */}
                        <h1
                            className="text-3xl sm:text-4xl font-bold leading-tight mb-5 text-zinc-900 dark:text-white"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            <span>
                                {post.title}
                            </span>
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                            </span>
                        </div>

                        {/* Excerpt */}
                        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10 font-medium">
                            {post.excerpt}
                        </p>

                        {/* Content */}
                        <div className="prose-custom">
                            {renderContent(post.content)}
                        </div>

                        {/* Tags footer */}
                        <div className="mt-14 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">Tags</p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 px-2 py-1 rounded-md"
                                    >
                                        <Tag className="h-2.5 w-2.5" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </>
    );
}
