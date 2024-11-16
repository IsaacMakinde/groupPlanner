import React from "react";

const Introduction: React.FC = () => {
  return (
    <div className=" is-flex has-background-white is-flex-direction-column section is-align-items-center is-justify-content-center">
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <figure className="image is-128x128">
          <img
            className="is-rounded"
            src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
            alt="Placeholder"
          />
        </figure>
        <h1 className="title has-text-grey is-align-self-center">
          Hello, I'm Isaac Makinde👋
        </h1>
      </div>
      <h1 className="impact-headline is-align-self-center">
        Fullstack{"\n"}Developer.
      </h1>
      <div className="is-flex is-flex-direction-column gap-2 is-align-self-center introduction-sub has-text-grey">
        <p className="subtitle-sub is-align-self-center">
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
