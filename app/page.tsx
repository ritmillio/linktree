/** Header + Footer */
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

import { ProfileCard } from "@/components/profile-card";
import { MagneticSocialLinks } from "@/components/magnetic-social-links";
import { SectionTitle } from "@/components/ui/title";
import { Code } from "@/components/code";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";

/** Music */
import { MusicPlatformButton } from "@/components/ui/music-link";
import {
  SiYoutubemusic,
  SiTidal,
  SiSpotify,
  SiBuymeacoffee,
  SiClaude,
  SiNotion,
} from "@icons-pack/react-simple-icons";
import { Link } from "@/components/ui/link";
import { Code2 } from "lucide-react";
import { appConfig } from "@/config";
import { WavesBlock } from "@/components/waves-block";
import { TextProfileRotate } from "@/components/text-profile-rotate";
import { GalleryShowcase } from "@/components/photo-gallery";
import { AlertLiveEvent } from "@/components/alert-live-event";
import { Calendar } from "@/components/calendar";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white gap-2.5">
      <Header />

      <div className="flex-1 w-full flex flex-col items-center gap-2.5 pt-5">
        <ProfileCard
          name="Sophie Bennett"
          description="A Product Designer focused on intuitive user experiences."
          followersCount={312}
          postsCount={48}
          verified={true}
        />
        <MagneticSocialLinks />
        {/* WHO AM I? SECTION */}
        <SectionTitle title="WHO AM I?" className="mt-10" />
        <Card className="w-80 lg:w-96">
          <CardHeader className="px-2.5 py-4">
            <CardDescription className="text-sm text-black/75 dark:text-white/75">
              I&apos;m a product designer focused on intuitive user experiences.
              I&apos;m currently working at{" "}
              <a href="https://www.google.com">Google</a> as a product
              designer....
            </CardDescription>
          </CardHeader>
        </Card>

        <Code />
        <Calendar />
        <TextProfileRotate />
        <WavesBlock />

        {/* LINKS SECTION */}
        <SectionTitle title="Links" className="mt-10" />
        <AlertLiveEvent />
        <Link
          href="https://zoltanfodor.notion.site/Toasted-Links-206e0ba40a7280b8bd4bc04f6253a91d?pvs=73"
          title="Toasted Links - Notion"
          description="Notion"
          icon={<SiNotion />}
          external
        />
        <Link
          href={`https://buymeacoffee.com/${appConfig.tag}`}
          title="Buy Me a Coffee"
          description="Support my work with a coffee"
          icon={<SiBuymeacoffee />}
          backgroundColor="bg-[#FEDD03]"
          backgroundHover="hover:bg-[#E6C700]"
          textColor="text-black"
          descriptionColor="text-black/70"
          iconColor="black"
          arrowColor="text-black/70 group-hover:text-black"
          external
        />

        <Link
          href="https://ui.shadcn.com/docs/installation"
          title="ShadCN/UI Setup Guide"
          description="Complete installation walkthrough"
          icon={<Code2 />}
          external
        />

        <Link
          href="https://claude.ai/chat/shared-thread-xyz123"
          title="Claude AI Conversation"
          description="Building modern web components"
          icon={<SiClaude />}
          backgroundColor="bg-gradient-to-r from-[#7c3aed] to-[#a855f7]"
          backgroundHover="hover:from-[#7c3aed] hover:to-[#a855f7]"
          className="dark:from-[#581c87] dark:to-[#7c2d12] dark:hover:from-[#581c87] dark:hover:to-[#7c2d12]"
          external
        />

        {/* WORK SECTION */}
        <SectionTitle title="Digital Work" className="mt-10" />
        <p className="text-center text-xs leading-4 text-muted-foreground w-80 lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5">
          I create and sell various digital products including premium UI
          components, website templates, and design systems. Each product is
          crafted with attention to detail and modern development practices.
          Check out my store for high-quality digital assets that can elevate
          your projects.
        </p>
        <div className="w-80 lg:w-96">
          <div className="w-full flex items-center justify-between gap-2.5">
            <div className="w-1/2 text-center text-xs leading-4 text-muted-foreground lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5">
              <span className="text-zinc-950 dark:text-zinc-50">toasty</span>
              <span className="bg-indigo-800  text-zinc-200">y</span>
              <span className="bg-orange-600  text-zinc-50">y</span>
            </div>
            <a
              className="w-1/2 text-center text-xs leading-4 lg:w-96 mx-auto py-5 bg-background border border-border rounded-md flex items-center justify-center px-2.5"
              href="https://toasted.studio/"
              target="_blank"
            >
              <span className="bg-amber-300 text-black hover:cursor-grab hover:underline">
                ui.toasted.studio
              </span>
            </a>
          </div>
        </div>

        {/* Music */}
        <SectionTitle title="My favorite tunes" className="mt-10" />
        <MusicPlatformButton
          link="https://music.youtube.com/watch?v=njBKk2sCmeY&si=XqDJrV11Dnha6mgr"
          platformName="YouTube Music"
          customText="My favorite songs on YouTube"
          platformIcon={<SiYoutubemusic />}
        />
        <MusicPlatformButton
          link="https://tidal.com/browse/playlist/1000000000000000000000000000000000000000"
          platformName="Tidal"
          customText="Premium playlist on Tidal"
          platformIcon={<SiTidal />}
        />
        <MusicPlatformButton
          link="https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX?si=51bc5a30e80744d8"
          platformName="Spotify"
          customText="My favorite Podcast - The Diary of a CEO"
          platformIcon={<SiSpotify />}
        />

        {/* Gallery */}
        <SectionTitle title="More than just a photo" className="mt-10" />
        <GalleryShowcase />
      </div>

      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
