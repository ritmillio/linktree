"use client";

import { LayoutGroup, motion } from "motion/react";
import { appConfig } from "@/config";
import { TextRotate } from "@/components/ui/text-rotate";

export function TextProfileRotate() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center font-overusedGrotesk dark:text-muted text-foreground font-light overflow-hidden -mb-2 mt-3">
      <LayoutGroup>
        <motion.div className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2 text-black dark:text-white"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            {appConfig.whoAmI.textProfileRotate.title}{" "}
          </motion.span>
          <TextRotate
            texts={appConfig.whoAmI.textProfileRotate.texts}
            mainClassName="text-black dark:text-white px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
