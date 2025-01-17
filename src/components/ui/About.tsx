import React, { useEffect } from "react";

const About: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="section has-background-white is-align-self-flex-start content mt-6">
        <h1 className="has-skeleton">About</h1>
        <div className="columns">
          <div className="column is-half">
            <p className="skeleton-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </p>
            <p className="skeleton-lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </p>

            <h5 className="has-skeleton">Technologies</h5>
            <div className="fixed-grid">
              <div className="grid skeleton-lines">
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
          <div className="column is-half is-flex is-justify-content-center is-align-content-center ">
            <figure className="image is-128x128 is-skeleton">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/me-at-pink-beach.jpg?alt=media&token=400dbd8a-c41c-4f44-9d63-eefae798a773"
                alt="A photo of Isaac Makinde"
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }

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
              src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/me-at-pink-beach.jpg?alt=media&token=400dbd8a-c41c-4f44-9d63-eefae798a773"
              alt="A photo of Isaac Makinde"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
