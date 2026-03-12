"use client"

import Image from "next/image"

export default function AboutPage() {
  const activities = [
    { label: "综艺", image: "/images/movie.jpg" },
    { label: "小说", image: "/images/book.jpg" },
    { label: "盲盒收藏", image: "/images/mong.jpg" },
    { label: "漫画", image: "/images/movie1.jpg" },
    { label: "旅行", image: "/images/see.jpg" },
    { label: "追星", image: "/images/zlh.jpg" },
  ]

  return (
    <div className="flex h-full">
      {/* Left Page - Photo Grid */}
      <div className="w-1/2 p-6">
        <div className="grid grid-cols-2 gap-3 h-full">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden flex flex-col relative shadow-md"
              style={{ border: "2px solid #d4a574" }}
            >
              <div className="flex-1 relative">
                <Image
                  src={activity.image}
                  alt={activity.label}
                  fill
                  className="object-cover"
                />
              </div>
              <p 
                className="text-center py-1.5 text-sm font-bold title-font"
                style={{ color: "#5d4e37", background: "#fef9f0" }}
              >
                {activity.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Page - Self Introduction */}
      <div className="w-1/2 p-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-yellow-400 text-xl">*</div>
        <div className="absolute top-10 right-12 text-yellow-300 text-sm">*</div>
        <div className="absolute top-20 left-4 text-pink-300 text-sm">*</div>
        <div className="absolute bottom-20 right-8 text-pink-400 text-lg">*</div>
        <div className="absolute bottom-8 left-8 text-blue-300 text-sm">*</div>

        {/* Title */}
        <h2 
          className="text-4xl font-bold mb-6 title-font text-center"
          style={{ color: "#f4a460" }}
        >
          自我介绍
          <div className="h-1 w-32 mx-auto mt-2 rounded" style={{ background: "linear-gradient(90deg, #87ceeb, #ffb6c1)" }} />
        </h2>

        {/* Introduction Sections */}
        <div className="space-y-5">
          {/* Section 1 */}
          <div className="relative">
            <div className="flex items-start gap-3">
              {/* 橙色圆点标记 */}
              <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#f4a460" }} />
              <div>
                <h3 
                  className="text-lg font-bold mb-2 font-handwriting inline-block"
                  style={{ color: "#f4a460", letterSpacing: '0.04em' }}
                >
                  碎碎念
                  <div className="h-0.5 w-full rounded" style={{ background: "#87ceeb" }} />
                </h3>
                <p className="handwriting text-sm leading-relaxed" style={{ color: "#5d4e37" }}>
                  我来自福州大学至诚学院计算机工程系的郑玥，是个性格开朗乐观的女生，我都m b t i是小蝴蝶infp🦋。
                  在学校里，我积极参加各类活动，不仅收获了知识，也认识了许多志同道合的伙伴。
                  曾担任学生会成员和参加多个社团，学习和生活都充满了成长的痕迹。
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - 新增课余热爱 */}
          <div className="relative">
            <div className="flex items-start gap-3">
              {/* 橙色圆点标记 */}
              <div className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#f4a460" }} />
              <div>
                <h3 
                  className="text-lg font-bold mb-2 font-handwriting inline-block"
                  style={{ color: "#f4a460", letterSpacing: '0.04em' }}
                >
                  充电站
                  <div className="h-0.5 w-full rounded" style={{ background: "#ffd295" }} />
                </h3>
                <p className="handwriting text-sm leading-relaxed" style={{ color: "#5d4e37" }}>
                  在课余时光，我也拥有一个属于自己的“快乐小世界”：
                  <br />
                  喜欢追各种综艺节目，让欢笑为每天补充元气；沉浸在小说和漫画的故事里，跟随角色体验不同人生的精彩；
                  收集可爱的盲盒，每一次拆盒都充满了小小的期待和惊喜；也常常向往远方的风景，用旅行记录山川湖海的治愈时光。
                  <br />
                  当然，还有为喜欢的明星“闪光”应援，在星光与梦想里汲取前行的动力。
                  <br />
                  这些热爱和生活的细小片段，让平凡的日子变得鲜活且温暖。我始终相信，带着热忱去生活，在技术与热爱之间双向奔赴，
                  一定可以成为更温柔、更有力量的自己。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-4 right-6 flex gap-3">
          <div className="w-4 h-4 rounded-full" style={{ background: "#ffb6c1" }} />
          <div className="w-4 h-4 rounded-full" style={{ background: "#ff6b6b" }} />
          <div className="w-4 h-4 rounded-full" style={{ background: "#87ceeb" }} />
        </div>
      </div>
    </div>
  )
}
