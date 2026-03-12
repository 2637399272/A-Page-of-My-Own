"use client"

interface NavigationProps {
  pages: readonly string[]
  currentPage: string
  onPageChange: (page: string) => void
}

export default function Navigation({ pages, currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="flex items-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 title-font ${
            currentPage === page
              ? "nav-tab active"
              : "nav-tab"
          }`}
          style={{
            color: currentPage === page ? "white" : "#5d4e37",
          }}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
