import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <h1>Hello World</h1>
      <ThemeToggle />
    </div>
  );
}
