import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TechStackItem {
    name: string;
    useCase: string;
}

export interface ProjectDetails {
    overview: string;
    features: string[];
    motivation: string;
    impact: string;
    techStack: { name: string; desc: string; }[];
}

export interface Project {
    title: string;
    slug: string;
    desc: string;
    tags: string[];
    link: string;
    github: string;
    image: string;
    status: string;
    isBuilding: boolean;
    content: string;
    techStack?: TechStackItem[];
    details?: ProjectDetails;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjectContent(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the markdown file
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            desc: data.desc,
            tags: data.tags || [],
            link: data.link,
            github: data.github,
            image: data.image,
            status: data.status,
            isBuilding: data.isBuilding,
            content,
            techStack: data.techStack,
            details: data.details,
        };
    } catch (e) {
        return null;
    }
}

const ORIGINAL_ORDER = [
    "hr-management",
    "rentalhub",
    "rank-arena",
    "velorent-3d",
    "second-brain",
    "luxe-state",
    "codecrafter",
    "saas-frontend",
    "real-cs",
    "ai-visual-search",
    "blog-website",
    "krishimitra",
    "monster-energy-website",
    "gujarat-flavors"
];

export function getAllProjects(): Project[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    
    // Parse all MDX project files
    const allProjectsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            return getProjectContent(slug);
        })
        .filter((post): post is Project => post !== null);

    // Sort to match original data.ts exact sequence
    allProjectsData.sort((a, b) => {
        const indexA = ORIGINAL_ORDER.indexOf(a.slug);
        const indexB = ORIGINAL_ORDER.indexOf(b.slug);
        
        // If an item isn't strictly in ORIGINAL_ORDER, append it to the end
        if (indexA === -1 && indexB === -1) return 0;
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        
        return indexA - indexB;
    });

    return allProjectsData;
}
