import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {};

function Map({}: Props) {
  return (
    <MapContainer
      center={[37, 23]}
      zoom={5}
      style={{ width: "1000px", height: "1000px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37, 23]} />
    </MapContainer>
  );
}

export default Map;
