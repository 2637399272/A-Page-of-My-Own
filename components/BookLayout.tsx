"use client"

import { ReactNode } from "react"

interface BookLayoutProps {
  children: ReactNode
  isFlipping: boolean
  flipDirection: "left" | "right"
}

export default function BookLayout({ children, isFlipping, flipDirection }: BookLayoutProps) {
  return (
    <div className="book-container relative">
      {/* Paper Clip Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
        <div className="relative">
          {/* Clip body */}
          <div 
            className="w-14 h-20 rounded-b-lg relative"
            style={{
              background: "linear-gradient(180deg, #c9a227 0%, #ffd700 50%, #c9a227 100%)",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {/* Clip inner cutout */}
            <div 
              className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-10 rounded-b-md"
              style={{ background: "#fef9f0" }}
            />
          </div>
          {/* Clip top */}
          <div 
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 rounded-t-md"
            style={{
              background: "linear-gradient(180deg, #e8c84a 0%, #c9a227 100%)",
            }}
          />
        </div>
      </div>

      {/* Book */}
      <div
        className="relative mx-auto overflow-visible"
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "650px",
          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))",
          transform: "perspective(2000px) rotateX(5deg)",
        }}
      >
        {/* Book Cover/Binding Left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-10"
          style={{
            background: "linear-gradient(90deg, #5c3d2e 0%, #8b4513 30%, #a0522d 60%, #8b4513 100%)",
            borderRadius: "8px 0 0 8px",
            boxShadow: "inset -5px 0 15px rgba(0,0,0,0.3)",
          }}
        />

        {/* Book Spine Detail */}
        <div
          className="absolute left-2 top-4 bottom-4 w-1"
          style={{
            background: "linear-gradient(180deg, #3d2817 0%, #5c3d2e 50%, #3d2817 100%)",
            borderRadius: "2px",
          }}
        />
        <div
          className="absolute left-5 top-4 bottom-4 w-0.5"
          style={{
            background: "linear-gradient(180deg, #c9a227 0%, #ffd700 50%, #c9a227 100%)",
          }}
        />

        {/* Main Book Body */}
        <div
          className="absolute inset-0 ml-8 rounded-r-lg overflow-hidden"
          style={{
            background: "#d4a574",
            border: "3px solid #8b4513",
            borderLeft: "none",
            boxShadow: "inset 0 0 30px rgba(139,69,19,0.2)",
          }}
        >
          {/* Pages Stack Effect - Left */}
          <div className="absolute left-0 top-2 bottom-2 w-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: "#fef9f0",
                  borderRight: "1px solid #e8dcc8",
                  left: `${i * 2}px`,
                }}
              />
            ))}
          </div>

          {/* Inner Pages Container */}
          <div
            className="absolute inset-3 ml-1 flex rounded overflow-hidden"
            style={{
              background: "#fef9f0",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Page Content with Flip Animation */}
            <div
              className={`w-full h-full relative transition-all duration-500 ${
                isFlipping
                  ? flipDirection === "right"
                    ? "animate-flip-out"
                    : "animate-flip-in"
                  : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Left Page Background */}
              <div
                className="absolute inset-y-0 left-0 w-1/2"
                style={{
                  background: `
                    repeating-linear-gradient(
                      transparent,
                      transparent 28px,
                      #e8dcc8 28px,
                      #e8dcc8 29px
                    ),
                    #fef9f0
                  `,
                  boxShadow: "inset -8px 0 20px rgba(0,0,0,0.05)",
                }}
              />

              {/* Right Page Background */}
              <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                  background: `
                    repeating-linear-gradient(
                      transparent,
                      transparent 28px,
                      #e8dcc8 28px,
                      #e8dcc8 29px
                    ),
                    #fef9f0
                  `,
                  boxShadow: "inset 8px 0 20px rgba(0,0,0,0.05)",
                }}
              />

              {/* Center Binding Shadow */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.02) 30%, rgba(0,0,0,0.02) 70%, rgba(0,0,0,0.08) 100%)",
                }}
              />

              {/* Center Binding Line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-10"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, #d4a574 5%, #d4a574 95%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                  isFlipping ? "opacity-0" : "opacity-100"
                }`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Book Cover/Binding Right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-3"
          style={{
            background: "linear-gradient(90deg, #a0522d 0%, #8b4513 50%, #5c3d2e 100%)",
            borderRadius: "0 8px 8px 0",
            boxShadow: "inset 5px 0 15px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-6 right-16 text-yellow-400 text-2xl animate-pulse">*</div>
      <div className="absolute top-8 -right-2 text-yellow-300 text-lg animate-pulse" style={{ animationDelay: "0.3s" }}>*</div>
      <div className="absolute -bottom-4 left-16 text-pink-300 text-xl">*</div>
      <div className="absolute bottom-16 -left-4 text-blue-300 text-lg">*</div>
      <div className="absolute top-1/3 -right-6 text-orange-300 text-sm">*</div>
    </div>
  )
}
