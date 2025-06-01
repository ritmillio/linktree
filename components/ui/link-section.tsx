import { cn } from "@/lib/utils";

export function LinkSection({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-5 w-full", className)}>
      <div className="h-[1px] bg-border min-w-[20px]"></div>
      <h2 className="text-sm font-medium tracking-wider uppercase whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-[1px] bg-border min-w-[100px]"></div>
    </div>
  );
}
