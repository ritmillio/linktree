/** Header + Footer */
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

import { ProfileCard } from "@/components/profile-card";
import { MagneticSocialLinks } from "@/components/magnetic-social-links";
import { LinkSection } from "@/components/ui/link-section";
import { Carousel } from "@/components/ui/carousel";
import { Time } from "@/components/time";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";

/** Music */
import { MusicPlatformButton } from "@/components/ui/music-link";
import {
  SiYoutubemusic,
  SiTidal,
  SiSpotify,
} from "@icons-pack/react-simple-icons";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white gap-2.5">
      <Header />
      <Time timeZone="Europe/Vienna" />
      <div className="flex-1 w-full flex flex-col items-center gap-2.5">
        <ProfileCard
          name="Sophie Bennett"
          description="A Product Designer focused on intuitive user experiences."
          followersCount={312}
          postsCount={48}
          verified={true}
        />
        <MagneticSocialLinks />

        {/* WHO AM I? SECTION */}
        <LinkSection title="WHO AM I?" className="mt-10" />
        <Card className="w-80 lg:w-96">
          <CardHeader className="px-2.5 py-4">
            <CardDescription className="text-sm text-black/75 dark:text-white/75">
              I'm a product designer focused on intuitive user experiences. I'm
              currently working at <a href="https://www.google.com">Google</a>{" "}
              as a product designer....
            </CardDescription>
          </CardHeader>
        </Card>

        {/* LINKS SECTION */}
        <LinkSection title="Links" className="mt-10" />

        {/* Music */}
        <MusicPlatformButton
          link="https://music.youtube.com/watch?v=njBKk2sCmeY&si=XqDJrV11Dnha6mgr"
          platformName="YouTube Music"
          customText="My favorite songs"
          platformIcon={<SiYoutubemusic />}
        />

        <MusicPlatformButton
          link="https://tidal.com/browse/playlist/1000000000000000000000000000000000000000"
          platformName="Tidal"
          customText="My favorite songs"
          platformIcon={<SiTidal />}
        />

        <MusicPlatformButton
          link="https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX?si=51bc5a30e80744d8"
          platformName="Spotify"
          customText="My favorite Podcast - The Diary of a CEO"
          platformIcon={<SiSpotify />}
        />

        {/* WORK SECTION */}
        <LinkSection title="Digital Work" className="mt-10" />
        <Carousel
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>

      <Footer />
    </div>
  );
}
