"use client";

import { SlidingNumber } from "@/components/ui/sliding-number";
import { useEffect, useState } from "react";
import { SimpleWeather } from "@/components/weather";

interface TimeProps {
  timeZone?: string;
  label?: string;
}

export function Time({ timeZone, label }: TimeProps) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState<string>("");

  // Function to get current time for a specific timezone
  const getTimeForTimezone = (tz: string) => {
    try {
      const now = new Date();
      const timeInTimezone = new Date(
        now.toLocaleString("en-US", { timeZone: tz })
      );

      return {
        hours: timeInTimezone.getHours(),
        minutes: timeInTimezone.getMinutes(),
        seconds: timeInTimezone.getSeconds(),
      };
    } catch (err) {
      console.error(`Invalid timezone: ${tz}`);
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  // Update time every second
  useEffect(() => {
    const currentTimezone =
      timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;

    const updateTime = () => {
      try {
        const time = getTimeForTimezone(currentTimezone);
        setHours(time.hours);
        setMinutes(time.minutes);
        setSeconds(time.seconds);
        setError("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to get time");
      }
    };

    // Update immediately
    updateTime();

    // Set up interval
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex items-center gap-0.5 font-mono">
        <SlidingNumber value={hours} padStart={true} />
        <span className="text-black/75 dark:text-white/75">:</span>
        <SlidingNumber value={minutes} padStart={true} />
        <span className="text-black/75 dark:text-white/75">:</span>
        <SlidingNumber value={seconds} padStart={true} />
      </div>

      <div className="flex">
        {(label || timeZone) && (
          <div className="text-xs text-black/75 dark:text-white/75">
            {label || timeZone}
          </div>
        )}
        <SimpleWeather apiKey="602eb8e0d8f46c939889cdc2c5ad67ff" />
      </div>

      {error && <div className="text-xs text-red-400">{error}</div>}
    </div>
  );
}
