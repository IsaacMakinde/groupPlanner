import MapUI from "./MapUI";
import { useEvent } from "../../contexts/EventContext";

const Details = () => {
  const { event, loading, error } = useEvent();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container is-fluid">
      <h1 className="title is-3  has-text-black">Details</h1>
      <div className="content">
        <p className="subtitle is-5 has-text-black">{event.description}</p>
      </div>

      <div className="content">
        <div className="is-flex is-justify-content-space-between my-6">
          <h2 className="title is-4 has-text-black">Location: {event.venue}</h2>
          <button className="button is-info">Get Directions</button>
        </div>
        <MapUI />
      </div>
    </div>
  );
};

export default Details;
