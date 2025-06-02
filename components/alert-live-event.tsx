import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Radio, X } from "lucide-react";
import { SiTwitch } from "@icons-pack/react-simple-icons";

function AlertLiveEvent() {
  return (
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
            <p className="text-sm font-medium text-white">Live in 5 hours</p>
            <p className="text-xs text-muted">Twitch Stream</p>
          </div>
          <Button size="sm" className="cursor-pointer">
            Notify me
          </Button>
        </div>
      </div>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-300 group-hover:h-1 group-hover:via-white/70" />
    </Alert>
  );
}

export { AlertLiveEvent };
