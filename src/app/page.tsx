import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { pillars } from "@/data/pillars";

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-medium tracking-widest mb-4">
              男生进化论 · MASCULINE EVOLUTION
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              21世纪中国大陆男大学生
              <br />
              <span className="text-gold">强势完美</span>
              进化指南
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-xl">
              大学四年，是你人生中最关键的窗口期。这里没有鸡汤，只有可执行的行动框架。
              涵盖学业、体魄、思维、社交、形象、搞钱六大维度，帮你建立一个强势、完美、不可替代的自己。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plan"
                className="inline-flex items-center gap-2 bg-gold text-bg font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors"
              >
                查看行动计划
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/pillars"
                className="inline-flex items-center gap-2 border border-border text-text px-6 py-3 rounded-lg hover:bg-bg-card transition-colors"
              >
                六大进化板块
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            核心<span className="text-gold">理念</span>
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">
            进化不是内卷，是让你成为更好的自己。以下是男生进化论的底层逻辑。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "强势文化",
                desc: "不等、不靠、不抱怨。强者制定规则，弱者遵守规则。你要成为那个制定规则的人，而不是被规则定义的人。",
              },
              {
                title: "系统思维",
                desc: "任何单一维度的优秀都无法构成真正的竞争力。六大板块必须齐头并进，形成系统性的压强效应。",
              },
              {
                title: "长期主义",
                desc: "三年入行，五年懂行，十年称王。真正的进化不是21天速成，而是日复一日的积累和迭代。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Preview */}
      <section className="py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                六大<span className="text-gold">进化板块</span>
              </h2>
              <p className="text-text-muted text-sm">
                全面覆盖男大学生成长的每个维度
              </p>
            </div>
            <Link
              href="/pillars"
              className="text-sm text-gold hover:text-gold-light transition-colors shrink-0"
            >
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={`/pillars#${pillar.id}`}
                className="bg-bg-card border border-border rounded-xl p-5 text-center hover:border-gold/40 hover:-translate-y-1 transition-all group"
              >
                <span className="text-3xl block mb-3">{pillar.icon}</span>
                <h3 className="text-sm font-semibold text-text mb-1 group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-text-muted">
                  {pillar.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latestArticles.length > 0 && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  最新<span className="text-gold">文章</span>
                </h2>
                <p className="text-text-muted text-sm">深度内容，持续更新</p>
              </div>
              <Link
                href="/articles"
                className="text-sm text-gold hover:text-gold-light transition-colors shrink-0"
              >
                查看全部 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="bg-bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-all group"
                >
                  <span className="text-xs text-gold font-medium">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text mt-2 mb-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-xs text-text-muted">
                    {article.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
