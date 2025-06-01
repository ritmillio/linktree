/** Header + Footer */
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { MagneticSocialLinksDemo } from "./_components/test";

import { ProfileCard } from "@/components/profile-card";
import { LinkSection } from "@/components/ui/link-section";
import { Carousel } from "@/components/ui/carousel";
import { Time } from "@/components/time";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

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
        <MagneticSocialLinksDemo />

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
