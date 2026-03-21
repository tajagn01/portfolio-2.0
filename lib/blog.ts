import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    content: string;
}

const blogsDirectory = path.join(process.cwd(), 'content/blog');

export function getBlogContent(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Parse the markdown file
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            readTime: data.readTime,
            category: data.category,
            tags: data.tags || [],
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllBlogs(): BlogPost[] {
    if (!fs.existsSync(blogsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogsDirectory);
    
    const allBlogsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            return getBlogContent(slug);
        })
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            } else {
                return -1;
            }
        });

    return allBlogsData;
}
