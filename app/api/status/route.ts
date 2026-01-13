import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const getMostRecentFileModification = (dir: string, depth: number = 0, maxDepth: number = 6): Date => {
    if (depth > maxDepth) return new Date(0);

    try {
        const files = fs.readdirSync(dir);
        let latest = new Date(0);

        for (const file of files) {
            // Skip hidden files/folders and common massive directories
            if (
                file.startsWith('.') ||
                file === 'node_modules' ||
                file === 'dist' ||
                file === 'build' ||
                file === 'coverage' ||
                file === 'target' || // Rust
                file === 'bin' ||    // C# / Java
                file === 'obj'       // C#
            ) continue;

            const filePath = path.join(dir, file);
            try {
                const stats = fs.statSync(filePath);

                if (stats.isDirectory()) {
                    const subLatest = getMostRecentFileModification(filePath, depth + 1, maxDepth);
                    if (subLatest > latest) latest = subLatest;
                } else {
                    // Start checking for recent code files or just any file modification
                    // Excluding large binary files could be an optimization, but filestats is fast
                    if (stats.mtime > latest) latest = stats.mtime;
                }
            } catch (err) {
                // Ignore access errors
            }
        }
        return latest;
    } catch (err) {
        return new Date(0);
    }
};

export async function GET() {
    try {
        const processCwd = process.cwd();
        // Check the PARENT directory (User's Desktop) to include other projects
        // This assumes the portfolio is located at .../Desktop/Portfolio 2.0
        const desktopDir = path.resolve(processCwd, '..');

        const latestActivity = getMostRecentFileModification(desktopDir);

        return NextResponse.json({
            lastActive: latestActivity.toISOString(),
            isOnline: new Date().getTime() - latestActivity.getTime() < 5 * 60 * 1000 // 5 minutes threshold
        });
    } catch (error) {
        console.error('Status check failed:', error);
        return NextResponse.json({ error: 'Failed to check status' }, { status: 500 });
    }
}
