import { SectionTitle } from "@/components/ui/title";
import { GalleryShowcase } from "@/components/photo-gallery";
import { appConfig } from "@/config";

export default function GallerySection() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title={appConfig.gallery.sectionTitle} className="mt-10" />
      <GalleryShowcase images={appConfig.gallery.galleryImages} />
    </section>
  );
}
