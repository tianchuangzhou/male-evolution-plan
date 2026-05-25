import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const isProd = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: {
    default: "男生进化论 — 21世纪男大学生强势完美进化指南",
    template: "%s | 男生进化论",
  },
  description:
    "为21世纪中国大陆男大学生量身打造的自我提升体系。涵盖学业、体魄、思维、社交、形象、搞钱六大维度，提供大学四年的完整行动计划。",
  keywords: [
    "男生进化",
    "男大学生",
    "自我提升",
    "男性成长",
    "大学计划",
    "强势文化",
    "两性关系",
    "穿搭",
    "健身",
    "理财",
  ],
  openGraph: {
    title: "男生进化论 — 21世纪男大学生强势完美进化指南",
    description:
      "学业、体魄、思维、社交、形象、搞钱——六大维度，大学四年完整行动计划。",
    type: "website",
    locale: "zh_CN",
    siteName: "男生进化论",
  },
  twitter: {
    card: "summary_large_image",
    title: "男生进化论 — 男大学生强势进化指南",
    description:
      "学业、体魄、思维、社交、形象、搞钱——六大维度，大学四年完整行动计划。",
  },
  alternates: {
    canonical: "https://tianchuangzhou.github.io/male-evolution-plan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
