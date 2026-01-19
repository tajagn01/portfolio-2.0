'use client';

import dynamic from 'next/dynamic';

// Skeleton component for loading state
function GitHubActivitySkeleton() {
    return (
        <section>
            <div className="mb-8">
                <p className="text-sm text-zinc-500 mb-1">Featured</p>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">GitHub Activity</h2>
            </div>

            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                </div>

                <div className="relative bg-white dark:bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
                    <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}

// Lazy load GitHubActivity component
const GitHubActivity = dynamic(() => import('./GitHubActivity'), {
    loading: () => <GitHubActivitySkeleton />,
    ssr: false // This component fetches client-side data
});

export default GitHubActivity;
