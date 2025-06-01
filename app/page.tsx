import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileCardDemo } from "@/components/profile-card";
import { SimpleWeather } from "@/components/weather";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <h1>Hello World</h1>
      <ThemeToggle />

      <ProfileCardDemo />
      <SimpleWeather
        apiKey="602eb8e0d8f46c939889cdc2c5ad67ff"
        unit="fahrenheit"
      />
    </div>
  );
}
