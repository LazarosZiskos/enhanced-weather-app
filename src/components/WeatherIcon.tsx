type Props = {
  src: string;
};

export default function WeatherIcon({ src }: Props) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="weather icon"
    />
  );
}
