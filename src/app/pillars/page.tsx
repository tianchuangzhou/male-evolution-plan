import type { Metadata } from "next";
import { pillars } from "@/data/pillars";

export const metadata: Metadata = {
  title: "六大进化板块",
  description:
    "学业、体魄、思维、社交、形象、搞钱——六大维度全面进化，构建不可替代的竞争力。",
};

export default function PillarsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-medium tracking-widest mb-3">
          SIX PILLARS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          六大<span className="text-gold">进化板块</span>
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          单一维度的优秀不是真正的优秀。六大板块构成一个系统，
          只有齐头并进，才能形成碾压级的竞争优势。
        </p>
      </div>

      {/* Pillar cards */}
      <div className="space-y-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            id={pillar.id}
            className="bg-bg-card border border-border rounded-2xl p-6 md:p-8 scroll-mt-20 hover:border-gold/20 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left info */}
              <div className="md:w-64 shrink-0">
                <span className="text-5xl block mb-4">{pillar.icon}</span>
                <h2 className="text-xl font-bold text-text mb-1">
                  {pillar.title}
                </h2>
                <p className="text-xs text-gold font-medium tracking-wider mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Right principles */}
              <div className="flex-1 bg-bg/50 border border-border rounded-xl p-6">
                <h3 className="text-sm font-semibold text-text mb-4">
                  执行标准
                </h3>
                <ul className="space-y-3">
                  {pillar.principles.map((principle, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-muted"
                    >
                      <span className="text-gold font-bold shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
