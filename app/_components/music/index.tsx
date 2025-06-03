import { SectionTitle } from "@/components/ui/title";
import { MusicPlatformButton } from "@/components/ui/music-link";
import { appConfig } from "@/config";

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

export default function MusicSection() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title={appConfig.music.sectionTitle} className="mt-10" />
      <div className="flex flex-col gap-2.5 justify-center items-center">
        {appConfig.music.musicPlatforms.map((platform) => (
          <MusicPlatformButton
            key={platform.name}
            link={platform.link}
            platformName={platform.name}
            customText={platform.customText}
            platformIcon={<platform.icon />}
          />
        ))}
      </div>
    </section>
  );
}
