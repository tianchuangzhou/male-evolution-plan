export interface Resource {
  title: string;
  type: "book" | "tool" | "course" | "channel";
  description: string;
  link?: string;
  tags: string[];
}

export const resources: Resource[] = [
  // Books
  {
    title: "《原则》— 瑞·达利欧",
    type: "book",
    description:
      "全球最大对冲基金桥水创始人的毕生经验总结。关于决策、系统思维和自我进化的底层逻辑。",
    tags: ["思维", "决策", "必读"],
  },
  {
    title: "《纳瓦尔宝典》— 埃里克·乔根森",
    type: "book",
    description:
      "硅谷传奇天使投资人的财富与幸福指南。关于如何用杠杆和复利思维实现财富自由。",
    tags: ["搞钱", "思维", "必读"],
  },
  {
    title: "《原子习惯》— 詹姆斯·克利尔",
    type: "book",
    description:
      "小习惯带来大改变。一套经过科学验证的习惯养成系统，让你不需要意志力也能坚持。",
    tags: ["习惯", "自律", "必读"],
  },
  {
    title: "《被讨厌的勇气》— 岸见一郎",
    type: "book",
    description:
      "基于阿德勒心理学的通俗读物。帮你摆脱讨好型人格、社交焦虑和过度在意他人眼光。",
    tags: ["社交", "心理", "思维"],
  },
  {
    title: "《穷爸爸富爸爸》— 罗伯特·清崎",
    type: "book",
    description:
      "财商教育的经典入门。让你理解资产与负债的区别，建立基本的财务思维框架。",
    tags: ["搞钱", "理财", "入门"],
  },
  {
    title: "《深度工作》— 卡尔·纽波特",
    type: "book",
    description:
      "在碎片化时代，深度专注的能力已成为超级力量。教你如何在噪音中保持高质量的产出。",
    tags: ["学习", "专注", "思维"],
  },
  {
    title: "《超越自恋》— 让-夏尔·布舒",
    type: "book",
    description:
      "理解自恋型人格，学会在人际关系中保护自己，识别和远离有毒关系。",
    tags: ["社交", "心理"],
  },
  {
    title: "《毛泽东选集》第一卷",
    type: "book",
    description:
      "关于矛盾论、实践论的战略思维。读懂毛选，你会对人性和社会运行有更深的理解。",
    tags: ["思维", "战略", "进阶"],
  },

  // Tools
  {
    title: "Notion",
    type: "tool",
    description:
      "全能型笔记和知识管理工具。搭建你的人生管理系统：任务管理、读书笔记、目标追踪，一个App搞定。",
    link: "https://notion.so",
    tags: ["效率", "知识管理"],
  },
  {
    title: "Obsidian",
    type: "tool",
    description:
      "基于本地Markdown的双链笔记。适合构建个人知识网络，让你的知识点互联形成体系。",
    link: "https://obsidian.md",
    tags: ["效率", "知识管理"],
  },
  {
    title: "Hevy / 训记",
    type: "tool",
    description: "健身训练记录App。追踪每次训练的重量和次数，用数据驱动你的体魄进化。",
    tags: ["健身", "追踪"],
  },
  {
    title: "Anki",
    type: "tool",
    description:
      "基于间隔重复的闪卡记忆工具。考四六级、考研、记任何东西的终极武器。",
    tags: ["学习", "效率"],
  },
  {
    title: "ChatGPT / Claude",
    type: "tool",
    description:
      "AI是你的私人导师。用它来头脑风暴、翻译文献、整理笔记、模拟面试——比你90%的同学更高效。",
    tags: ["效率", "AI"],
  },

  // Channels
  {
    title: "硬核的HeyMatt",
    type: "channel",
    description:
      "专注男性自我提升的优质博主，内容涵盖思维、社交、形象，言之有物不打鸡血。",
    tags: ["综合", "B站"],
  },
  {
    title: "智能路障",
    type: "channel",
    description: "深度拆解商业案例和人生策略，适合培养商业思维和宏观视野。",
    tags: ["思维", "搞钱", "B站"],
  },
  {
    title: "AndyZ_",
    type: "channel",
    description:
      "男装穿搭干货博主，从基础款到进阶搭配，帮你用最少的钱搭出最好的效果。",
    tags: ["形象", "穿搭", "小红书"],
  },
];
