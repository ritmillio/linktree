import { Code2, Mail, EthernetPort } from "lucide-react";
import {
  SiGithub,
  SiYoutube,
  SiNotion,
  SiClaude,
  SiSpotify,
  SiYoutubemusic,
} from "@icons-pack/react-simple-icons";

import trace from "@/app/assets/trace.svg"
import incaseoflaw from "@/app/assets/incaseoflaw.svg"
import munch from "@/app/assets/munch.svg"
import nespresso from "@/app/assets/nespresso.svg"
import nailster from "@/app/assets/nailster.svg"

const email = "zoltan@fdr.digital";

export const appConfig = {
  name: "Zoltan Fodor",
  tag: "zoltanfodor",
  email: email,
  language: "en",

  /** Short Description should be no more than 150 characters */
  shortDescription: "I think of myself as a builder who connects people, technology and business. I'm always exploring new technologies and pushing the boundaries of what's possible.",

  /** Your location cordinates to fetch weather data */
  location: {
    latitude: 48.2082,
    longitude: 16.3738,
  },

  /** TimeZone to fetch weather data */
  /** Valid TimeZones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  timeZone: "Europe/Vienna",

  /** SECTIONS */
  profile: {
    imgUrl:
      "https://smqp9londt.ufs.sh/f/G6x7iQkM307VIvXlXbvclNOqZPEDajMe73gR8zhtk6QKFuf4",
    followersCount: 312,
    isFullBackground: false,
    socialLinksSmall: [
      {
        label: "Visit my GitHub profile",
        link: "https://github.com/ritmillio",
        icon: SiGithub,
      },
      // {
      //   label: "Follow me on Twitter",
      //   link: "https://twitter.com",
      //   icon: SiX,
      // },
      // {
      //   label: "Follow me on Instagram",
      //   link: "https://instagram.com",
      //   icon: SiInstagram,
      // },
      {
        label: "Subscribe to my YouTube channel",
        link: "https://www.youtube.com/@ritmillio",
        icon: SiYoutube,
      },
      {
        label: "Send me an email",
        link: `mailto:${email}`,
        icon: Mail,
      },
    ],
  },

  whoAmI: {
    sectionTitle: "WHO AM I?",
    description:
      "I'm a passionate technologist and problem-solver who thrives at the intersection of innovation and practicality. With a deep understanding of both technical and business domains, I bridge the gap between complex systems and user needs. My approach combines creative thinking with methodical execution, always seeking elegant solutions to challenging problems. I'm particularly drawn to emerging technologies and their potential to transform how we work and live.",
    codeSnippet: {
      title: "TS POWER - Click Me",
      description: "Advanced Type Manipulation",
      code: `type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object 
          ? DeepReadonly<T[P]> 
          : T[P];
      };`,
    },
    //CAL.COM INTEGRATION
    calendar: {
      title: "Schedule a Call",
      dataCalNamespace: "15min",
      dataCalLink: "ritmillio/15min",
      dataCalConfig: "month_view",
      hideEventTypeDetails: false,
    },
    textProfileRotate: {
      title: "I have an interest in",
      texts: [
        "Product Design",
        "Software Development",
        "Design Systems",
        "AI",
        "and MORE",
      ],
    },
  },

  links: {
    sectionTitle: "Links",
    links: [
      {
        title: "fdr.digital",
        description: "My personal website",
        href: "https://fdr.digital",
        icon: EthernetPort,
        backgroundColor: "bg-gradient-to-r from-[#bccae0] dark:from-[#004ac2] to-[#8ba9fc] dark:to-[#bccae0]",
        backgroundHover: "hover:from-[#2563eb] hover:to-[#1e40af]",
        className:
          "dark:from-[#1e3a8a] dark:to-[#1e40af] dark:hover:from-[#1e40af] dark:hover:to-[#1d4ed8]",
        external: true,
      },
      {
        title: "Daily Boost",
        description: "Notion",
        href: "https://zoltanfodor.notion.site/DAILY-MOTIVATION-206e0ba40a7280b8bd4bc04f6253a91d?source=copy_link",
        icon: SiNotion,
        external: true,
      },
      {
        title: "I love this lib",
        description: "Just use shadcn/ui!",
        href: "https://ui.shadcn.com/docs/installation",
        icon: Code2,
        external: true,
      },
      {
        title: "Claude AI Conversation",
        description: "Building modern web components",
        href: "https://claude.ai/share/f8c44692-3e04-49e3-8f07-49cdb29a4163",
        icon: SiClaude,
        backgroundColor: "bg-gradient-to-r from-[#7c3aed] to-[#a855f7]",
        backgroundHover: "hover:from-[#7c3aed] hover:to-[#a855f7]",
        className:
          "dark:from-[#581c87] dark:to-[#7c2d12] dark:hover:from-[#581c87] dark:hover:to-[#7c2d12]",
        external: true,
      },
      {
        title: "expo-router-starter-kit",
        description: "Build Expo apps with ease",
        href: "https://github.com/ritmillio/expo-router-starter-kit",
        icon: SiGithub,
        backgroundColor: "dark:bg-gradient-to-r from-[#000000] to-[#000000]",
        backgroundHover: "hover:from-[#000000] hover:to-[#000000]",
        className:
          "dark:from-[#000000] dark:to-[#000000] dark:hover:from-[#000000] dark:hover:to-[#000000] border border-border",
        external: true,
      },
      
    ],
  },

  work: {
    sectionTitle: "Work",
    description:
      "I build software for startups and scaleups and help them grow. I also build digital products, contribute to open source projects and share my knowledge on Twitch times to times. I am always up for a virtual coffee chat about new opportunities.",
    boxes: {
      firstBox: {
        html: `<div class="flex items-center justify-center">
          <span class="text-zinc-950 dark:text-zinc-50">toasty</span>
          <span class="bg-indigo-800 text-zinc-200">y</span>
          <span class="bg-orange-600 text-zinc-50">y</span>
        </div>`,
      },
      secondBox: {
        html: `<div class="flex items-center justify-center">
          <span class="bg-amber-300 text-black hover:cursor-grab hover:underline">
            toasted.studio
          </span>
        </div>`,
        href: "https://toasted.studio/",
        external: true,
      },
    },
    workHistoryTitle: "Work History",
    workHistory: [
      {
        id: "1",
        label: "CTO - trace.deal",
        value: "cto",
        description:
          "We built a platform for small to medium sized Venture Capital firms to manage their deals, analyze Pitch Decks with AI and share the data with their partners.",
        icon: trace,
      },
      {
        id: "2",
        label: "Senior Software Engineer - incaseof.law",
        value: "fullstack_eng",
        description:
          "We built an end-to-end platform for notaries to manage their dunning process and share the data with their partners.",
        icon: incaseoflaw,
      },
      {
        id: "3",
        label: "Senior Software Engineer - Munch",
        value: "software_engineer",
        description:
          "Munch is a platform for sustainable food ordering that helps users save money while reducing waste.",
        icon: munch,
      },
      {
        id: "4",
        label: "Ecommerce Developer - Nespresso",
        value: "ecommerce_developer",
        description:
          "I helped Nespresso to build custom ecommerce solutions to make their ecommerce platform more efficient, fast and customer friendly.",
        icon: nespresso,
      },
      {
        id: "5",
        label: "Frontend Developer - Nailster",
        value: "frontend_developer",
        description:
          "Biggest nail ecommerce platform in the Nordics. I was working on custom frontend solutions to achive more conversions and better user experience.",
        icon: nailster,
        iconClassName: "invert",
      },

    ],
  },

  /**
   * Supported music platforms:
   * - Spotify: Green gradient theme with primary color #1ED760
   * - YouTube Music: Red gradient theme with primary color #FF0000
   * - Apple Music: Pink gradient theme with primary color #FB233A
   * - Deezer: Purple gradient theme with primary color #A238FF
   * - Tidal: Cyan gradient theme with primary color #00FFFF
   * - SoundCloud: Orange gradient theme with primary color #FF5500
   *
   * Each platform has custom light/dark mode gradients and hover states
   * for a consistent and branded appearance.
   */
  music: {
    sectionTitle: "Music",
    musicPlatforms: [
    {
      name: "YouTube Music - My coding playlist",
      key: "YouTube Music",
      link: "https://music.youtube.com/playlist?list=RDCLAK5uy_nvRGXHpFzon8qbPTZhuoSq3WO4ccYvmHM&playnext=1&si=zznqzDnWFKrhG1jQ",
      customText: "My coding playlist - Electronic Focus ",
      icon: SiYoutubemusic,
    },
    {
      name: "Spotify - My favorite Podcast",
      key: "Spotify",
      link: "https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX?si=51bc5a30e80744d8",
      customText: "My favorite Podcast - The Diary of a CEO",
      icon: SiSpotify,
    },

    ],
  },

  gallery: {
    sectionTitle: "Gallery",
    galleryImages: [
      {
        id: "1",
        href: "#",
        image: "https://images.unsplash.com/photo-1736187940760-cf540f8cdbcb?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "2", 
        href: "#",
        image: "https://images.unsplash.com/photo-1737111869094-80ed40daca91?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "3",
        href: "#", 
        image: "https://images.unsplash.com/photo-1729761411611-d6cca1f3988a?auto=format&fit=crop&w=800&q=60",
      },
      {
        id: "4",
        href: "#",
        image: "https://images.unsplash.com/photo-1630713815149-9a70d6287917?auto=format&fit=crop&w=800&q=60",
      },
    ]
  },

  footer: {
    footerDescription: "Building digital experiences with passion and precision. From web development to UI/UX design, I create solutions that make a difference. Let's connect and bring your ideas to life.",
  }
};
