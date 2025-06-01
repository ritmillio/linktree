"use client";

import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="z-[9999] size-8 bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-20 hover:cursor-pointer hover:bg-transparent dark:hover:scale-110 dark:hover:bg-transparent"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <SunIcon className="size-5 scale-100 rotate-0 text-black/75 transition-all hover:text-neutral-700 dark:scale-0 dark:-rotate-90 dark:text-white/75" />
      ) : (
        <MoonIcon className="absolute size-5 scale-0 rotate-90 text-black/75 transition-all hover:text-neutral-100 dark:scale-100 dark:rotate-0 dark:text-white/75" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
