import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Athens" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LocationDropdown;

const locations = [
  "Athens",
  "Paris",
  "Tokyo",
  "London",
  "Dubai",
  "Rome",
  "Bangkok",
  "Singapore",
  "Barcelona",
  "Istanbul",
];
