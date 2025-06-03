/** Header + Footer */
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

/** SECTIONS */
import ProfileSection from "./_components/profile";
import WhoAmISection from "./_components/who-am-i";
import LinksSection from "./_components/links";
import WorkSection from "./_components/work";
import MusicSection from "./_components/music";
import GallerySection from "./_components/gallery";

export default function Home() {
  return (
    <div className="mx-auto max-w-xl min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white gap-2.5">
      <Header />

      <div className="flex-1 w-full flex flex-col items-center gap-2.5 pt-2.5 sm:pt-4 md:pt-5">
        <ProfileSection />
        <WhoAmISection />
        <LinksSection />
        <WorkSection />
        <MusicSection />
        <GallerySection />
      </div>

      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
