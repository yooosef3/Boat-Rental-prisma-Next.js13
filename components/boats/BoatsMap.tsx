import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";
import React from "react";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import useLocation from "@/hooks/useLocation";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});


const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const BoatsMap = () => {
  const { location } = useLocation();

  
  return (
    <MapContainer
      center={(location as L.LatLngExpression) || [51, -0.09]}
      zoom={location ? 2 : 1}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer url={url} attribution={attribution} />
      {location && (
        <Marker position={location as L.LatLngExpression}/>
      )}
    </MapContainer>
  );
};

export default BoatsMap;
