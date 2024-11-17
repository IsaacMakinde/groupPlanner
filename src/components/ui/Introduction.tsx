import React from "react";

const Introduction: React.FC = () => {
  return (
    <div className=" is-flex has-background-white is-flex-direction-column section is-align-items-center is-justify-content-center">
      <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center is-align-content-center is-align-content-center">
          <figure className="image is-128x128">
            <img
              className="is-rounded"
              src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/IMG_0500.jpg?alt=media&token=9b8c260c-ac84-4c34-baf0-1bb5f5f7f533"
              alt="Placeholder"
            />
          </figure>
          <h1 className="title is-4 has-text-grey is-align-self-center ">
            Hello, I'm Isaac Makinde👋
          </h1>
        </div>
      </div>
      <h1 className="impact-headline is-align-self-center">
        Fullstack{"\n"}Developer.
      </h1>
      <div className="is-flex is-flex-direction-column gap-2 is-align-self-center introduction-sub has-text-grey">
        <p className="subtitle-sub is-align-self-center is-align-content-center has-text-centered">
          A passionate Fullstack web developer and machine learning enthusiast{" "}
          specialized in the manipulation of data and production of intelligent
          systems.
        </p>
        <a className="is-align-self-center" href="#footer">
          <button className="button is-normal is-half is-link">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
