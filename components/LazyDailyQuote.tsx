'use client';

import dynamic from 'next/dynamic';

// Skeleton component for loading state
function DailyQuoteSkeleton() {
    return (
        <div className="relative px-6 py-10 border border-zinc-200 dark:border-zinc-800 rounded-xl mt-8">
            <div className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4"></div>
            <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse ml-auto"></div>
        </div>
    );
}

// Lazy load DailyQuote component
const DailyQuote = dynamic(() => import('./DailyQuote'), {
    loading: () => <DailyQuoteSkeleton />,
    ssr: false
});

export default DailyQuote;
