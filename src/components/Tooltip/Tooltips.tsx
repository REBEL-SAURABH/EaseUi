import React from 'react'
import type {
  TooltipProps,
  TooltipPosition,
} from "./Types";



const Tooltips :  React.FC <TooltipProps> = ({
  children,
  content,
  position = "top",
  variant = "dark",
  delay = 150,
  disabled = false,
  showArrow = true,
}) => {

  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowClasses: Record<TooltipPosition, string> = {
    top:
      "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900",

    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900",

    left:
      "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900",

    right:
      "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900",
  };

  const variants = {
    dark: "bg-gray-900 text-white",
    light: "bg-white text-gray-900 border border-gray-200 shadow-lg",
    primary: "bg-indigo-600 text-white",
  };

  // const arrowVariant = {
  //   dark: "border-t-gray-900",
  //   light: "border-t-white",
  //   primary: "border-t-indigo-600",
  // };

  if (disabled) {
    return <>{children}</>;
  }


  return (
     <div className="relative inline-flex group">

      {children}

      <div
        style={{
          transitionDelay: `${delay}ms`,
        }}
        className={`
          pointer-events-none
          absolute
          z-50
          ${positionClasses[position]}

          whitespace-nowrap
          rounded-lg
          px-3
          py-2

          text-sm
          font-medium

          opacity-0
          invisible
          scale-95

          transition-all
          duration-200

          group-hover:visible
          group-hover:opacity-100
          group-hover:scale-100

          ${variants[variant]}
        `}
      >

        {content}

        {showArrow && (
          <span
            className={`
              absolute
              w-0
              h-0
              border-[6px]

              ${arrowClasses[position]}

              ${variant === "light"
                ? arrowClasses[position].replace(
                    "border-t-gray-900",
                    "border-t-white"
                  )
                : ""}
            `}
          />
        )}

      </div>

    </div>
  );
};
  

export default Tooltips