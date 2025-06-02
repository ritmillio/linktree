import { Gallery4 } from "@/components/photo-gallery/gallery";
import { Gallery4Props } from "./gallery";

const demoData: Gallery4Props = {
  items: [
    {
      id: "1",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1736187940760-cf540f8cdbcb?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "2",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1737111869094-80ed40daca91?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "3",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1729761411611-d6cca1f3988a?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "4",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1630713815149-9a70d6287917?auto=format&fit=crop&w=800&q=60",
    },
  ],
};

function GalleryShowcase() {
  return (
    <div className="max-w-xl mx-auto">
      <Gallery4 items={demoData.items} />
    </div>
  );
}

export { GalleryShowcase };
