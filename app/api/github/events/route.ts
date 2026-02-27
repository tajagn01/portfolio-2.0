import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
    try {
        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        const username = 'tajagn01';

        // If we have a token, use authenticated endpoint (includes private repo events)
        // Otherwise fall back to public events
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'portfolio-app',
        };

        if (GITHUB_TOKEN) {
            headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
        }

        // Authenticated: /users/{username}/events includes private events
        const response = await fetch(
            `https://api.github.com/users/${username}/events?per_page=30`,
            { headers, next: { revalidate: 0 } }
        );

        if (!response.ok) {
            console.error(`[API/GitHub] Events API failed: ${response.status}`);
            return NextResponse.json(
                { error: 'Failed to fetch GitHub events' },
                { status: response.status }
            );
        }

        const events = await response.json();

        // Find the latest PushEvent
        const pushEvent = events.find((event: any) => event.type === 'PushEvent');

        return NextResponse.json({
            lastCommitDate: pushEvent?.created_at || null,
            authenticated: !!GITHUB_TOKEN,
        });
    } catch (error) {
        console.error('[API/GitHub] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
