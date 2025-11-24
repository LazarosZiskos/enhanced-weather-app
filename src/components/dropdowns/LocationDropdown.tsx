import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

function LocationDropdown({}: Props) {
  return (
    <Select>
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
  "New York",
  "London",
  "Dubai",
  "Rome",
  "Bangkok",
  "Singapore",
  "Barcelona",
  "Istanbul",
];
