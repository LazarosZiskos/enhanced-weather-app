import { getWeather } from "./api";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 60, lon: 100 }),
  });

  return <>{JSON.stringify(data)}</>;
}

export default App;
