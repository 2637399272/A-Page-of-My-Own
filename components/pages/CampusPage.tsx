"use client"

import Image from "next/image"

export default function CampusPage() {
  const timelineEvents = [
    { year: "入学", active: true, labelTop: "2022年" },
    { year: "参加学生会、社团活动", active: true },
    { year: "获得奖项", active: true },
    { year: "即将毕业典礼", active: false, labelTop: "2026年" },
  ]

  return (
    <div className="flex h-full">
      {/* 左页 - 个人简介 */}
      <div className="w-1/2 p-5 relative">
        <h2 className="text-2xl font-bold mb-3 title-font" style={{ color: "#f4a460" }}>
          校园一日游
        </h2>

        {/* 我的校园打卡点 */}
        <div className="mb-3">
          {/* 橙色手写标题 */}
          <h3
            className="text-lg font-bold mb-1 title-font font-handwriting"
            style={{
              color: "#f4a460",
              letterSpacing: "0.04em"
            }}
          >
            我的校园打卡点
          </h3>
          {/* 浅橙色横线装饰 */}
          <div
            className="h-1 w-20 rounded mb-2"
            style={{ background: "#ffd295" }}
          />
          {/* 打卡清单与照片排布 */}
          <div className="flex flex-row gap-5 items-start">
            {/* 清单列表（左） */}
            <div className="handwriting text-sm leading-loose" style={{ color: "#5d4e37", lineHeight: "2.3" }}>
              <div className="flex items-center mb-1.5">
                <span className="mr-2" style={{ fontSize: "1.1em" }}>✅</span>
                <span className="mr-1" style={{ fontSize: "1.07em" }}>📚</span>
                <span>图书馆：自习圣地</span>
              </div>
              <div className="flex items-center mb-1.5">
                <span className="mr-2" style={{ fontSize: "1.1em" }}>✅</span>
                <span className="mr-1" style={{ fontSize: "1.07em" }}>🏃</span>
                <span>运动场：挥洒汗水</span>
              </div>
              <div className="flex items-center mb-1.5">
                <span className="mr-2" style={{ fontSize: "1.1em" }}>✅</span>
                <span className="mr-1" style={{ fontSize: "1.07em" }}>🍚</span>
                <span>食堂：干饭天堂</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2" style={{ fontSize: "1.1em" }}>⭕</span>
                <span className="mr-1" style={{ fontSize: "1.07em" }}>☕</span>
                <span>书吧：还没打卡！</span>
              </div>
            </div>
            {/* 校园打卡照片（右） */}
            <div className="flex flex-col items-center min-w-[200px] max-w-[300px] flex-1 mt-1">
              {/* 浅米色横线背景 */}
              <div
                className="relative flex items-center justify-center w-full"
              >
                <div
                  style={{
                    borderRadius: "8px",
                    border: "2px solid #d4a574",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px 0 #c7a67833",
                    background: "#faf5ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "250px",
                    height: "120px"
                  }}
                >
                  <Image
                    src="/images/p2.jpg"
                    alt="阳光午后"
                    width={250}
                    height={120}
                    className="object-cover w-full h-full"
                    style={{
                      borderRadius: "7px",
                      filter:
                        "brightness(0.96) saturate(1.08) contrast(0.98)", 
                    }}
                  />
                </div>
              </div>
              {/* 照片下方手写小字说明 */}
              <div
                className="mt-1.5 text-[0.87rem] handwriting text-center"
                style={{
                  color: "#5d4e37",
                  lineHeight: "1.75",
                  letterSpacing: "0.005em"
                }}
              >
                阳光穿过教室的午后，是青春最温柔的模样✨
              </div>
            </div>
          </div>
        </div>

        {/* 校园生活板块 */}
        <h3 className="text-lg font-bold mb-2 title-font" style={{ color: "#5d4e37" }}>
          校园生活
        </h3>

        {/* 校园地图图片 */}
        <div 
          className="rounded-lg overflow-hidden h-32 mb-3 shadow-md"
          style={{ border: "2px solid #d4a574" }}
        >
          <Image
            src="/images/sc1.jpg"
            alt="校园地图"
            width={400}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 所获荣誉 */}
        <h3 className="text-lg font-bold mb-1 title-font" style={{ color: "#5d4e37" }}>
          所获荣誉奖项
        </h3>
        <div className="handwriting text-xs leading-relaxed" style={{ color: "#666" }}>
          <p>福大校级三好学生、优秀共青团员</p>
          <p>综合排名专业前30%，多次获得校级奖学金</p>
          <p>积极参与各类志愿服务活动，荣获福大校级星级志愿者称号等荣誉称号</p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 rounded shadow-sm" style={{ background: "#ff6b6b" }} />
          <div className="w-6 h-6 rounded shadow-sm" style={{ background: "#ffb6c1" }} />
          <div className="w-6 h-6 rounded shadow-sm" style={{ background: "#87ceeb" }} />
        </div>
      </div>

      {/* 右页 - 校园地图与时间线 */}
      <div className="w-1/2 p-5 relative">
        {/* 装饰元素 */}
        <div className="absolute top-2 right-4 text-yellow-400 text-sm">*</div>
        <div className="absolute top-6 right-10 text-yellow-300 text-xs">*</div>

        {/* 顶部时间线 */}
        <div className="mb-3 relative px-2">
          <div className="flex items-center justify-between relative z-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-4 flex items-end mb-0.5">
                  {event.labelTop && (
                    <span
                      className="text-[0.65rem] title-font whitespace-nowrap"
                      style={{ color: "#c39265" }}
                    >
                      {event.labelTop}
                    </span>
                  )}
                </div>
                <div
                  className="w-4 h-4 rounded-full shadow-md"
                  style={{ background: event.active ? "#ff6b6b" : "#87ceeb" }}
                />
                <span className="text-xs mt-1 title-font whitespace-nowrap" style={{ color: "#5d4e37" }}>
                  {event.year}
                </span>
              </div>
            ))}
          </div>
          {/* 时间线主线 */}
          <div 
            className="absolute top-6 left-6 right-6 h-0.5 -z-0"
            style={{ background: "#ffd700" }}
          />
        </div>

        {/* 校园地图 */}
        <div 
          className="rounded-lg overflow-hidden relative shadow-md"
          // 调整图片高度，小一些，比如 h-36
          style={{ border: "2px solid #d4a574", height: "9rem" }}
        >
          <Image
            src="/images/campus-map.jpg"
            alt="校园地图"
            fill
            className="object-cover"
            // 优先控制外层div的高度
            style={{ objectFit: "cover" }}
          />
          {/* 覆盖标签 */}
          <div className="absolute inset-0 p-2">
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs title-font" style={{ background: "rgba(255,255,255,0.9)", color: "#5d4e37" }}>
              运动场
            </div>
            <div className="absolute bottom-8 left-4 px-2 py-0.5 rounded text-xs title-font" style={{ background: "rgba(255,255,255,0.9)", color: "#5d4e37" }}>
              图书馆
            </div>
            <div className="absolute top-12 right-2 px-2 py-0.5 rounded text-xs title-font" style={{ background: "rgba(255,255,255,0.9)", color: "#5d4e37" }}>
              书吧
            </div>
            <div className="absolute bottom-2 right-4 px-2 py-0.5 rounded text-xs title-font" style={{ background: "rgba(255,255,255,0.9)", color: "#5d4e37" }}>
              宿舍楼
            </div>
          </div>
        </div>
      {/* 我的在校实践手账 */}
      <div
        className="mt-1 flex flex-col items-center relative"
        style={{
          background: "repeating-linear-gradient(0deg,#fdf8f2 0px,#fdf8f2 28px,#f6ecd8 29px,#f6ecd8 32px)",
          borderRadius: "18px",
          boxShadow: "0 3px 18px 0 #f9e0bd50",
          padding: "1rem 0.6rem 1.3rem 0.6rem",
          marginBottom: "8px",
          width: "100%",
        }}
      >
        {/* 橙色手写标题 + 横线 */}
        <h3
          className="font-handwriting mb-0.5 text-lg title-font"
          style={{
            color: "#f4a460",
            letterSpacing: "0.04em",
            fontWeight: 700,
            whiteSpace: "nowrap"
          }}
        >
          我的在校实践手账
        </h3>
        <div
          className="h-1 rounded mb-1"
          style={{ background: "#ffd295", width: "90px" }}
        />

        {/* 横向可滚动便签卡片区 */}
        <div
          className="flex flex-row items-stretch gap-3 w-full overflow-x-auto pb-3"
          style={{
            maxWidth: "100%",
            minHeight: 230,
            scrollbarWidth: "thin",
            padding: "0 0.5rem",
            justifyContent: "flex-start"
          }}
        >
          {/* 卡片1 */}
          <div
            className="flex flex-col items-center flex-shrink-0 relative"
            style={{
              background: "#fbf6e8",
              border: "2px solid #d2af8d",
              borderRadius: "14px",
              boxShadow: "0 3px 10px 0 #efd7bb29",
              minWidth: 170,
              width: 240,
              maxWidth: 210,
              padding: "1rem 0.9rem 1.1rem 0.9rem",
            }}
          >
            {/* 竖排标题及装饰 */}
            <div
              className="flex items-center justify-center mb-1"
              style={{ marginBottom: "2px" }}
            >
              <span
                className="font-handwriting"
                style={{
                  color: "#f4a460",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                  fontSize: "1.04rem",
                  marginRight: "0.5em",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  计算机工程系团委
                  <br />
                  学生会副主席
                </span>
              </span>
              <span
                style={{
                  fontSize: "1.15rem"
                }}
                aria-label="idea"
              >
                💡
              </span>
            </div>
            <div
              className="text-xs font-bold handwriting mb-0.5"
              style={{ color: "#c39265", marginTop: "2px" }}
            >
              📅 2024.07 - 2025.07
            </div>
            {/* 核心关键词 */}
            <div
              className="flex flex-wrap justify-center gap-1 mb-0"
              style={{ marginTop: "2px" }}
            >
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨活动策划</span>
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨项目管理</span>
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨跨方沟通</span>
            </div>
            {/* 描述 */}
            <div
              className="text-[0.9em] handwriting text-left"
              style={{
                color: "#5d4e37",
                letterSpacing: "0.02em",
                lineHeight: "1.7",
                marginTop: "4px",
                fontSize: "0.85rem"
              }}
            >
              策划执行志愿活动10+场；负责活动全流程，锻炼需求分析到落地执行的闭环能力；对接多方资源，提升协作与沟通表达能力。
            </div>
          </div>
          {/* 卡片2 */}
          <div
            className="flex flex-col items-center flex-shrink-0 relative"
            style={{
              background: "#fbf6e8",
              border: "2px solid #d2af8d",
              borderRadius: "14px",
              boxShadow: "0 2px 9px 1px #d2af8d20",
              minWidth: 170,
              width: 200,
              maxWidth: 210,
              padding: "1rem 0.9rem 1.1rem 0.9rem",
            }}
          >
            {/* 横板标题及装饰 */}
            <div
              className="flex flex-row items-center justify-center w-full mb-1"
              style={{ gap: "0.4em" }}
            >
              <span
                className="font-handwriting"
                style={{
                  color: "#f4a460",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                  fontSize: "1.01rem",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ display: "inline-block", width: "100%", textAlign: "center" }}>
                  院青年志愿者协会<br />副会长
                </span>
              </span>
              <span
                style={{
                  fontSize: "1.10rem",
                  marginLeft: "0.18em"
                }}
                aria-label="star"
              >
                🌟
              </span>
            </div>
            <div
              className="text-xs font-bold handwriting mb-0.5"
              style={{ color: "#c39265", marginTop: "2px" }}
            >
              📅 2024.09 - 2025.07
            </div>
            {/* 核心关键词 */}
            <div
              className="flex flex-wrap justify-center gap-1 mb-0"
              style={{ marginTop: "2px" }}
            >
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨数据管理</span>
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨大型活动统筹</span>
            </div>
            {/* 描述 */}
            <div
              className="text-[0.9em] handwriting text-left"
              style={{
                color: "#5d4e37",
                letterSpacing: "0.02em",
                lineHeight: "1.7",
                marginTop: "4px",
                fontSize: "0.85rem"
              }}
            >
              负责全院志愿数据统计与活动申请审批，用Excel管理全院志愿数据，提升工作效率；统筹150+名志愿者，保障校运会、校庆等大型活动。
            </div>
          </div>
          {/* 凤湖社区卡片 */}
          <div
            className="flex flex-col items-center flex-shrink-0 relative"
            style={{
              background: "#fbf6e8",
              border: "2px solid #d2af8d",
              borderRadius: "14px",
              boxShadow: "0 3px 10px 0 #efd7bb29",
              minWidth: 170,
              width: 240,
              maxWidth: 210,
              padding: "1rem 0.9rem 1.1rem 0.9rem",
            }}
          >
            {/* 竖排标题及装饰 */}
            <div
              className="flex items-center justify-center mb-1"
              style={{ marginBottom: "2px" }}
            >
              <span
                className="font-handwriting"
                style={{
                  color: "#f4a460",
                  letterSpacing: "0.07em",
                  fontWeight: 600,
                  fontSize: "1.04rem",
                  marginRight: "0.5em",
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ display: "block", textAlign: "center" }}>
                  凤湖社区
                  <br />
                  团支部副书记
                </span>
              </span>
              <span
                style={{
                  fontSize: "1.15rem"
                }}
                aria-label="community"
              >
                🏠
              </span>
            </div>
            <div
              className="text-xs font-bold handwriting mb-0.5"
              style={{ color: "#c39265", marginTop: "2px" }}
            >
              📅 2023.10 - 2025.07
            </div>
            {/* 核心关键词 */}
            <div
              className="flex flex-wrap justify-center gap-1 mb-0"
              style={{ marginTop: "2px" }}
            >
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨用户洞察</span>
              <span className="text-xs handwriting" style={{ color: "#f4a460" }}>✨创新实践</span>
            </div>
            {/* 描述 */}
            <div
              className="text-[0.9em] handwriting text-left"
              style={{
                color: "#5d4e37",
                letterSpacing: "0.02em",
                lineHeight: "1.7",
                marginTop: "4px",
                fontSize: "0.85rem"
              }}
            >
              深入社区开展入户走访，服务居民超200人次，精准把握不同年龄层用户需求；结合专业知识，策划适老化服务与少儿编程教学活动10+场，展现了用技术赋能服务的能力。
            </div>
          </div>
          {/* 迷你待办贴纸卡片 */}
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 relative"
            style={{
              minWidth: 120,
              maxWidth: 120,
              width: 120,
              background: "#fbf6e8",
              border: "2px solid #d2af8d",
              borderRadius: "14px",
              boxShadow: "0 3px 10px 0 #efd7bb29",
              marginLeft: "12px",
              marginRight: "2px",
              padding: "0.8rem 0.6rem 1rem 0.6rem",
            }}
            aria-label="未完待续"
          >
            {/* 上方手写标题，浮动动画 */}
            <span
              className="font-handwriting animate-bounce"
              style={{
                color: "#f4a460",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.06em",
                marginBottom: "0.3em",
                textAlign: "center",
                whiteSpace: "nowrap",
                display: "block",
                animation: "bouncy-future 1.4s infinite"
              }}
            >
              未完待续
            </span>
            {/* 下方描述 */}
            <span
              className="text-xs handwriting block"
              style={{
                color: "#c39265",
                marginTop: "0.6em",
                textAlign: "center"
              }}
            >
              下一段旅程，<br />加载中...
            </span>
            {/* 自定义浮动动画keyframes */}
            <style>
              {`
                @keyframes bouncy-future {
                  0%, 100% { transform: translateY(0); }
                  20% { transform: translateY(-4px);}
                  40% { transform: translateY(-7px);}
                  60% { transform: translateY(-4px);}
                  80% { transform: translateY(0);}
                }
                .animate-bounce {
                  animation-name: bouncy-future !important;
                  animation-duration: 1.4s !important;
                  animation-iteration-count: infinite !important;
                }
              `}
            </style>
          </div>
        </div>
        {/* 提示：左右滑动查看更多卡片（固定） */}
        <div className="text-[11px] text-gray-400 mt-1" style={{ whiteSpace: "nowrap" }}>
          （可左右滑动查看完整内容）
        </div>
        {/* 右下角“滑动探索更多，未来可期”标语 */}
        <div
          className="absolute"
          style={{
            fontSize: "11.5px",
            color: "#c39265",
            right: "18px",
            bottom: "8px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            fontFamily: "inherit"
          }}
        >
          （滑动探索更多，未来可期✨）
        </div>
      </div>
      </div>
    </div>
  )
}
