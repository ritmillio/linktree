"use client";

import React from "react";
import { Magnetic } from "@/components/ui/magnetic";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

type SocialLink = {
  label: string;
  link: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 border border-border items-center gap-[1px] rounded-md bg-background px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
      </a>
    </Magnetic>
  );
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com",
    icon: SiGithub,
  },
  {
    label: "Twitter",
    link: "https://twitter.com",
    icon: SiX,
  },
  {
    label: "Instagram",
    link: "https://instagram.com",
    icon: SiInstagram,
  },
  {
    label: "Youtube",
    link: "https://youtube.com",
    icon: SiYoutube,
  },
];

function MagneticSocialLinksDemo() {
  return (
    <div className="flex w-full items-center justify-center max-w-80 lg:max-w-96">
      <div className="flex items-center justify-start space-x-3">
        {SOCIAL_LINKS.map((link) => {
          const IconComponent = link.icon;
          return (
            <MagneticSocialLink key={link.label} link={link.link}>
              <IconComponent size={18} className="shrink-0" />
            </MagneticSocialLink>
          );
        })}
      </div>
    </div>
  );
}

export { MagneticSocialLinksDemo };
