import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card/50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">导航</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "首页" },
                { href: "/plan", label: "行动计划" },
                { href: "/pillars", label: "六大板块" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">内容</h3>
            <ul className="space-y-2">
              {[
                { href: "/articles", label: "全部文章" },
                { href: "/resources", label: "资源推荐" },
                { href: "/about", label: "关于我" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">板块</h3>
            <ul className="space-y-2">
              {[
                { href: "/pillars#study", label: "学业进化" },
                { href: "/pillars#body", label: "体魄进化" },
                { href: "/pillars#mind", label: "思维进化" },
                { href: "/pillars#social", label: "社交进化" },
                { href: "/pillars#image", label: "形象进化" },
                { href: "/pillars#money", label: "搞钱进化" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text mb-3">关注</h3>
            <p className="text-sm text-text-muted mb-3">
              抖音搜索「男生进化论」获取更多内容
            </p>
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} 男生进化论
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-muted">
            强势文化 × 完美主义 × 持续进化 · 为21世纪中国大陆男大学生而生
          </p>
        </div>
      </div>
    </footer>
  );
}
