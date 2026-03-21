import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const hasTitle = searchParams.has('title');
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Tajagn Garala - Web Developer';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#09090b',
                        color: '#ffffff',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #3f3f46 2%, transparent 0%), radial-gradient(circle at 75px 75px, #3f3f46 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#18181b',
                        padding: '40px 80px',
                        border: '2px solid #27272a',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        maxWidth: '80%',
                    }}>
                        <div style={{ fontSize: 60, fontWeight: 800, textAlign: 'center', margin: 0 }}>
                            {title}
                        </div>
                        <div style={{ fontSize: 30, color: '#a1a1aa', marginTop: 24, fontStyle: 'italic' }}>
                            tajagn.vercel.app
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        return new Response('Failed to generate image', { status: 500 });
    }
}
