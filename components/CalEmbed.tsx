'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function CalEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                "styles": { "branding": { "brandColor": "#000000" } },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return (
        <div
            data-cal-namespace="30min"
            data-cal-link="tajagn-garala-tlbd4j/30min"
            data-cal-config='{"layout":"month_view"}'
            className="group inline-flex items-center text-sm bg-black/5 dark:bg-white/15 border border-zinc-200 dark:border-zinc-800 py-2 px-3 rounded-md cursor-pointer transition-all hover:bg-black/10 dark:hover:bg-white/20"
        >
            <div className="flex items-center gap-2 group-hover:gap-8 transition-all duration-300 relative">
                {/* Profile Image */}
                <div className="w-5 h-5 flex-shrink-0">
                    <img
                        src="/logo.jpg"
                        alt="Profile"
                        className="w-full h-full object-contain rounded-sm"
                    />
                </div>

                {/* Animated Plus and "You" badge */}
                <div className="flex items-center gap-1 absolute left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-zinc-900 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <div className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[8px] ml-1">
                        You
                    </div>
                </div>

                {/* Button Text */}
                <span className="whitespace-nowrap font-bold text-sm ml-0 group-hover:ml-16 transition-all duration-300 text-zinc-900 dark:text-white">
                    Book a Free Call
                </span>
            </div>
        </div>
    );
}
