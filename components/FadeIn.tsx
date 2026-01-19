"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Apply delay before showing
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay * 1000);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } ${className}`}
        >
            {children}
        </div>
    );
}
