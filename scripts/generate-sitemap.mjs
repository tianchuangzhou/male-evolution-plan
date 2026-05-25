import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "https://tianchuangzhou.github.io/male-evolution-plan";
const publicDir = path.join(__dirname, "..", "public");
const contentDir = path.join(__dirname, "..", "content", "articles");

const staticPages = [
  { path: "", priority: "1.0" },
  { path: "/plan", priority: "0.9" },
  { path: "/pillars", priority: "0.9" },
  { path: "/articles", priority: "0.8" },
  { path: "/resources", priority: "0.7" },
  { path: "/about", priority: "0.6" },
];

const articles = fs.existsSync(contentDir)
  ? fs
      .readdirSync(contentDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
  : [];

const now = new Date().toISOString().split("T")[0];

const urls = [
  ...staticPages.map(
    (p) =>
      `  <url><loc>${BASE}${p.path}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${p.priority}</priority></url>`
  ),
  ...articles.map(
    (slug) =>
      `  <url><loc>${BASE}/articles/${slug}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log(`Sitemap generated with ${urls.length} URLs`);
