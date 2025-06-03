import { ProfileCard } from "@/components/profile-card";
import { MagneticSocialLinks } from "@/components/magnetic-social-links";
import { appConfig } from "@/config";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center gap-2.5 -mt-2.5 sm:-mt-4 md:-mt-5">
      <ProfileCard
        name={appConfig.name}
        description={appConfig.shortDescription}
        followersCount={appConfig.profile.followersCount}
        verified={true}
        isFullBg={appConfig.profile.isFullBackground}
      />
      <MagneticSocialLinks />
    </section>
  );
}
