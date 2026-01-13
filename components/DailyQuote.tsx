'use client';

import { useEffect, useState } from 'react';

interface Quote {
    content: string;
    author: string;
}

// Curated collection of inspirational quotes
const quotes: Quote[] = [
    { content: "Man is made by his belief. As he believes, so he is.", author: "Bhagavad Gita" },
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { content: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { content: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { content: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { content: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.", author: "Roy T. Bennett" },
];

export default function DailyQuote() {
    const [quote, setQuote] = useState<Quote>(quotes[0]);

    useEffect(() => {
        // Get quote index based on day of year for daily rotation
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Select quote based on day of year
        const quoteIndex = dayOfYear % quotes.length;
        setQuote(quotes[quoteIndex]);
    }, []);

    return (
        <div className="relative px-6 py-10 border border-zinc-800 rounded-xl mt-8">
            {/* Decorative Quote Mark */}
            <svg
                aria-hidden="true"
                width="105"
                height="78"
                className="absolute top-6 left-6 fill-zinc-800 dark:fill-white/10"
            >
                <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>

            {/* Quote Text */}
            <p className="relative z-10 italic text-pretty font-mono font-medium text-zinc-400 dark:text-zinc-300 mb-4">
                &quot;{quote.content}&quot;
            </p>

            {/* Quote Attribution */}
            <p className="text-right italic text-pretty font-mono text-white">
                — {quote.author}
            </p>
        </div>
    );
}
