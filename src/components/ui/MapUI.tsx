import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { useEvent } from "../../contexts/EventContext";

const MapUI = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
  const { event, loading, error } = useEvent();
  const [position] = useState({ lat: 53, lng: 10 });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "65vw", height: "65vh" }}>
        <Map defaultCenter={position} defaultZoom={13} mapId={mapId}></Map>
        <AdvancedMarker position={position}>
          <Pin background={"red"} borderColor={"green"} glyphColor={"purple"} />
        </AdvancedMarker>
      </div>
      {event && <p>{position.lat & position.lng}</p>}
      <p>{event.venue}</p>
    </APIProvider>
  );
};

export default MapUI;
