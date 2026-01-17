import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Changed to JetBrains_Mono
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configured JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tajagn Garala | Portfolio",
    description: "Full Stack Developer Portfolio",
    icons: {
        icon: '/logo.jpg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark')
                                } else {
                                    document.documentElement.classList.remove('dark')
                                }
                            } catch (_) {}
                        `,
                    }}
                />
            </head>
            <body
                className={`${jetbrainsMono.variable} antialiased bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 transition-colors duration-500 font-mono`} // Added font-mono to apply it directly
                suppressHydrationWarning
            >
                <div className="min-h-screen py-8">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
