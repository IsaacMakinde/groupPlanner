import MapUI from "./MapUI";

const Details = () => {
  return (
    <div className="container is-fluid">
      <h1 className="title is-3  has-text-black">Details</h1>
      <div className="content">
        <p className="subtitle is-5 has-text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="content">
        <div className="is-flex is-justify-content-space-between my-6">
          <h2 className="title is-4 has-text-black">Location</h2>
          <button className="button is-info">Get Directions</button>
        </div>
        <MapUI />
      </div>
    </div>
  );
};

export default Details;
