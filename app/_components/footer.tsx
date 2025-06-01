import { appConfig } from "@/config";

export function Footer() {
  return (
    <footer className="relative w-full border-border pt-6 pb-10 sm:py-6 border-t">
      <div className="mx-auto text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} - {appConfig.name}.
        </p>
        <p className="text-xs text-muted-foreground">All rights reserved.</p>
      </div>
    </footer>
  );
}
