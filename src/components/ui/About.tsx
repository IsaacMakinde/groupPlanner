import React from "react";

const About: React.FC = () => {
  return (
    <div className="section has-background-white is-align-self-flex-start content mt-6 has-text-black">
      <h1 className="has-text-black">About</h1>
      <div className="columns">
        <div className="column is-half">
          <p className="">
            As a recent honors graduate in Computer Science, I am actively
            seeking a challenging software engineering position where I can
            apply my expertise in full-stack development. With proficiency in
            frameworks such as React Native, React, Next.js, and Angular, along
            with advanced knowledge of data structures and algorithms, I am
            equipped to develop optimized and scalable applications for both
            mobile and desktop environments. Additionally, my IBM Fullstack
            Developer certification has further honed my technical abilities
            across the full development stack.
          </p>
          <p>
            I am passionate about writing clean, efficient code and look forward
            to contributing to impactful projects that push the boundaries of
            technology and allow me the further my skills as I continue
            learning.
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
              src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/IMG-20221102-WA0017.jpg?alt=media&token=8d874560-f27a-4273-927b-08e7a5615183"
              alt="A photo of Isaac Makinde"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
