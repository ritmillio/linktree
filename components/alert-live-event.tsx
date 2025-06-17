import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { SiTwitch } from "@icons-pack/react-simple-icons";
import Link from "next/link";

function AlertLiveEvent() {
  return (
    <Link href="https://www.twitch.tv/ritmillio">
      <Alert
        className="w-80 lg:w-96 group-hover:scale-110 py-2 px-1.5 rounded-md shadow-none bg-[#AA6FFF] transition-all duration-300 hover:cursor-grab"
        layout="row"
        isNotification
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/10 border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
            <SiTwitch />
          </div>

          <div className="flex grow items-center justify-between lg:gap-32 min-w-60 lg:min-w-72">
            <div className="space-y-1">
              <p className="text-sm font-medium text-white">Build in public</p>
              <p className="text-xs text-white/80">Twitch Stream</p>
            </div>
            <Button size="sm" className="cursor-pointer">
              Subscribe
            </Button>
          </div>
        </div>
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-300 group-hover:h-1 group-hover:via-white/70" />
      </Alert>
    </Link>
  );
}

export { AlertLiveEvent };
