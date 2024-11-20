import React from "react";
import { Link } from "react-router-dom";
const Projects: React.FC = () => {
  return (
    <div className="section has-background-light is-align-self-flex-start content has-text-black">
      <h3 className="subtitle has-text-link">Featured Project</h3>
      <h1 className="title has-text-black">Group Planner 🔗</h1>
      <div className="columns">
        <p className="column is-half">
          Group Planner is a straightforward event management platform designed
          for you and your friends. Here, you can easily create, edit, delete,
          and view events, all in one place. The goal is to simplify event
          planning and help everyone stay updated effortlessly. Let’s get
          started!
        </p>
      </div>

      <div className="columns">
        <div className="content column">
          <h4 className="has-text-black">Tech Stack</h4>
          <ul>
            <li>BulmaCSS</li>
            <li>ReactTS</li>
            <li>Axios</li>
            <li>Python Quarts</li>
            <li>DashFilesIO</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="content column">
          <h4 className="has-text-black">Project Type</h4>
          <ul>
            <li>Fullstack</li>
          </ul>
        </div>
        <div className="content column">
          <h4 className="has-text-black">Time Line</h4>
          <ul>
            <li>April 2024 - Present</li>
          </ul>
        </div>
      </div>
      <div className="section my-2 column is-2">
        <a href="">
          <Link to={"/events"}>
            <button className="button is-link is-small">Add an event</button>
          </Link>
        </a>
      </div>
      <div className="is-justify-content-center is-align-content-center">
        <div className="fixed-grid">
          <div className="grid">
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/event-details-page.png?alt=media&token=5cd52302-934d-45cf-b353-501adc311991"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/update-event-modal.png?alt=media&token=404b18fc-8ef3-463a-9a1a-6b923fda6e36"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/Screenshot%202024-11-16%20182406.png?alt=media&token=97dd8a96-6c58-42bc-9266-b77468857787"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/testing-api.png?alt=media&token=1c1bde33-57e8-4c26-a695-e8d8450f18d6"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/review-comp.png?alt=media&token=a6ae9038-23e7-40c6-9e11-df621cc5cfd9"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/database-plan.png?alt=media&token=25e565eb-7789-4d58-808b-a15ed740dabc"
                  alt="Octocat"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
