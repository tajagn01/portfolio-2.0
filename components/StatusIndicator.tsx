'use client';

import { useEffect, useState } from 'react';

export default function StatusIndicator() {
    const [status, setStatus] = useState<'coding' | 'offline'>('offline');
    const [lastActive, setLastActive] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                // Fetch from our local API which proxies WakaTime
                const response = await fetch('/api/status');
                if (!response.ok) throw new Error('Failed to fetch status');

                const data = await response.json();

                if (data.isOnline) {
                    setStatus('coding');
                    if (data.source === 'wakatime') {
                        setLastActive('Coding now in VS Code');
                    } else {
                        setLastActive('coding now in vs code');
                    }
                } else {
                    setStatus('offline');
                    const lastActiveTime = new Date(data.lastActive).getTime();
                    const currentTime = new Date().getTime();
                    const diffMinutes = (currentTime - lastActiveTime) / (1000 * 60);

                    if (diffMinutes < 60) {
                        const minutes = Math.floor(diffMinutes);
                        setLastActive(`Coded ${minutes}m ago`);
                    } else if (diffMinutes < 60 * 24) {
                        const hours = Math.floor(diffMinutes / 60);
                        setLastActive(`Coded ${hours}h ago`);
                    } else {
                        const days = Math.floor(diffMinutes / (60 * 24));
                        setLastActive(`Coded ${days}d ago`);
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
        // Poll every 1 minute
        const interval = setInterval(fetchStatus, 60 * 1000);
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
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {lastActive}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900 dark:border-r-zinc-700"></span>
            </span>
        </span>
    );
}
