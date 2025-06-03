import { AlertLiveEvent } from "@/components/alert-live-event";
import { Link } from "@/components/ui/link";
import { SectionTitle } from "@/components/ui/title";
import { appConfig } from "@/config";

export default function LinksSection() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title={appConfig.links.sectionTitle} className="mt-10" />
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <AlertLiveEvent />

        {appConfig.links.links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            title={link.title}
            description={link.description}
            icon={<link.icon />}
            backgroundColor={link.backgroundColor}
            backgroundHover={link.backgroundHover}
            className={link.className}
            external={link.external}
          />
        ))}
      </div>
    </section>
  );
}
