"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Moon, Sun, Home, Github, Linkedin, Twitter, FileText, Briefcase, Code2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { CommandMenu } from "./CommandMenu";

const navItems = [
    { name: "Work", href: "/work" },
    { name: "Projects", href: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const navRef = useRef<HTMLDivElement>(null);
    const searchButtonRef = useRef<HTMLButtonElement>(null);

    // Initialize theme based on document class
    useEffect(() => {
        // Check if dark mode is active (it's the default in layout but let's check)
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        // Blur out
        gsap.to("body", {
            filter: "blur(12px)",
            duration: 0.5, // Slower, smoother blur
            ease: "power3.inOut",
            onComplete: () => {
                const newMode = !isDark;
                setIsDark(newMode);
                if (newMode) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }

                // Blur in (unblur)
                gsap.to("body", {
                    filter: "blur(0px)",
                    duration: 0.5,
                    ease: "power3.inOut"
                });
            }
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effect for handling K keypress to trigger search button click
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsMenuOpen(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (!navRef.current) return;

        gsap.to(navRef.current, {
            paddingLeft: isScrolled ? "1rem" : "1rem",
            paddingRight: isScrolled ? "1rem" : "1rem",
            borderRadius: isScrolled ? "0.5rem" : "0.75rem",
            maxWidth: isScrolled ? "1024px" : "100%",
            duration: 0.3, // Faster animation
            ease: "power2.out"
        });
    }, [isScrolled]);

    return (
        <>
            <CommandMenu open={isMenuOpen} setOpen={setIsMenuOpen} />
            {/* Desktop Navbar */}
            <div className="hidden md:block sticky top-0 z-50 mb-16 px-4 lg:px-8 pt-2">
                <div
                    ref={navRef}
                    className="relative flex items-center justify-between bg-white/80 dark:bg-zinc-900/80 py-2.5 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-800/5 backdrop-blur-md ring-1 ring-zinc-200 dark:ring-zinc-800 mx-auto transition-all duration-500"
                    style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        borderRadius: "0.75rem",
                        maxWidth: "100%"
                    }}
                >
                    <div className="flex items-center gap-3">
                        <Link href="/" className="group relative">
                            <div className="h-8 w-8 overflow-hidden rounded-full transition-transform hover:scale-110 active:scale-95">
                                <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
                            </div>
                        </Link>

                        <nav className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-1 text-sm font-medium transition-colors rounded-md ${pathname === item.href
                                        ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            ref={searchButtonRef}
                            onClick={() => setIsMenuOpen(true)}
                            className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all rounded-md hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                        >
                            <Search className="h-3.5 w-3.5" />
                            <span>Search</span>
                            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-500 dark:text-zinc-400">
                                Ctrl K
                            </kbd>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="h-8 w-8 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-transform hover:scale-110 active:scale-95 rounded-lg hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                        >
                            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 z-[100]">
                <div className="flex items-center justify-around bg-zinc-900/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg ring-1 ring-zinc-800">
                    <Link href="/" className={`transition-colors ${pathname === "/" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                        <Home className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <Link href="/work" className={`transition-colors ${pathname === "/work" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                        <Briefcase className="h-6 w-6" />
                        <span className="sr-only">Work</span>
                    </Link>
                    <Link href="/projects" className={`transition-colors ${pathname === "/projects" ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                        <Code2 className="h-6 w-6" />
                        <span className="sr-only">Projects</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
