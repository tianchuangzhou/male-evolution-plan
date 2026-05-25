import type { Metadata } from "next";
import { yearPlans } from "@/data/plan";

export const metadata: Metadata = {
  title: "大学四年行动计划",
  description:
    "按大一到大四分阶段，覆盖学业、体魄、思维、社交、形象、搞钱六大维度的完整进化方案。",
};

export default function PlanPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-medium tracking-widest mb-3">
          EVOLUTION ROADMAP
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          大学四年<span className="text-gold">行动计划</span>
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          从踏入校门到毕业起飞，每一年都有明确的主题和目标。
          按图索骥，你也可以成为那个毕业时被所有人羡慕的人。
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {yearPlans.map((year, idx) => (
          <div
            key={year.year}
            className="bg-bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-gold/20">
                  0{idx + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="bg-gold/10 text-gold text-sm font-semibold px-3 py-1 rounded-full">
                      {year.label}
                    </span>
                    <span className="text-lg font-bold text-text">
                      {year.theme}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mt-2 max-w-2xl">
                    {year.description}
                  </p>
                </div>
              </div>

              {/* Goals grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {year.goals.map((goal) => (
                  <div
                    key={goal.category}
                    className="bg-bg/50 border border-border rounded-xl p-4"
                  >
                    <h4 className="text-sm font-semibold text-gold mb-3">
                      {goal.category}
                    </h4>
                    <ul className="space-y-2">
                      {goal.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-text-muted flex items-start gap-2"
                        >
                          <span className="text-gold mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16 p-8 bg-bg-card border border-border rounded-2xl">
        <h2 className="text-xl font-bold mb-3">
          现在，轮到你了
        </h2>
        <p className="text-text-muted mb-6 max-w-lg mx-auto">
          规划再好，不行动也是零。挑一个维度，从今天开始，迈出第一步。
          进化的路上没有终点，但每一步都算数。
        </p>
        <a
          href="/pillars"
          className="inline-flex items-center gap-2 bg-gold text-bg font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors"
        >
          从六大板块开始 →
        </a>
      </div>
    </div>
  );
}
