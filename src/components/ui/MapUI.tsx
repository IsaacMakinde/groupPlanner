import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const MapUI = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
  const position = { lat: 53, lng: 10 };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "65vw", height: "65vh" }}>
        <Map defaultCenter={position} defaultZoom={10} mapId={mapId}></Map>
        <AdvancedMarker position={position}>
          <Pin background={"red"} borderColor={"green"} glyphColor={"purple"} />
        </AdvancedMarker>
      </div>
    </APIProvider>
  );
};

export default MapUI;
