import type { Metadata } from "next";
import { resources, type Resource } from "@/data/resources";

export const metadata: Metadata = {
  title: "资源推荐",
  description: "书单、工具、课程、博主——男大学生进化路上的必备资源。",
};

const typeLabels: Record<Resource["type"], string> = {
  book: "书单",
  tool: "工具",
  course: "课程",
  channel: "博主/频道",
};

export default function ResourcesPage() {
  const grouped = resources.reduce(
    (acc, r) => {
      if (!acc[r.type]) acc[r.type] = [];
      acc[r.type].push(r);
      return acc;
    },
    {} as Record<string, Resource[]>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-medium tracking-widest mb-3">
          RESOURCES
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          资源<span className="text-gold">推荐</span>
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          进化的路上，你需要好的武器。以下是我筛选过的书单、工具和博主，帮你少走弯路。
        </p>
      </div>

      <div className="space-y-12">
        {(
          ["book", "tool", "channel", "course"] as Resource["type"][]
        ).map((type) => {
          const items = grouped[type];
          if (!items || items.length === 0) return null;

          return (
            <div key={type}>
              <h2 className="text-xl font-bold text-text mb-6 flex items-center gap-3">
                <span className="text-gold">
                  {type === "book"
                    ? "📚"
                    : type === "tool"
                    ? "🔧"
                    : type === "channel"
                    ? "📺"
                    : "🎓"}
                </span>
                {typeLabels[type]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-bg-card border border-border rounded-xl p-5 hover:border-gold/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-text text-sm">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-gold bg-gold/5 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-text-muted hover:text-gold transition-colors ml-auto"
                        >
                          访问 →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
