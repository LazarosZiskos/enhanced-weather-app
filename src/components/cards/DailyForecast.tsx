import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";

function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 20, lon: 20 }),
  });
  return (
    <Card title="Daily Forecast">
      <div className="flex flex-col gap-4">
        {data.daily.map((day) => (
          <div key={day.dt} className="flex justify-between items-center">
            <p className="w-9">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="weather icon"
            />
            <p>{Math.round(day.temp.day)}°C</p>
            <p className="text-gray-500">{Math.round(day.temp.min)}°C</p>
            <p className="text-gray-500">{Math.round(day.temp.max)}°C</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default DailyForecast;
