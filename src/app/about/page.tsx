import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description:
    "关于男生进化论——为21世纪中国大陆男大学生打造的自我提升体系。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-medium tracking-widest mb-3">
          ABOUT
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          关于<span className="text-gold">男生进化论</span>
        </h1>
      </div>

      {/* Mission */}
      <div className="bg-bg-card border border-border rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-text mb-4">这个网站的使命</h2>
        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            21世纪的中国大陆男大学生，生活在一个前所未有的时代。信息爆炸、竞争加剧、性别关系重塑，
            传统的男性范式已经失效，但新的范式尚未建立。
          </p>
          <p>
            <strong className="text-text">男生进化论</strong>想做一件事：
            为这个时代的男大学生，提供一个系统的、可执行的自我进化框架。
          </p>
          <p>
            这里没有鸡汤，没有速成攻略，没有割韭菜的课程。有的只是对
            <span className="text-gold">学业、体魄、思维、社交、形象、搞钱</span>
            六大维度的严肃思考，和一个大学四年的完整行动计划。
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="bg-bg-card border border-border rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-text mb-4">我的故事</h2>
        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            和你一样，我是一个普通的中国大陆男大学生。刚进大学时，我也迷茫、焦虑、不知所措。
          </p>
          <p>
            大一混日子，大二开始觉醒。健身、读书、学技能、搞副业、社交突破——
            每一步都不容易，但每一步都值得。
          </p>
          <p>
            到了大三，我发现身边的人开始分化：有人原地踏步，有人加速起飞。
            差距的来源，不是天赋，而是有没有一套系统的进化框架。
          </p>
          <p>
            我把自己踩过的坑、试过的路、验证过的方法总结成这个网站，
            希望能帮到和我一样想在大学四年完成蜕变的人。
          </p>
        </div>
      </div>

      {/* Social / Douyin */}
      <div className="bg-bg-card border border-gold/20 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-text mb-3">
          关注我的<span className="text-gold">抖音</span>
        </h2>
        <p className="text-text-muted mb-6 leading-relaxed">
          抖音搜索「<span className="text-gold font-semibold">男生进化论</span>」，
          我会在那里持续分享关于男大学生自我进化的短视频内容。
          每天一条，陪你从普通走向强大。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-bg border border-border rounded-xl p-4 text-left">
            <p className="text-xs text-text-muted mb-1">抖音号</p>
            <p className="text-lg font-bold text-gold">男生进化论</p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-4 text-left">
            <p className="text-xs text-text-muted mb-1">更新频率</p>
            <p className="text-lg font-bold text-text">每天一条</p>
          </div>
          <div className="bg-bg border border-border rounded-xl p-4 text-left">
            <p className="text-xs text-text-muted mb-1">内容方向</p>
            <p className="text-lg font-bold text-text">男大学生成长</p>
          </div>
        </div>
      </div>
    </div>
  );
}
