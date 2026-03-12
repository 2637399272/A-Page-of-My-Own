"use client"

import Image from "next/image"

export default function InternshipPage() {
  return (
    <div className="flex h-full">
      {/* 左页 - 个人项目模块，填满左页 */}
      <div className="w-1/2 p-5 flex flex-col justify-between h-full">
        {/* 左上角项目内容标题 */}
        <div className="flex items-center justify-start relative mb-3">
          <span
            className="text-2xl font-bold"
            style={{
              color: "#f4a460",
              fontFamily: 'cursive, "Comic Sans MS", handwriting',
              letterSpacing: "2px",
            }}
          >
            项目内容
          </span>
        </div>
        {/* AI项目（替换原有项目，保留上下卡片结构） */}
        {/* 
          优化项目区块布局，使“仅三生物产品智能问答平台”卡片能够完整展示在页面上半部分，避免内容被遮挡、紧贴底部；同时使两卡片（上下）内容区有更合理的间距与留白，对标参考图片风格 
        */}
        <div className="flex flex-col gap-5 h-full justify-start">
          {/* 招聘数据智能问答系统 */}
          <div
            className="rounded-lg shadow-md bg-white flex flex-col p-4"
            style={{
              border: "2px solid #4299e1",
              minHeight: 220,
              boxShadow: "0 2px 8px 0 #e4ecfb",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* 蓝色🤖图标 */}
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center shadow"
                style={{
                  background: "linear-gradient(135deg, #60a5fa 0%, #4299e1 100%)",
                  border: "1.5px solid #4299e1",
                }}
              >
                <span className="text-xl">🤖</span>
              </div>
              <span
                className="text-base font-bold title-font"
                style={{ color: "#4299e1" }}
              >
                招聘数据智能问答系统
              </span>
            </div>
            <p className="text-xs mb-1" style={{ color: "#888" }}>
              时间：2025.03 - 2025.05
            </p>
            <div className="mb-2">
              <p
                className="handwriting text-xs leading-relaxed"
                style={{ color: "#33506b", lineHeight: "1.6" }}
              >
                招聘数据分散、检索效率低为行业痛点，项目结合AI独立设计开发，面向求职者构建智能问答平台。使用Python对非结构化招聘文本进行清洗、结构化，构建行业知识库。基于RAG技术实现检索增强生成，并结合向量库，降低大模型幻觉。支持多轮对话、追问与上下文理解，覆盖岗位要求、薪资范围等多维度查询。项目代码已开源至GitHub。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-1 mb-2">
              <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded font-medium">#Python</span>
              <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded font-medium">#RAG</span>
              <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded font-medium">#大模型</span>
              <span className="bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded font-medium">#智能问答</span>
            </div>
            {/* 装饰图标位 */}
            <div className="flex gap-2 mt-1">
              <div className="w-7 h-7 rounded flex items-center justify-center shadow-sm"
                style={{ background: "#60a5fa", border: "1px solid #4299e1" }}
              >
                <span className="text-base">🤖</span>
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center shadow-sm"
                style={{ background: "#f4faff", border: "1px solid #bcdfff" }}
              >
                <span className="text-base">📅</span>
              </div>
            </div>
          </div>
          {/* 仅三生物产品智能问答平台 */}
          <div
            className="rounded-lg shadow-md bg-white flex flex-col p-4"
            style={{
              border: "2px solid #38b48e",
              minHeight: 230,
              boxShadow: "0 2px 8px 0 #e4fbf3",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* 绿色🧪图标 */}
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center shadow"
                style={{
                  background: "linear-gradient(135deg, #9ae6b4 0%, #38b48e 100%)",
                  border: "1.5px solid #38b48e",
                }}
              >
                <span className="text-xl">🧪</span>
              </div>
              <span
                className="text-base font-bold title-font"
                style={{ color: "#38b48e" }}
              >
                仅三生物产品智能问答平台
              </span>
            </div>
            <p className="text-xs mb-1" style={{ color: "#888" }}>
              时间：2026.03 - 2026.03
            </p>
            <div className="mb-2">
              <p
                className="handwriting text-xs leading-relaxed"
                style={{ color: "#246152", lineHeight: "1.6" }}
              >
                求职实践项目，结合AI独立开发，为仅三生物打造面向外部客户的智能产品问答工具。读取CSV结构化数据，构建企业级产品知识库，采用关键词匹配加大模型生成的混合模式，兼顾准确性与响应速度。支持控制台及网页两种交互方式，极速部署至公司内部系统。覆盖5+核心产品线，支持成分、功效、适用人群等信息多维查询，代码已开源至GitHub。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-1 mb-2">
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">#Python</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">#大模型</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">#数据处理</span>
            </div>
            {/* 装饰图标位 */}
            <div className="flex gap-2 mt-1">
              <div className="w-7 h-7 rounded flex items-center justify-center shadow-sm"
                style={{ background: "#9ae6b4", border: "1px solid #38b48e" }}
              >
                <span className="text-base">🧪</span>
              </div>
              <div className="w-7 h-7 rounded flex items-center justify-center shadow-sm"
                style={{ background: "#e7fce7", border: "1px solid #a7f5a7" }}
              >
                <span className="text-base">❓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右页 - 实习经历 + 技能成长树 */}
      <div className="w-1/2 p-5 flex flex-col h-full">
        {/* 标题行 - 橙色手写体右对齐 */}
        <div className="flex items-center justify-end relative mb-3">
          <span
            className="text-2xl font-bold"
            style={{
              color: "#f4a460",
              fontFamily: 'cursive, "Comic Sans MS", handwriting',
              letterSpacing: "2px",
            }}
          >
            实习经历
          </span>
        </div>
        {/* 上：书桌插画 + 实习公司卡片 并排 */}
        <div className="flex gap-4 mb-3">
          {/* 左：书桌插画（小一些，纵向居中） */}
          <div className="w-1/2 flex-shrink-0 flex items-center justify-center">
            <div
              className="rounded-lg overflow-hidden shadow-md"
              style={{
                border: "2px solid #d4a574",
                width: "100%",
                maxWidth: 250,
                minHeight: 200,
                background: "#fcf4ec"
              }}
            >
              <Image
                src="/images/boss.jpg"
                alt="书桌插画"
                width={250}
                height={200}
                className="w-full h-full object-cover"
                style={{ minHeight: 108 }}
              />
            </div>
          </div>
          {/* 右：实习公司卡片，紧凑、缩小 */}
          <div
            className="flex-[1.5] flex flex-col justify-center bg-[#fff8f0] p-5 rounded-xl shadow-md"
            style={{ border: "1.5px solid #d4a574", minWidth: 0, minHeight: 170 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                style={{ background: "#4299e1" }}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-bold title-font text-lg" style={{ color: "#5d4e37" }}>
                实习公司
              </span>
            </div>
            <p className="text-sm mb-2" style={{ color: "#888", whiteSpace: "pre-line" }}>
              时间：2025.09 - 至今
              公司：中电福富信息有限公司
              实习岗位：产品实习生
            </p>
            <p className="handwriting text-sm leading-relaxed" style={{ color: "#5d4e37" }}>
            主要负责客户需求实施全流程，对接客户，梳理并设计需求方案，推动需求落地执行；日均响应客户问题，保障项目顺利交付。
            </p>
          </div>
        </div>
        {/* 下：技能成长树卡片 */}
        <div
          className="bg-[#fff8f0] mt-0 p-3 flex-initial rounded-lg shadow-sm flex flex-col justify-start"
          style={{ border: "1px solid #d4a574", minHeight: 74, maxHeight: 110 }}
        >
          <div
            className="text-base font-bold mb-1"
            style={{
              color: "#f4a460",
              fontFamily: 'cursive, "Comic Sans MS", handwriting',
              letterSpacing: "2px",
            }}
          >
            技能成长树
          </div>
          <div className="handwriting text-xs mb-1 flex flex-col gap-0.5" style={{ color: "#5d4e37" }}>
            <span>
              <span className="text-sm mr-1">🌱</span>
              <b>基础：</b>
              需求沟通 / 问题排查 / 文档撰写
            </span>
            <span>
              <span className="text-sm mr-1">🌿</span>
              <b>进阶：</b>
              需求分析与方案设计 / 项目落地推进 / 客户服务
            </span>
            <span>
              <span className="text-sm mr-1">🌳</span>
              <b>应用：</b>
              跨方协作 / 业务场景理解
            </span>
          </div>
        </div>
        {/* ✨ 实习成果/个人小结 ✨ */}
        <div
          className="mt-2"
          style={{
            background: "#fff8f0",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 4px 0 #f3dfc5, 0 0.5px 2.5px 0 #fbe8d6",
            padding: "0.64rem 0.85rem",
            border: "1px dashed #f4a460",
            fontFamily: 'handwriting, cursive, "Comic Sans MS"',
            marginTop: "0.5rem",
            maxWidth: "100%",
            width: "99%",
            minHeight: 70,
          }}
        >
          <div
            className="mb-0.5"
            style={{
              color: "#f4a460",
              fontFamily: 'cursive, "Comic Sans MS", handwriting',
              fontWeight: "bold",
              fontSize: "0.97rem",
              letterSpacing: "0.05em",
              lineHeight: "1.35"
            }}
          >
            ✨ 实习小记 ✨
          </div>
          <div
            className="handwriting"
            style={{
              color: "#5d4e37",
              fontSize: "0.85rem",
              lineHeight: "1.55",
              letterSpacing: "0.05em",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            <span style={{display:'block',marginBottom:'0.18em'}}>✅ <b>沟通力</b>：从「怕对接」到「主动聊」；</span>
            <span style={{display:'block',marginBottom:'0.18em'}}>✅ <b>落地力</b>：从「会写代码」到「能落地需求」；</span>
            <span>✅ <b>成长力</b>：保持空杯，做大做强💪</span>
          </div>
        </div>
      </div>
    </div>
  )
}
