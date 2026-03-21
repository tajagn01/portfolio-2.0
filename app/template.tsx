"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const controls = useAnimation();

    useEffect(() => {
        // Initial page entry animation
        controls.start({ filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } });
    }, [controls]);

    useEffect(() => {
        // Theme change animation listener
        const handleThemeChange = async () => {
            await controls.start({ filter: "blur(8px)", opacity: 0.6, transition: { duration: 0.15 } });
            controls.start({ filter: "blur(0px)", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } });
        };

        window.addEventListener("themeChange", handleThemeChange);
        return () => window.removeEventListener("themeChange", handleThemeChange);
    }, [controls]);

    return (
        <motion.div
            initial={{ filter: "blur(15px)", opacity: 0, y: 15 }}
            animate={controls}
            className="w-full flex-1"
        >
            {children}
        </motion.div>
    );
}
