import React from "react";

const About: React.FC = () => {
  return (
    <div className="section has-background-white is-align-self-flex-start content mt-6 has-text-black">
      <h1 className="has-text-black">About</h1>
      <div className="columns">
        <div className="column is-half">
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
          </p>

          <h5 className="has-text-black">Technologies</h5>
          <div className="fixed-grid">
            <div className="grid">
              <div className="cell">👍 JavaScript</div>
              <div className="cell">👍 CSS</div>
              <div className="cell">👍 HTML</div>
              <div className="cell">👍 NextJS</div>
              <div className="cell">👍 ReactTS</div>
              <div className="cell">👍 TypeScript</div>
              <div className="cell">👍 BulmaCSS</div>
            </div>
          </div>
        </div>
        <div className="column is-half is-flex is-justify-content-center is-align-content-center">
          <figure className="image is-256x256">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/me-ripped.jpg?alt=media&token=d1851abd-9352-469e-9fc6-b649ae44f91b"
              alt="Octocat"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
