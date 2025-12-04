"use client";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function MapView({ hotels }:{hotels:any}) {
  return (
    <div className="w-full h-80 mt-12 rounded-xl overflow-hidden shadow">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAP_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: hotels[0].lat, lng: hotels[0].lng }}
          zoom={10}
        >
          {hotels.map((hotel:any) => (
            <Marker
              key={hotel.id}
              position={{ lat: hotel.lat, lng: hotel.lng }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
