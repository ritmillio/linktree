import { Gallery4 } from "@/components/photo-gallery/gallery";
import { Gallery4Props } from "./gallery";

function GalleryShowcase({ images }: { images: Gallery4Props["items"] }) {
  return (
    <div className="max-w-xl mx-auto">
      <Gallery4 items={images} />
    </div>
  );
}

export { GalleryShowcase };
