import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme-toggle";
import { Time } from "@/components/time";

import { Barrio } from "next/font/google";
import { appConfig } from "@/config";

export type IconProps = React.HTMLAttributes<SVGElement>;

const barrio = Barrio({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barrio",
});

export function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center gap-2.5 border-b border-border w-full pb-2.5 -mt-2.5 sm:-mt-4 md:-mt-5">
      <Dock
        direction="middle"
        className="w-80 lg:w-96 flex items-center justify-between bg-background border border-border rounded-md px-2.5 py-2"
      >
        <a href="#">
          <DockIcon>
            <span className={`text-2xl font-bold ${barrio.className}`}>
              {appConfig.name.slice(0, 1).toUpperCase() +
                appConfig.name.split(" ")[1].slice(0, 1).toUpperCase()}
            </span>{" "}
          </DockIcon>
        </a>
        <div className="flex items-center justify-between gap-2.5">
          <Time timeZone="Europe/Vienna" />
        </div>
        <DockIcon>
          <ThemeToggle />
        </DockIcon>
      </Dock>
    </header>
  );
}
