import { appConfig } from "@/config";

export function Footer() {
  return (
    <footer className="relative w-full border-border pt-6 pb-10 sm:py-6 border-t">
      <p className="text-center text-xs leading-4 text-muted-foreground w-80 lg:w-96 mx-auto py-5 mb-10 border border-border rounded-md flex items-center justify-center px-2.5">
        Building digital experiences with passion and precision. From web
        development to UI/UX design, I create solutions that make a difference.
        Let's connect and bring your ideas to life.
      </p>
      <div className="mx-auto text-center border-y border-border py-2.5">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} - {appConfig.name}.
        </p>
        <p className="text-xs text-muted-foreground">All rights reserved.</p>
      </div>
    </footer>
  );
}
