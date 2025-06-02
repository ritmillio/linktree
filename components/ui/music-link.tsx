"use client";

import React from "react";
import { Music, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const themeClasses = {
  Spotify: {
    light:
      "bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700",
    dark: "bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300",
    primary: "#1ED760",
    accent: "#1DB954",
  },
  "YouTube Music": {
    light:
      "bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700",
    dark: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400",
    primary: "#FF0000",
    accent: "#CC0000",
  },
  "Apple Music": {
    light:
      "bg-gradient-to-r from-pink-700 to-pink-600 hover:from-pink-800 hover:to-pink-700",
    dark: "bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-500 hover:to-pink-300",
    primary: "#FB233A",
    accent: "#FA5C72",
  },
  Deezer: {
    light:
      "bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700",
    dark: "bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300",
    primary: "#A238FF",
    accent: "#8A2BE2",
  },
  Tidal: {
    light:
      "bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700",
    dark: "bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300",
    primary: "#00FFFF",
    accent: "#00E0E0",
  },
  SoundCloud: {
    light:
      "bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-800 hover:to-orange-700",
    dark: "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400",
    primary: "#FF5500",
    accent: "#FF3300",
  },
  Default: {
    light:
      "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700",
    dark: "bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400",
    primary: "#4A5568",
    accent: "#2D3748",
  },
};

// Helper function to determine platform from URL
const getPlatformFromUrl = (url: string): string => {
  if (url.includes("spotify.com")) return "Spotify";
  if (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("music.youtube.com")
  )
    return "YouTube Music";
  if (url.includes("music.apple.com")) return "Apple Music";
  if (url.includes("deezer.com")) return "Deezer";
  if (url.includes("tidal.com")) return "Tidal";
  if (url.includes("soundcloud.com")) return "SoundCloud";
  return "Default";
};

interface MusicPlatformButtonProps {
  link: string;
  platformName?: string;
  customText?: string;
  platformIcon?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}

const MusicPlatformButton = React.forwardRef<
  HTMLButtonElement,
  MusicPlatformButtonProps
>(
  (
    {
      link,
      platformName,
      customText,
      platformIcon,
      className,
      size = "default",
    },
    ref
  ) => {
    // Auto-detect platform if not provided
    const detectedPlatform = platformName || getPlatformFromUrl(link);
    const theme =
      themeClasses[detectedPlatform as keyof typeof themeClasses] ||
      themeClasses.Default;

    const handleClick = () => {
      window.open(link, "_blank", "noopener noreferrer");
    };

    const sizeClasses = {
      sm: "w-64 lg:w-72 px-3 py-1.5",
      default: "w-80 lg:w-96 px-1.5 py-2",
      lg: "w-96 lg:w-[28rem] px-6 py-3",
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "group relative overflow-hidden rounded-md text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background cursor-pointer",
          // Light mode classes
          theme.light,
          // Dark mode classes
          "dark:" +
            theme.dark
              .replace("bg-gradient-to-r ", "")
              .replace("hover:", "dark:hover:"),
          sizeClasses[size],
          className
        )}
      >
        {/* Background overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 dark:group-hover:opacity-10"
          style={{
            background: `linear-gradient(135deg, ${theme.primary}30, ${theme.accent}50)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Platform Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 dark:bg-white/20 border border-white/20 dark:border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 dark:group-hover:bg-white/30">
              {platformIcon ? (
                React.cloneElement(
                  platformIcon as React.ReactElement<{
                    className?: string;
                    style?: React.CSSProperties;
                  }>,
                  {
                    className: "h-6 w-6",
                    style: { color: "white" },
                  }
                )
              ) : (
                <Music className="h-6 w-6 text-white" />
              )}
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-white">
                {customText || `Listen on ${detectedPlatform}`}
              </span>
              <span className="text-xs text-white/70">{detectedPlatform}</span>
            </div>
          </div>

          {/* Arrow Icon */}
          <ChevronRight className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-300 group-hover:h-1 group-hover:via-white/70" />
      </button>
    );
  }
);

MusicPlatformButton.displayName = "MusicPlatformButton";

export { MusicPlatformButton };
