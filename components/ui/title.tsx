import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The title text to display
   */
  title: string;
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3 mb-5 w-full", className)}
        {...props}
      >
        <div className="h-[1px] bg-border min-w-[20px]" />
        <h2 className="text-sm font-medium tracking-wider uppercase whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-[1px] bg-border min-w-[100px]" />
      </div>
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
