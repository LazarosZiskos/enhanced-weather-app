import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function CurrentWeather({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-semibold text-center text-6xl">
          {Math.round(data.current.temp)}°C
        </h2>
        <WeatherIcon src={data.current.weather[0].icon} className="size-18" />
        <h3 className="capitalize text-xl">
          {data.current.weather[0].description}
        </h3>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-xl">Local Time</p>
        <h3 className="text-4xl font-semibold">
          {new Intl.DateTimeFormat("en-us", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: data.timezone,
          }).format(new Date(data.current.dt * 1000))}
        </h3>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels like</p>
          <p>{Math.round(data.current.feels_like)} °C</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <p>{data.current.wind_speed}km/h</p>
        </div>
      </div>
    </Card>
  );
}
