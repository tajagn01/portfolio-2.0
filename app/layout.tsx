import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Changed to JetBrains_Mono
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Configured JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: 'swap', // Optimize font loading
    preload: true,
});

export const metadata: Metadata = {
    title: "Tajagn Garala | Full Stack Developer Portfolio",
    description: "Tajagn Garala - Full Stack Web Developer specializing in React, Next.js, TypeScript, and PostgreSQL. View my portfolio of web applications and projects.",
    keywords: [
        "Tajagn",
        "Tajagn Garala",
        "Full Stack Developer",
        "Web Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Frontend Developer",
        "Backend Developer",
        "Portfolio",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Three.js",
        "GSAP",
        "Web Development",
        "Software Engineer"
    ],
    authors: [{ name: "Tajagn Garala", url: "https://www.linkedin.com/in/tajagn-garala-06ba45265/" }],
    creator: "Tajagn Garala",
    publisher: "Tajagn Garala",
    icons: {
        icon: '/logo.jpg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tajagn-garala.vercel.app',
        siteName: 'Tajagn Garala Portfolio',
        title: 'Tajagn Garala | Full Stack Developer',
        description: 'Full Stack Web Developer specializing in React, Next.js, TypeScript, and PostgreSQL. Building modern web applications.',
        images: [
            {
                url: '/logo.jpg',
                width: 1200,
                height: 630,
                alt: 'Tajagn Garala - Full Stack Developer',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tajagn Garala | Full Stack Developer',
        description: 'Full Stack Web Developer specializing in React, Next.js, TypeScript, and PostgreSQL.',
        creator: '@Garala_Tajagn',
        images: ['/logo.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google851f954b3a80bed8',
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
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Tajagn Garala",
                            "alternateName": "Tajagn",
                            "url": "https://tajagn-garala.vercel.app",
                            "image": "https://tajagn-garala.vercel.app/logo.jpg",
                            "sameAs": [
                                "https://github.com/tajagn01",
                                "https://www.linkedin.com/in/tajagn-garala-06ba45265/",
                                "https://x.com/Garala_Tajagn"
                            ],
                            "jobTitle": "Full Stack Developer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance"
                            },
                            "knowsAbout": [
                                "React",
                                "Next.js",
                                "TypeScript",
                                "JavaScript",
                                "Node.js",
                                "PostgreSQL",
                                "Tailwind CSS",
                                "Three.js",
                                "Full Stack Development",
                                "Web Development"
                            ]
                        })
                    }}
                />

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
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-GR2DRBBHBW"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-GR2DRBBHBW');
                    `}
                </Script>

                <div className="min-h-screen py-8">
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
