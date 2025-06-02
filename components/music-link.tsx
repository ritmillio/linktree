"use client";

import React from "react";
import { Music, ChevronRight } from "lucide-react";

const platformThemes: Record<string, { primary: string; accent: string }> = {
  Spotify: { primary: "#1ED760", accent: "#1DB954" },
  "YouTube Music": { primary: "#FF0000", accent: "#CC0000" },
  "Apple Music": { primary: "#FB233A", accent: "#FA5C72" },
  Deezer: { primary: "#A238FF", accent: "#8A2BE2" },
  Tidal: { primary: "#00FFFF", accent: "#00E0E0" },
  SoundCloud: { primary: "#FF5500", accent: "#FF3300" },
  Default: { primary: "#4A5568", accent: "#2D3748" },
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
}

export default function MusicPlatformButton({
  link,
  platformName,
  customText,
  platformIcon,
}: MusicPlatformButtonProps) {
  // Auto-detect platform if not provided
  const detectedPlatform = platformName || getPlatformFromUrl(link);
  const theme = platformThemes[detectedPlatform] || platformThemes.Default;

  const handleClick = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative w-80 lg:w-96 overflow-hidden rounded-md px-1.5 py-2 text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
      style={{
        background: `linear-gradient(135deg, ${theme.primary}20, ${theme.accent}40)`,
        borderColor: theme.primary,
      }}
    >
      {/* Background gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${theme.primary}30, ${theme.accent}50)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Platform Icon */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${theme.primary}40`,
              border: `1px solid ${theme.primary}60`,
            }}
          >
            {platformIcon ? (
              React.cloneElement(
                platformIcon as React.ReactElement<{
                  className?: string;
                  style?: React.CSSProperties;
                }>,
                {
                  className: "h-6 w-6",
                  style: { color: theme.primary },
                }
              )
            ) : (
              <Music className="h-6 w-6" style={{ color: theme.primary }} />
            )}
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-white">
              {customText || `Listen on ${detectedPlatform}`}
            </span>
            <span className="text-xs opacity-75">{detectedPlatform}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        <ChevronRight className="h-5 w-5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300 group-hover:h-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
        }}
      />
    </button>
  );
}
