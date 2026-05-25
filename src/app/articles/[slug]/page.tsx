import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "文章未找到" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <Link
        href="/articles"
        className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1 mb-8"
      >
        ← 返回文章列表
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-gold font-medium bg-gold/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-text-muted">{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-muted bg-bg-card border border-border px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert prose-gold max-w-none">
          {article.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-xl font-bold text-text mt-10 mb-4"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-semibold text-text mt-8 mb-3"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li
                  key={i}
                  className="text-text-muted leading-relaxed ml-4 mb-1 list-disc list-outside"
                >
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.trim() === "") {
              return <div key={i} className="h-4" />;
            }
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-gold pl-4 my-4 text-text-muted italic"
                >
                  {line.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={i} className="text-text-muted leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </div>
      </article>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/articles"
          className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
        >
          ← 返回文章列表
        </Link>
      </div>
    </div>
  );
}
