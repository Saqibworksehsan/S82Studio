import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projDir = path.join(process.cwd(), 'content/projects');

export type Project = {
  slug: string;
  title: string;
  location: string;
  thumbnail: string;
  images: string[];
  body: string;
};

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projDir);
  return files.map((fn) => {
    const fullPath = path.join(projDir, fn);
    const src = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(src);
    return {
      slug: fn.replace(/\.md$/, ''),
      ...(data as Omit<Project, 'slug' | 'body'>),
      body: content,
    };
  });
}