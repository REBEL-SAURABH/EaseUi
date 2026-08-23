import React from 'react'
import type { LayoutProps } from "./LayoutTypes";



const Layout : React.FC <LayoutProps> = ({
  children,
  sidebar,
  header,
  sidebarWidth = "md",
  centered = false,
}) => {

  const widths = {
    sm: "w-56",
    md: "w-64",
    lg: "w-72",
  };

  return (
     <div className="min-h-screen bg-slate-50">

      {/* Header */}

      {header && (
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
          {header}
        </header>
      )}


      <div className="flex">

        {/* Sidebar */}

        {sidebar && (
          <aside
            className={`
              sticky
              top-0
              hidden
              h-screen
              shrink-0
              border-r
              bg-white
              md:block
              ${widths[sidebarWidth]}
            `}
          >
            {sidebar}
          </aside>
        )}


        {/* Main */}

        <main
          className={`
            min-h-screen
            w-full
            p-6
            md:p-10
            ${
              centered
                ? "mx-auto max-w-7xl"
                : ""
            }
          `}
        >
          {children}
        </main>

      </div>

    </div>
  )
}

export default Layout