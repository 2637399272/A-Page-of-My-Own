"use client"

import { useState } from "react"
import { BookOpen } from "lucide-react"
import Navigation from "@/components/Navigation"
import BookLayout from "@/components/BookLayout"
import HomePage from "@/components/pages/HomePage"
import AboutPage from "@/components/pages/AboutPage"
import CampusPage from "@/components/pages/CampusPage"
import InternshipPage from "@/components/pages/InternshipPage"

const pages = ["首页", "自我介绍", "校园生活", "实践经历"] as const
type PageType = (typeof pages)[number]

export default function PersonalSite() {
  const [currentPage, setCurrentPage] = useState<PageType>("首页")
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right")

  const handlePageChange = (newPage: PageType) => {
    if (newPage === currentPage || isFlipping) return

    const currentIndex = pages.indexOf(currentPage)
    const newIndex = pages.indexOf(newPage)
    setFlipDirection(newIndex > currentIndex ? "right" : "left")
    setIsFlipping(true)

    setTimeout(() => {
      setCurrentPage(newPage)
      setTimeout(() => {
        setIsFlipping(false)
      }, 600)
    }, 300)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "首页":
        return <HomePage />
      case "自我介绍":
        return <AboutPage />
      case "校园生活":
        return <CampusPage />
      case "实践经历":
        return <InternshipPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen py-6 px-4" style={{ background: "linear-gradient(135deg, #fdf6e3 0%, #f5e6d3 100%)" }}>
      {/* Header */}
      <header className="flex items-center justify-between max-w-6xl mx-auto mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" style={{ color: "#8b4513" }} />
          <h1 className="text-lg font-bold title-font" style={{ color: "#5d4e37" }}>
          A Page of My Own
          </h1>
        </div>
        <Navigation
          pages={pages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </header>

      {/* Book Container */}
      <main className="max-w-6xl mx-auto">
        <BookLayout
          isFlipping={isFlipping}
          flipDirection={flipDirection}
        >
          {renderPageContent()}
        </BookLayout>
      </main>
    </div>
  )
}
