import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const articlesDir = path.join(contentDir, "articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  cover?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  const articles = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        category: data.category || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        cover: data.cover || undefined,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    category: data.category || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    cover: data.cover || undefined,
    content,
  };
}
