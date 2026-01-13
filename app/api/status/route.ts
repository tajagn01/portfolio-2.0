import { NextResponse } from 'next/server';

export const revalidate = 0; // Disable cache for real-time updates

export async function GET() {
    let wakaTimeData = null;
    let gitHubData = null;

    // 1. Try WakaTime
    try {
        const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
        console.log('[API/Status] Checking WakaTime key present:', !!WAKATIME_API_KEY);
        // console.log('[API/Status] Visible Env Keys:', Object.keys(process.env).filter(k => !k.startsWith('npm_')).join(', '));

        if (WAKATIME_API_KEY) {
            const today = new Date().toISOString().split('T')[0];
            const url = `https://wakatime.com/api/v1/users/current/heartbeats?date=${today}&api_key=${WAKATIME_API_KEY}`;
            console.log(`[API/Status] Fetching WakaTime for date: ${today}`);

            const response = await fetch(url, { next: { revalidate: 0 } }); // Disable cache for debugging

            if (response.ok) {
                const data = await response.json();
                const heartbeats = data.data || [];
                console.log(`[API/Status] Heartbeats found: ${heartbeats.length}`);

                if (heartbeats.length > 0) {
                    const latestHeartbeat = heartbeats[heartbeats.length - 1];
                    const heartbeatTime = new Date(latestHeartbeat.time * 1000);
                    const timeDiffMins = (Date.now() - heartbeatTime.getTime()) / (1000 * 60);

                    console.log(`[API/Status] Latest heartbeat: ${heartbeatTime.toISOString()}`);
                    console.log(`[API/Status] Time difference: ${timeDiffMins.toFixed(2)} mins`);

                    if (latestHeartbeat && latestHeartbeat.time) {
                        wakaTimeData = {
                            lastActive: heartbeatTime,
                            isOnline: timeDiffMins < 3 // < 3 mins (2 mins might be too aggressive if heartbeat is slightly delayed)
                        };
                    }
                }
            } else {
                const text = await response.text();
                console.warn(`[API/Status] WakaTime API failed: ${response.status} - ${text}`);
            }
        }
    } catch (error) {
        console.error('[API/Status] WakaTime check failed:', error);
    }

    // 2. If WakaTime says we are online, return immediately
    if (wakaTimeData?.isOnline) {
        return NextResponse.json({
            lastActive: wakaTimeData.lastActive.toISOString(),
            isOnline: true,
            source: 'wakatime'
        });
    }

    // 3. Fallback to GitHub (if WakaTime is offline or not configured)
    try {
        const response = await fetch('https://api.github.com/users/tajagn01/events', {
            next: { revalidate: 60 }
        });

        if (response.ok) {
            const events = await response.json();
            const pushEvent = events.find((event: any) => event.type === 'PushEvent');
            if (pushEvent) {
                const lastPushTime = new Date(pushEvent.created_at);
                gitHubData = {
                    lastActive: lastPushTime,
                    isOnline: (Date.now() - lastPushTime.getTime()) < (30 * 60 * 1000) // 30 mins for GitHub
                };
            }
        }
    } catch (error) {
        console.error('GitHub check failed:', error);
    }

    // 4. Determine final status
    // Compare dates to find the absolute latest activity
    let finalStatus = {
        lastActive: new Date(0), // Default to epoch
        isOnline: false,
        source: 'none'
    };

    if (wakaTimeData && gitHubData) {
        if (wakaTimeData.lastActive > gitHubData.lastActive) {
            finalStatus = { ...wakaTimeData, source: 'wakatime' };
        } else {
            finalStatus = { ...gitHubData, source: 'github' };
        }
    } else if (wakaTimeData) {
        finalStatus = { ...wakaTimeData, source: 'wakatime' };
    } else if (gitHubData) {
        finalStatus = { ...gitHubData, source: 'github' };
    }

    return NextResponse.json({
        lastActive: finalStatus.lastActive.toISOString(),
        isOnline: finalStatus.isOnline,
        source: finalStatus.source
    });
}
