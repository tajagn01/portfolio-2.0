'use client';

import { useEffect, useState } from 'react';

export default function StatusIndicator() {
    const [status, setStatus] = useState<'coding' | 'offline'>('offline');
    const [lastActive, setLastActive] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                // Fetch from our local file-watcher API
                const response = await fetch('/api/status');
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();
                const lastActiveTime = new Date(data.lastActive).getTime();
                const currentTime = new Date().getTime();
                const diffMinutes = (currentTime - lastActiveTime) / (1000 * 60);

                // Consider "coding now" if files were changed in last 10 minutes
                if (diffMinutes < 10) {
                    setStatus('coding');
                    setLastActive('Coding now (VS Code)');
                } else {
                    setStatus('offline');
                    if (diffMinutes < 60) {
                        const minutes = Math.floor(diffMinutes);
                        setLastActive(`Edited files ${minutes}m ago`);
                    } else if (diffMinutes < 60 * 24) {
                        const hours = Math.floor(diffMinutes / 60);
                        setLastActive(`Edited files ${hours}h ago`);
                    } else {
                        const days = Math.floor(diffMinutes / (60 * 24));
                        setLastActive(`Edited files ${days}d ago`);
                    }
                }
            } catch (error) {
                console.error('Error fetching status:', error);
                setStatus('offline');
                setLastActive('Offline');
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
        // Poll every 10 seconds for real-time updates
        const interval = setInterval(fetchStatus, 10 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return null;

    return (
        <span
            className="absolute bottom-1 right-1 block h-4 w-4 cursor-pointer group z-10"
            role="status"
            aria-label={lastActive}
        >
            <span className={`block h-full w-full rounded-full border-[3px] border-white dark:border-zinc-900 ${status === 'coding' ? 'bg-green-500' : 'bg-zinc-400 dark:bg-zinc-600'
                }`}>
                {status === 'coding' && (
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                )}
            </span>

            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {lastActive}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-700"></span>
            </span>
        </span>
    );
}
