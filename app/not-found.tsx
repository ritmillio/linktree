import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white gap-2.5">
      <h1 className="text-3xl font-bold text-black dark:text-white">404</h1>
      <p className="text-sm text-black/75 dark:text-white/75">
        The page you are looking for does not exist.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Go back to the home page</Link>
      </Button>
    </div>
  );
}
