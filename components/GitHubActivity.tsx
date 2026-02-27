'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ContributionData {
    total: number;
    weeks: ContributionDay[][];
}

export default function GitHubActivity() {
    const [contributionData, setContributionData] = useState<ContributionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastCommit, setLastCommit] = useState<string | null>(null);

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (seconds < 60) return 'just now';
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        if (days < 30) return `${days}d ago`;
        const months = Math.floor(days / 30);
        if (months < 12) return `${months}mo ago`;
        return `${Math.floor(months / 12)}y ago`;
    };

    useEffect(() => {
        const fetchGitHubContributions = async () => {
            try {
                const username = 'tajagn01';

                // Fetch contributions and events in parallel
                const [contributionsResponse, eventsResponse] = await Promise.all([
                    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
                    fetch(`/api/github/events`)
                ]);

                if (!contributionsResponse.ok) {
                    throw new Error('Failed to fetch GitHub data');
                }

                const data = await contributionsResponse.json();

                // Process events for last commit (via authenticated server-side API)
                if (eventsResponse.ok) {
                    const eventsData = await eventsResponse.json();
                    if (eventsData.lastCommitDate) {
                        setLastCommit(eventsData.lastCommitDate);
                        localStorage.setItem('lastCommitDate', eventsData.lastCommitDate);
                    }
                } else {
                    // Fallback: try to get from cache
                    const cachedDate = localStorage.getItem('lastCommitDate');
                    if (cachedDate) {
                        setLastCommit(cachedDate);
                    }
                }

                // Process the data into weeks format
                const contributions = data.contributions;
                const weeks: ContributionDay[][] = [];
                let currentWeek: ContributionDay[] = [];

                // Get the day of week for the first contribution (0 = Sunday, 6 = Saturday)
                const firstDate = new Date(contributions[0].date);
                const firstDayOfWeek = firstDate.getDay();

                // Add empty days at the beginning if needed
                for (let i = 0; i < firstDayOfWeek; i++) {
                    currentWeek.push({
                        date: '',
                        count: 0,
                        level: 0
                    });
                }

                contributions.forEach((day: any) => {
                    const contributionDay: ContributionDay = {
                        date: day.date,
                        count: day.count,
                        level: day.level
                    };

                    currentWeek.push(contributionDay);

                    // If we've completed a week (7 days), start a new week
                    if (currentWeek.length === 7) {
                        weeks.push(currentWeek);
                        currentWeek = [];
                    }
                });

                // Add the remaining days if any
                if (currentWeek.length > 0) {
                    // Fill the rest of the week with empty days
                    while (currentWeek.length < 7) {
                        currentWeek.push({
                            date: '',
                            count: 0,
                            level: 0
                        });
                    }
                    weeks.push(currentWeek);
                }

                setContributionData({
                    total: data.total.lastYear || data.total[new Date().getFullYear()] || 0,
                    weeks
                });
                setLoading(false);
            } catch (err) {
                console.error('Error fetching GitHub contributions:', err);
                setError(err instanceof Error ? err.message : 'Failed to load contributions');
                setLoading(false);
            }
        };

        fetchGitHubContributions();
    }, []);

    // Get color class based on level
    const getLevelColor = (level: number): string => {
        const colors = [
            'bg-zinc-100 dark:bg-zinc-800',
            'bg-green-200 dark:bg-green-900',
            'bg-green-400 dark:bg-green-700',
            'bg-green-600 dark:bg-green-500',
            'bg-green-800 dark:bg-green-400'
        ];
        return colors[level] || colors[0];
    };

    // Get month labels for the graph
    const getMonthLabels = () => {
        if (!contributionData) return [];

        const months: { label: string; offset: number }[] = [];
        let currentMonth = -1;

        contributionData.weeks.forEach((week, weekIndex) => {
            const firstValidDay = week.find(day => day.date !== '');
            if (firstValidDay) {
                const weekMonth = new Date(firstValidDay.date).getMonth();
                if (weekMonth !== currentMonth) {
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

                    if (months.length === 0) {
                        months.push({
                            label: monthNames[weekMonth],
                            offset: weekIndex
                        });
                    } else {
                        const gap = weekIndex - months[months.length - 1].offset;
                        if (gap >= 2) {
                            months.push({
                                label: monthNames[weekMonth],
                                offset: weekIndex
                            });
                        } else if (months.length === 1 && months[0].offset === 0) {
                            // Overlap at start: replace stub with full month
                            months.pop();
                            months.push({
                                label: monthNames[weekMonth],
                                offset: weekIndex
                            });
                        }
                    }

                    currentMonth = weekMonth;
                }
            }
        });

        return months;
    };

    if (loading) {
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

    if (error || !contributionData) {
        return (
            <section>
                <div className="mb-8">
                    <p className="text-sm text-zinc-500 mb-1">Featured</p>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">GitHub Activity</h2>
                </div>

                <div className="relative bg-white dark:bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
                    <p className="text-zinc-500 dark:text-zinc-400 text-center">
                        {error || 'Unable to load GitHub contributions'}
                    </p>
                </div>
            </section>
        );
    }

    const monthLabels = getMonthLabels();

    return (
        <section>
            <div className="mb-8">
                <p className="text-sm text-zinc-500 mb-1">Featured</p>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">GitHub Activity</h2>
            </div>

            <div className="space-y-6">
                {/* Stats Header */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-zinc-600 dark:text-white font-medium mt-1">
                            Total: <span className="font-black text-zinc-900 dark:text-white">{contributionData.total.toLocaleString()}</span> contributions in the last year
                        </p>
                    </div>
                    {lastCommit && (
                        <div>
                            <p className="text-sm text-zinc-600 dark:text-white font-medium mt-1">
                                Last commit: <span className="font-black text-zinc-900 dark:text-white">{formatTimeAgo(lastCommit)}</span>
                            </p>
                        </div>
                    )}
                </div>

                {/* Contribution Graph */}
                {/* Contribution Graph */}
                <div className="w-fit max-w-full mx-auto bg-white dark:bg-[#0d1117] rounded-xl border-2 border-dashed border-zinc-200 dark:border-[#30363d] p-4 sm:p-8 overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                    <div className="overflow-x-auto pb-2">
                        <div className="min-w-[700px] mx-auto">
                            {/* Month labels */}
                            <div className="flex gap-[3px] mb-2 ml-8">
                                {monthLabels.map((month, index) => (
                                    <div
                                        key={index}
                                        className="text-xs font-medium text-zinc-400 dark:text-zinc-500"
                                        style={{ marginLeft: index === 0 ? `${month.offset * 13}px` : `${(month.offset - monthLabels[index - 1].offset) * 13 - 24}px` }}
                                    >
                                        {month.label}
                                    </div>
                                ))}
                            </div>

                            {/* Graph */}
                            <div className="flex gap-[3px]">
                                {/* Day labels */}
                                <div className="flex flex-col gap-[3px] text-xs text-zinc-500 dark:text-zinc-500 mr-2">
                                    <div className="h-[10px]"></div>
                                    <div className="h-[10px] flex items-center">Mon</div>
                                    <div className="h-[10px]"></div>
                                    <div className="h-[10px] flex items-center">Wed</div>
                                    <div className="h-[10px]"></div>
                                    <div className="h-[10px] flex items-center">Fri</div>
                                    <div className="h-[10px]"></div>
                                </div>

                                {/* Contribution squares */}
                                <div className="flex gap-[3px]">
                                    {contributionData.weeks.map((week, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                                            {week.map((day, dayIndex) => (
                                                <div
                                                    key={dayIndex}
                                                    className={`h-[10px] w-[10px] rounded-sm ${day.date ? getLevelColor(day.level) : 'bg-transparent'} ${day.date ? 'border border-zinc-200 dark:border-zinc-700/50 hover:ring-2 hover:ring-zinc-400 dark:hover:ring-zinc-500 transition-all cursor-pointer' : ''}`}
                                                    title={day.date ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString('en-US', {
                                                        weekday: 'short',
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}` : ''}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 mt-4 justify-end">
                                <span>Less</span>
                                {[0, 1, 2, 3, 4].map((level) => (
                                    <div
                                        key={level}
                                        className={`h-[10px] w-[10px] rounded-sm ${getLevelColor(level)} border border-zinc-200 dark:border-zinc-700/50`}
                                    />
                                ))}
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
