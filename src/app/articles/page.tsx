import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "全部文章",
  description: "关于男大学生自我进化的深度内容。持续更新中。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  if (articles.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest mb-3">
            ARTICLES
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            全部<span className="text-gold">文章</span>
          </h1>
          <p className="text-text-muted">
            还没有文章，但内容正在路上。关注抖音获取最新动态。
          </p>
        </div>
        <div className="text-center py-20">
          <p className="text-text-muted text-lg mb-4">📝</p>
          <p className="text-text-muted">文章正在撰写中，敬请期待</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold mt-6 hover:text-gold-light transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-medium tracking-widest mb-3">
          ARTICLES
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          全部<span className="text-gold">文章</span>
        </h1>
        <p className="text-text-muted">
          深度内容，持续更新。关于进化的一切，都在这里。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-gold font-medium bg-gold/10 px-2 py-0.5 rounded">
                {article.category}
              </span>
              <span className="text-xs text-text-muted">{article.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-text mb-2 group-hover:text-gold transition-colors">
              {article.title}
            </h2>
            <p className="text-text-muted text-sm line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-text-muted bg-bg border border-border px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
