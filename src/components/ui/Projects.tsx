import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="section has-background-light is-align-self-flex-start content has-text-black">
      <h3 className="subtitle has-text-link">Featured Project</h3>
      <h1 className="title has-text-black">Group Planner 🔗</h1>
      <div className="columns">
        <p className="column is-half">
          Group Planner is a simple event manager between friends on this
          platform, on this platform you can create, edit, delete, and view
          events. The goal of this platform is to make it easier for you and
          your friends to plan events together and keep each other updated.
          Let's get started!
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
      <div className="is-justify-content-center is-align-content-center">
        <div className="fixed-grid">
          <div className="grid">
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/pexels-rsantos1232-3888151.jpg?alt=media&token=61ef59c2-2bc5-4423-9bb9-b8dcc8387148"
                  alt="Octocat"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/seo-scrabble.jpg?alt=media&token=1f558ba5-0a77-470d-ad4f-b225fb2dd4cd"
                  alt="Octocat"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/purple-table.jpg?alt=media&token=7b77c492-0a44-46fb-8ee7-6cdcbcabd1bb"
                  alt="Octocat"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/sign-up-code.jpg?alt=media&token=891e1d19-6291-4fb4-9e3b-a262ac8d000a"
                  alt="Octocat"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/npm-sticker.jpg?alt=media&token=ba049ab3-8b62-4f97-b4e2-d91a89ae08d1"
                  alt="Octocat"
                />
              </figure>
            </div>
            <div className="cell">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/pexels-markusspiske-6190327.jpg?alt=media&token=deb5f8e0-1037-4f93-8ef6-b8f8a4048233"
                  alt="Octocat"
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
