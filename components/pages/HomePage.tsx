"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex h-full">
      {/* 左侧页面 */}
      <div className="w-1/2 p-6 flex flex-col">
        <h2 className="text-3xl font-bold mb-4 title-font" style={{ color: "#f4a460" }}>
          首页
        </h2>

        {/* 个人信息 */}
        <div className="flex gap-4 mb-5">
          <div 
            className="w-28 h-32 rounded-lg overflow-hidden flex-shrink-0 shadow-md"
            style={{ border: "3px solid #d4a574" ,width: "120px",height: "170px"
            }}
          >
            <Image
              src="/images/avatar.png"
              alt="个人照片"
              width={120}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="handwriting text-sm leading-relaxed" style={{ color: "#5d4e37" }}>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>姓名：</span>郑玥</p>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>性别：</span>女</p>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>专业：</span>计算机科学与技术</p>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>政治面貌：</span>中共党员</p>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>爱好：</span>阅读、旅行、看综艺</p>
            <p className="mb-1.5"><span className="font-bold" style={{ color: "#f4a460" }}>状态：</span>热爱生活的大学生</p>
            <p className="text-xs mt-2 italic" style={{ color: "#888" }}>梦想过上猫狗双全的日子！！</p>
          </div>
        </div>

        {/* 校园生活预览 */}
        <div
          className="mb-6 relative"
  
        >
          {/* 左侧的“校园生活”标题 */}
          <h3
            className="text-lg font-bold mb-4 pl-1 title-font"
            style={{
              color: "#5d4e37",
              letterSpacing: "0.03em",
              position: "absolute",
              left: 30,
              top: 10,
              textAlign: "left",
              zIndex: 2
            }}
          >
            <span style={{
              display: "block",
              fontWeight: 800,
              fontSize: "1.3rem",
              letterSpacing: "0.09em"
            }}>校园生活</span>
          </h3>
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              width: "100%",
              maxWidth: 470,
              justifyItems: "center",
              alignItems: "center",
              margin: "56px auto 0 auto" 
            }}
          >
            {/* 第一行 */}
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/school1.png"
                  alt="迎新日"
                  width={111}
                  height={70}
                  className="object-contain"
                  style={{ borderRadius: "6px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/school2.png"
                  alt="秋季"
                  width={111}
                  height={70}
                  className="object-contain"
                  style={{ borderRadius: "6px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/tree shadow1.png"
                  alt="草坪时光"
                  width={111}
                  height={70}
                  className="object-contain"
                  style={{ borderRadius: "6px", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* 第二行 */}
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/school3.jpg"
                  alt="校园晨雾"
                  width={111}
                  height={70}
                  className="object-contain"
                  style={{ borderRadius: "6px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/food.png"
                  alt="美食记忆"
                  width={111}
                  height={70}
                  className="object-contain"
                  style={{ borderRadius: "6px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                style={{
                  border: "2px solid #e7cb99",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 122,
                  height: 88,
                  background: "#fff",
                  boxShadow: "0 2px 10px 2px #e9ccb230",
                  marginBottom: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  src="/images/tree shadow2.png"
                  alt="午后点滴"
                  width={106}
                  height={78}
                  className="object-cover w-full h-full"
                  style={{ borderRadius: "8px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧页面 */}
      <div className="w-1/2 p-6 flex flex-col">
        {/* Decorative stars */}
        <div className="absolute top-4 right-8 text-yellow-400 text-lg">*</div>
        <div className="absolute top-8 right-16 text-yellow-300 text-sm">*</div>

        <h2 className="text-3xl font-bold mb-4 title-font" style={{ color: "#87ceeb" }}>
          校园生活
        </h2>

        {/* 图书馆 */}
        <div className="mb-4 rounded-lg overflow-hidden shadow-md" style={{ border: "2px solid #d4a574" }}>
          <Image
            src="/images/songs.png"
            alt="图书馆"
            width={400}
            height={112}
            className="w-full h-28 object-cover"
          />
        </div>

        {/* 描述 */}
        <div className="handwriting text-xs leading-relaxed" style={{ color: "#666", lineHeight: "2.2" }}>
          <p>大学四年是我人生中不可或缺的时光，</p>
          <p>在这里我学到了知识，结交了朋友，</p>
          <p>也找到了自己的人生方向，享受着青春的滋味。</p>
        </div>

        {/* 图书馆 */}
        <div className="mb-4 flex items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 title-font" style={{ color: "#f4a460" }}>
              图书馆
            </h3>
            <div className="handwriting text-xs leading-relaxed" style={{ color: "#666", lineHeight: "2.2" }}>
              <p>学校的图书馆附近总是会有可爱的猫学长学姐、狗学长学姐出没，他们总是很慵懒的晒着太阳，让人看了就很想rua一把。</p>
            </div>
          </div>
          <div
            className="ml-6 flex-shrink-0 rounded-lg shadow-md overflow-hidden"
            style={{ width: "180px", height: "120px", border: "2px solid #d4a574", background: "#fff" }}
          >
            <Image
              src="/images/dog.png"
              alt="图书馆"
              width={180}
              height={120}
              className="object-contain w-full h-full"
              style={{ display: "block", width: "100%", height: "120px", background: "#fff" }}
            />
          </div>
        </div>

        {/* 实习经历 */}
        <div>
          <h3 className="text-lg font-bold mb-2 title-font" style={{ color: "#5d4e37" }}>
            实习经历
          </h3>
          <div className="flex" style={{ width: "75%", minWidth: 410 }}>
            {/* 图片独立的卡片框 */}
            <div
              className="rounded-lg overflow-hidden shadow-md flex items-center"
              style={{ border: "2px solid #d4a574", background: "#fff", width: "37%", minWidth: 140, maxWidth: 200, height: "120px", display: "flex", justifyContent: "center" }}
            >
              <Image
                src="/images/p1.png"
                alt="操场"
                width={220}
                height={90}
                className="object-contain"
                style={{ display: "block", maxWidth: "95%", maxHeight: "90%", background: "#fff" }}
              />
            </div>
            {/* 右侧无框文字，风格与其他描述相同 */}
            <div className="handwriting text-xs leading-relaxed ml-4 flex items-center" style={{ color: "#5d4e37", width: "calc(63% - 1rem)", minHeight: "120px" }}>
              <span>
                在实习期间遇到了超好的同事，他们会耐心的回答我的问题，虽然师傅有时候凶凶的，但人真的超好！！！！ψ(｀∇´)ψ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
