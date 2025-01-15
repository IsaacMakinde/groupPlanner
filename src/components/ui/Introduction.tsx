import React, { useEffect } from "react";

const Introduction: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className=" is-flex has-background-white is-flex-direction-column section is-align-items-center is-justify-content-center">
        <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
          <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center is-align-content-center is-align-content-center">
            <figure className="image is-128x128 ">
              <img
                className="is-rounded is-skeleton"
                src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/IMG_0500.jpg?alt=media&token=9b8c260c-ac84-4c34-baf0-1bb5f5f7f533"
                alt="IsaacGM logo"
              />
            </figure>
            <h1 className="title is-4 is-align-self-center is-skeleton">
              Hello, I'm Isaac Makinde👋
            </h1>
          </div>
        </div>
        <h1 className="impact-headline is-align-self-center is-skeleton">
          Fullstack{"\n"}Developer.
        </h1>

        <div className="is-flex is-flex-direction-column gap-2 is-align-self-center introduction-sub">
          <p className="subtitle-sub is-align-self-center is-align-content-center has-text-centered is-skeleton">
            A passionate Fullstack web developer and machine learning enthusiast{" "}
            specialized in the manipulation of data and production of
            intelligent systems.
          </p>

          <a
            className="is-align-self-center is-skeleton"
            href="https://www.buymeacoffee.com/IsaacMak"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: "60px", width: "217px" }}
            ></img>
          </a>
        </div>
      </div>
    );
  }

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

        <a
          className="is-align-self-center"
          href="https://www.buymeacoffee.com/IsaacMak"
          target="_blank"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
            alt="Buy Me A Coffee"
            style={{ height: "60px", width: "217px" }}
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
