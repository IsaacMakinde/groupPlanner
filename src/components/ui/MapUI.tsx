import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { useEvent } from "../../contexts/Events/useEvent";

const MapUI = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
  const { event, loading, error } = useEvent();
  const [position, setPosition] = useState(null);
  const [placeUrl, setPlaceUrl] = useState(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(event.venue)}&key=${apiKey}`
        );
        const data = await response.json();

        // Check if results are found and update position state
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const venueName = event.venue; // Use the event venue name

          // Construct the Google Maps URL using the location name
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName)}`;

          setPosition({ lat: location.lat, lng: location.lng });
          setPlaceUrl(googleMapsUrl);
        } else {
          console.error("Geocoding failed: No results found");
        }
      } catch (error) {
        console.error("Error fetching position:", error);
      }
    };

    if (event?.venue) {
      fetchPosition();
    }
  }, [apiKey, event?.venue]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "65vw", height: "65vh" }}>
        {position ? (
          <Map defaultCenter={position} defaultZoom={13} mapId={mapId}>
            <AdvancedMarker position={position}>
              <Pin background="red" borderColor="green" glyphColor="purple" />
            </AdvancedMarker>
          </Map>
        ) : (
          <p>Loading map...</p>
        )}
      </div>

      {placeUrl && (
        <a
          href={placeUrl}
          className="button is-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open In Google Maps
        </a>
      )}
    </APIProvider>
  );
};

export default MapUI;
