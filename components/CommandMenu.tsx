"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import {
    Briefcase,
    Code2,
    Home,
    User,
    Mail,
    Github,
    Linkedin,
    Twitter,
    Search
} from "lucide-react";

import { createPortal } from "react-dom";

interface CommandMenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, [setOpen]);

    if (!open) return null;

    // Use Portal to render at root level to ensure centering and z-index work correctly
    return createPortal(
        <div
            className="fixed inset-0 z-[99999] flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
        >
            <div
                className="w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <Command className="w-full">
                    <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3">
                        <Search className="h-4 w-4 text-zinc-500 mr-2" />
                        <Command.Input
                            autoFocus
                            placeholder="Type a command or search..."
                            className="w-full px-2 py-4 h-12 text-sm outline-none bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
                        />
                    </div>

                    <Command.List className="h-[300px] overflow-y-auto p-2 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Pages" className="px-2 py-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Home className="h-4 w-4 text-zinc-500" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/work"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Briefcase className="h-4 w-4 text-zinc-500" />
                                <span>Work</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => router.push("/projects"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Code2 className="h-4 w-4 text-zinc-500" />
                                <span>Projects</span>
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Sections" className="px-2 py-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 mt-2">
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    router.push("/#about");
                                    setTimeout(() => {
                                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                })}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <User className="h-4 w-4 text-zinc-500" />
                                <span>About Me</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => {
                                    router.push("/#contact");
                                    setTimeout(() => {
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                })}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Mail className="h-4 w-4 text-zinc-500" />
                                <span>Book a Call</span>
                            </Command.Item>
                        </Command.Group>

                        <Command.Group heading="Socials" className="px-2 py-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 mt-2">
                            <Command.Item
                                onSelect={() => runCommand(() => window.open("https://github.com/tajagn01", "_blank"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Github className="h-4 w-4 text-zinc-500" />
                                <span>GitHub</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/tajagn-garala-06ba45265/", "_blank"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Linkedin className="h-4 w-4 text-zinc-500" />
                                <span>LinkedIn</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open("https://x.com/Garala_Tajagn", "_blank"))}
                                className="flex items-center gap-2 px-2 py-2 text-sm text-zinc-900 dark:text-zinc-100 rounded-md cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800/50 aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                            >
                                <Twitter className="h-4 w-4 text-zinc-500" />
                                <span>Twitter / X</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
        </div>,
        document.body
    );
}
