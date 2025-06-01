"use client";

import { appConfig } from "@/config";
import * as React from "react";
import {
  Cloud,
  CloudRain,
  Snowflake,
  Sun,
  Moon,
  CloudLightning,
  CloudFog,
  Thermometer,
} from "lucide-react";

type WeatherType =
  | "clear"
  | "clouds"
  | "rain"
  | "snow"
  | "thunderstorm"
  | "mist"
  | "unknown";

export interface SimpleWeatherData {
  city: string;
  temperature: number;
  weatherType: WeatherType;
  isDay: boolean;
}

export interface SimpleWeatherProps {
  /**
   * API key for OpenWeather API
   */
  apiKey: string;
  /**
   * Temperature unit: 'celsius' or 'fahrenheit'
   */
  unit?: "celsius" | "fahrenheit";
  /**
   * Custom location coordinates (optional)
   */
  location?: {
    latitude: number;
    longitude: number;
  };
  /**
   * Fallback location if geolocation fails
   */
  fallbackLocation?: {
    latitude: number;
    longitude: number;
  };
  /**
   * Callback when weather data is loaded
   */
  onWeatherLoaded?: (
    data: SimpleWeatherData & { temperatureDisplay: string }
  ) => void;
  /**
   * Callback on error
   */
  onError?: (error: string) => void;
}

/**
 * Maps weather condition strings to standardized weather types
 */
const mapWeatherType = (condition: string): WeatherType => {
  const main = condition.toLowerCase();
  if (main.includes("clear")) return "clear";
  if (main.includes("cloud")) return "clouds";
  if (main.includes("rain") || main.includes("drizzle")) return "rain";
  if (main.includes("snow")) return "snow";
  if (main.includes("thunder")) return "thunderstorm";
  if (main.includes("mist") || main.includes("fog") || main.includes("haze"))
    return "mist";
  return "unknown";
};

/**
 * Get weather icon based on type and time of day
 */
const getWeatherIcon = (type: WeatherType, isDay: boolean) => {
  const iconClass = "h-6 w-6";

  switch (type) {
    case "clear":
      return isDay ? (
        <Sun className={`${iconClass} text-amber-400`} />
      ) : (
        <Moon className={`${iconClass} text-slate-300`} />
      );
    case "clouds":
      return <Cloud className={`${iconClass} text-slate-500`} />;
    case "rain":
      return <CloudRain className={`${iconClass} text-blue-400`} />;
    case "snow":
      return <Snowflake className={`${iconClass} text-blue-300`} />;
    case "thunderstorm":
      return <CloudLightning className={`${iconClass} text-amber-400`} />;
    case "mist":
      return <CloudFog className={`${iconClass} text-slate-400`} />;
    default:
      return <Thermometer className={`${iconClass} text-slate-500`} />;
  }
};

/**
 * Convert Celsius to Fahrenheit
 */
const celsiusToFahrenheit = (celsius: number): number => {
  return Math.round((celsius * 9) / 5 + 32);
};

export function SimpleWeather({
  apiKey,
  unit = "celsius",
  fallbackLocation,
  onWeatherLoaded,
  onError,
}: SimpleWeatherProps) {
  const [weather, setWeather] = React.useState<SimpleWeatherData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const location = {
    latitude: appConfig.location.latitude,
    longitude: appConfig.location.longitude,
  };

  const fetchWeather = React.useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();

        // Check if it's day or night from icon code
        const isDay = data.weather?.[0]?.icon?.includes("d") ?? false;
        const tempCelsius = Math.round(data.main.temp);

        const weatherData: SimpleWeatherData = {
          city: data.name,
          temperature: tempCelsius,
          weatherType: mapWeatherType(data.weather[0]?.main ?? ""),
          isDay,
        };

        setWeather(weatherData);

        // Call callback with temperature display string
        const tempDisplay =
          unit === "fahrenheit"
            ? `${celsiusToFahrenheit(tempCelsius)}°F`
            : `${tempCelsius}°C`;

        onWeatherLoaded?.({
          ...weatherData,
          temperatureDisplay: tempDisplay,
        });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch weather";
        setError(errorMessage);
        onError?.(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [apiKey, unit, onWeatherLoaded, onError]
  );

  const getUserLocation = React.useCallback(async () => {
    if (location) {
      await fetchWeather(location.latitude, location.longitude);
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (geoError) => {
          if (fallbackLocation) {
            fetchWeather(fallbackLocation.latitude, fallbackLocation.longitude);
          } else {
            setError("Unable to get location");
            setLoading(false);
          }
        }
      );
    } else {
      setError("Geolocation not supported");
      setLoading(false);
    }
  }, [fetchWeather, location, fallbackLocation]);

  React.useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        Loading weather...
      </div>
    );
  }

  if (error) {
    return <div className="text-sm text-red-600">Error: {error}</div>;
  }

  if (!weather) {
    return (
      <div className="text-sm text-gray-600">No weather data available</div>
    );
  }

  const temperatureDisplay =
    unit === "fahrenheit"
      ? `${celsiusToFahrenheit(weather.temperature)}°F`
      : `${weather.temperature}°C`;

  return (
    <div className="flex items-center gap-2 text-sm">
      {getWeatherIcon(weather.weatherType, weather.isDay)}
      <span className="font-medium">{temperatureDisplay}</span>
      <span className="text-gray-600">{weather.city}</span>
    </div>
  );
}

// Example usage component
export function SimpleWeatherExample() {
  const handleWeatherLoaded = (
    data: SimpleWeatherData & { temperatureDisplay: string }
  ) => {
    console.log("Weather loaded:", data);
  };

  const handleError = (error: string) => {
    console.error("Weather error:", error);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Simple Weather Component</h2>

      <div className="space-y-2">
        <p>Celsius (default):</p>
        <SimpleWeather
          apiKey="your-api-key-here"
          unit="celsius"
          onWeatherLoaded={handleWeatherLoaded}
          onError={handleError}
          fallbackLocation={{ latitude: 40.7128, longitude: -74.006 }} // NYC fallback
        />
      </div>

      <div className="space-y-2">
        <p>Fahrenheit:</p>
        <SimpleWeather
          apiKey="your-api-key-here"
          unit="fahrenheit"
          onWeatherLoaded={handleWeatherLoaded}
          onError={handleError}
          fallbackLocation={{ latitude: 40.7128, longitude: -74.006 }} // NYC fallback
        />
      </div>

      <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
        <p>
          <strong>Note:</strong> Replace "your-api-key-here" with your actual
          OpenWeatherMap API key.
        </p>
        <p>
          The component returns: Icon + Temperature + City name in a simple
          inline format.
        </p>
      </div>
    </div>
  );
}
