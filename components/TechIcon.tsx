"use client";

import {
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
    SiGreensock,
    SiFramer,
    SiThreedotjs,
    SiJavascript,
    SiTypescript,
    SiOpenai,
    SiNextdotjs,
    SiPostgresql,
    SiCss3
} from "react-icons/si";
import { Cuboid as Cube, Scroll, Code2, Cpu } from "lucide-react";
import React from "react";

interface TechIconProps {
    name: string;
}

export default function TechIcon({ name }: TechIconProps) {
    const iconMap: Record<string, React.ElementType> = {
        "React": SiReact,
        "MongoDB": SiMongodb,
        "Node.js": SiNodedotjs,
        "Tailwind CSS": SiTailwindcss,
        "Lenis": Scroll,
        "GSAP": SiGreensock,
        "Framer Motion": SiFramer,
        "Three.js": SiThreedotjs,
        "JavaScript": SiJavascript,
        "TypeScript": SiTypescript,
        "OpenAI": SiOpenai,
        "Next.js": SiNextdotjs,
        "PostgreSQL": SiPostgresql,
        "CSS": SiCss3,
        "HTML": Code2,
        "Python": Code2,
        "AI": Cpu,
    };

    // Color mapping for each technology
    const colorMap: Record<string, string> = {
        "React": "text-[#61DAFB]",
        "MongoDB": "text-[#47A248]",
        "Node.js": "text-[#339933]",
        "Tailwind CSS": "text-[#06B6D4]",
        "Lenis": "text-zinc-600 dark:text-zinc-400",
        "GSAP": "text-[#88CE02]",
        "Framer Motion": "text-[#0055FF]",
        "Three.js": "text-black dark:text-white",
        "JavaScript": "text-[#F7DF1E]",
        "TypeScript": "text-[#3178C6]",
        "OpenAI": "text-[#10A37F]",
        "Next.js": "text-black dark:text-white",
        "PostgreSQL": "text-[#4169E1]",
        "CSS": "text-[#1572B6]",
        "HTML": "text-[#E34F26]",
        "Python": "text-[#3776AB]",
        "AI": "text-purple-600 dark:text-purple-400",
    };

    const Icon = iconMap[name] || Code2;
    const iconColor = colorMap[name] || "text-zinc-600 dark:text-zinc-400";

    return (
        <div className="group/icon relative inline-flex items-center justify-center">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-sm">
                <Icon className={`h-5 w-5 ${iconColor} transition-transform group-hover/icon:scale-110`} />
            </div>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {name}
                {/* Tiny triangle for tooltip arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45" />
            </div>
        </div>
    );
}
