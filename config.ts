import { Code2, Mail } from "lucide-react";
import {
  SiGithub,
  SiX,
  SiInstagram,
  SiYoutube,
  SiNotion,
  SiBuymeacoffee,
  SiClaude,
  SiSpotify,
  SiTidal,
  SiYoutubemusic,
} from "@icons-pack/react-simple-icons";

const email = "sophie@bennett.com";

export const appConfig = {
  name: "Sophie Bennett",
  tag: "sophiebennett",
  email: email,
  language: "en",

  /** Short Description should be no more than 150 characters */
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

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
      "https://images.unsplash.com/photo-1741802872469-b404a312fa91?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    followersCount: 312, // This could be dynamic as well (write a sum function to get the total number of followers)
    isFullBackground: false,
    socialLinksSmall: [
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
        link: `mailto:${email}`,
        icon: Mail,
      },
    ],
  },

  whoAmI: {
    sectionTitle: "WHO AM I?",
    description:
      "I'm a product designer focused on intuitive user experiences. I'm currently working at Google as a product designer.",
    codeSnippet: {
      title: "My Favorite Code Snippet",
      description: "A beautiful way to debounce function calls",
      code: "const debounce = (fn, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => fn(...args), delay); }; };",
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
        "product design",
        "software development",
        "design systems",
        "AI",
        "FUN",
        "and MORE 🕶️",
      ],
    },
  },

  links: {
    sectionTitle: "Links",
    links: [
      {
        title: "Toasted Links - Notion",
        description: "Notion",
        href: "https://zoltanfodor.notion.site/Toasted-Links-206e0ba40a7280b8bd4bc04f6253a91d?pvs=73",
        icon: SiNotion,
        external: true,
      },
      {
        title: "Buy Me a Coffee",
        description: "Support my work with a coffee",
        href: `https://buymeacoffee.com/`,
        icon: SiBuymeacoffee,
        backgroundColor: "bg-[#FEDD03]",
        backgroundHover: "hover:bg-[#E6C700]",
        textColor: "text-black",
        descriptionColor: "text-black/70",
        iconColor: "black",
        arrowColor: "text-black/70 group-hover:text-black",
        external: true,
      },
      {
        title: "ShadCN/UI Setup Guide",
        description: "Complete installation walkthrough",
        href: "https://ui.shadcn.com/docs/installation",
        icon: Code2,
        external: true,
      },
      {
        title: "Claude AI Conversation",
        description: "Building modern web components",
        href: "https://claude.ai/chat/shared-thread-xyz123",
        icon: SiClaude,
        backgroundColor: "bg-gradient-to-r from-[#7c3aed] to-[#a855f7]",
        backgroundHover: "hover:from-[#7c3aed] hover:to-[#a855f7]",
        className:
          "dark:from-[#581c87] dark:to-[#7c2d12] dark:hover:from-[#581c87] dark:hover:to-[#7c2d12]",
        external: true,
      },
    ],
  },

  work: {
    sectionTitle: "Work",
    description:
      "I create and sell various digital products including premium UI components, website templates, and design systems. Each product is crafted with attention to detail and modern development practices. Check out my store for high-quality digital assets that can elevate your projects.",
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
            ui.toasted.studio
          </span>
        </div>`,
        href: "https://ui.toasted.studio/",
        external: true,
      },
    },
    workHistoryTitle: "Work History",
    workHistory: [
      {
        id: "1",
        label: "Senior Frontend Developer",
        value: "frontend_dev",
        description:
          "Led the development of React applications with TypeScript and modern UI frameworks",
        icon: "💻",
      },
      {
        id: "2",
        label: "Full Stack Engineer",
        value: "fullstack_eng",
        description:
          "Built end-to-end web applications using Node.js, React, and PostgreSQL",
        icon: "🚀",
      },
      {
        id: "3",
        label: "UI/UX Designer",
        value: "ui_designer",
        description:
          "Designed user interfaces and experiences for mobile and web applications",
        icon: "🎨",
      },
      {
        id: "4",
        label: "DevOps Engineer",
        value: "devops_eng",
        description:
          "Managed CI/CD pipelines, AWS infrastructure, and deployment automation",
        icon: "⚙️",
        custom: "Current",
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
      name: "YouTube Music",
      link: "https://music.youtube.com/watch?v=njBKk2sCmeY&si=XqDJrV11Dnha6mgr",
      customText: "My favorite songs on YouTube",
      icon: SiYoutubemusic,
    },
    {
      name: "Tidal",
      link: "https://tidal.com/browse/playlist/1000000000000000000000000000000000000000",
      customText: "Premium playlist on Tidal",
      icon: SiTidal,
    },
    {
      name: "Spotify",
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
