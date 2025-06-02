"use client";

import * as React from "react";
import { Waves } from "@/components/ui/wave-background";

export function WavesBlock() {
  return (
    <div className="flex flex-col items-center justify-center w-80 lg:w-96 rounded-md border dark:border-white/50 border-black/50 bg-black overflow-hidden h-32">
      {/* Centered content with aspect ratio */}
      <div className="w-full flex flex-col items-center">
        {/* Top border - thin white line */}
        <div className="w-full h-[1px] bg-border"></div>

        {/* 16:9 container that's full width */}
        <div className="w-full aspect-video relative">
          <Waves className="w-full h-full" />
        </div>

        {/* Bottom border - thin white line */}
        <div className="w-full h-[1px] bg-border"></div>
      </div>
    </div>
  );
}
