"use client";

import React from "react";
import { Magnetic } from "@/components/ui/magnetic";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { appConfig } from "@/config";

type SocialLink = {
  label: string;
  link: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  useSecondaryBg?: boolean;
};

function MagneticSocialLink({
  children,
  link,
  label,
  useSecondaryBg = false,
}: {
  children: React.ReactNode;
  link: string;
  label: string;
  useSecondaryBg?: boolean;
}) {
  const bgClass = useSecondaryBg ? "bg-secondary" : "bg-background";
  const textClass = useSecondaryBg
    ? "text-black dark:text-black hover:text-white dark:hover:text-white"
    : "text-black dark:text-zinc-100";

  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        aria-label={label}
        className={`group relative inline-flex shrink-0 border border-border items-center gap-[1px] rounded-md ${bgClass} px-4 py-2 text-sm  transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 ${textClass} dark:hover:bg-zinc-700`}
      >
        {children}
      </a>
    </Magnetic>
  );
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Visit my GitHub profile",
    link: "https://github.com",
    icon: SiGithub,
  },
  {
    label: "Follow me on Twitter",
    link: "https://twitter.com",
    icon: SiX,
  },
  {
    label: "Follow me on Instagram",
    link: "https://instagram.com",
    icon: SiInstagram,
  },
  {
    label: "Subscribe to my YouTube channel",
    link: "https://youtube.com",
    icon: SiYoutube,
  },
  {
    label: "Send me an email",
    link: `mailto:${appConfig.email}`,
    icon: Mail,
  },
];

export function MagneticSocialLinks() {
  return (
    <div className="flex w-full items-center justify-center max-w-80 lg:max-w-96">
      <div className="flex items-center justify-start space-x-3">
        {SOCIAL_LINKS.map((link) => {
          const IconComponent = link.icon;
          return (
            <MagneticSocialLink
              key={link.label}
              link={link.link}
              label={link.label}
              useSecondaryBg={link.useSecondaryBg}
            >
              <IconComponent size={18} className="shrink-0" />
            </MagneticSocialLink>
          );
        })}
      </div>
    </div>
  );
}
