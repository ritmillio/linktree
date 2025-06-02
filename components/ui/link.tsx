"use client";

import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const linkVariants = cva(
  "group relative overflow-hidden rounded-md transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background cursor-pointer inline-flex items-center justify-between",
  {
    variants: {
      size: {
        sm: "w-64 lg:w-72 px-3 py-1.5",
        default: "w-80 lg:w-96 px-1.5 py-2",
        lg: "w-96 lg:w-[28rem] px-6 py-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  backgroundHover?: string;
  textColor?: string;
  descriptionColor?: string;
  iconColor?: string;
  arrowColor?: string;
  showArrow?: boolean;
  external?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      size,
      href,
      title,
      description,
      icon,
      backgroundColor = "bg-background border border-border", // Updated default
      backgroundHover = "hover:from-black hover:to-black", // Updated default
      textColor = "text-white",
      descriptionColor = "text-white/70",
      iconColor = "white",
      arrowColor = "text-white/70 group-hover:text-white",
      showArrow = true,
      external = false,
      ...props
    },
    ref
  ) => {
    // Extract primary color from background for accent effects
    const getPrimaryColor = (bgClass: string): string => {
      if (bgClass.includes("green")) return "#10B981";
      if (bgClass.includes("blue")) return "#3B82F6";
      if (bgClass.includes("red")) return "#EF4444";
      if (bgClass.includes("purple")) return "#8B5CF6";
      if (bgClass.includes("pink")) return "#EC4899";
      if (bgClass.includes("indigo")) return "#6366F1";
      if (bgClass.includes("yellow")) return "#F59E0B";
      if (bgClass.includes("orange")) return "#F97316";
      if (bgClass.includes("cyan")) return "#06B6D4";
      if (bgClass.includes("teal")) return "#14B8A6";
      return "#6B7280"; // gray fallback
    };

    const primaryColor = getPrimaryColor(backgroundColor);

    return (
      <a
        className={cn(
          linkVariants({ size, className }),
          backgroundColor,
          backgroundHover
        )}
        href={href}
        ref={ref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {/* Background overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}30, ${primaryColor}50)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            {/* Icon Container */}
            {icon && (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                {React.cloneElement(
                  icon as React.ReactElement<{
                    className?: string;
                    style?: React.CSSProperties;
                  }>,
                  {
                    className: "h-6 w-6",
                    style: { color: iconColor },
                  }
                )}
              </div>
            )}

            {/* Text Content */}
            <div className="flex flex-col items-start">
              <span className={cn("text-sm font-medium", textColor)}>
                {title}
              </span>
              {description && (
                <span className={cn("text-xs", descriptionColor)}>
                  {description}
                </span>
              )}
            </div>
          </div>

          {/* Arrow Icon */}
          {showArrow && (
            <div className="flex items-center space-x-1">
              <ChevronRight
                className={cn(
                  "h-5 w-5 transition-all duration-300 group-hover:translate-x-1",
                  arrowColor
                )}
              />
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-300 group-hover:h-1 group-hover:via-white/70" />
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link, linkVariants };
