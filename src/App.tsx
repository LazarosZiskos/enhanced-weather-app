import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import type { Coords } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";
import LocationDropdown from "./components/dropdowns/LocationDropdown";

function useDebouncedValue<T>(value: T, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

function App() {
  const [coordinates, setCoords] = useState<Coords>({ lat: 10, lon: 55 });
  const [location, setLocation] = useState("Athens");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  function onMapClick(lat: number, lon: number) {
    setCoords({ lat, lon });
    setLocation("custom");
  }

  // if we are taking coords from the map click then use 'coordinates' else setLocation to be equal
  // to the geocode data

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown location={location} setLocation={setLocation} />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
