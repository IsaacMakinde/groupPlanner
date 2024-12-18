import React from "react";

const ProjectsDisplay: React.FC = () => {
  return (
    <div className="section has-background-white is-flex is-flex-direction-column mt-6 is-align-self-flex-start content">
      <div className="is-flex is-flex-direction-column is-align-self-center content columns">
        <h1 className="has-text-black is-align-self-center column">Projects</h1>
        <p className="column is-align-self-center is-9">
          This section showcases a selection of my previous projects,
          highlighting both the creativity and technical skills applied in each.
          Each project was crafted with a specific intent, whether it was to
          solve a real-world problem, explore a unique concept, or demonstrate
          mastery of a particular tool or technology. My aim is to create work
          that not only achieves its practical objectives but also resonates on
          a visual and conceptual level. Through these examples, you can see my
          dedication to quality, attention to detail, and commitment to pushing
          the boundaries of design and functionality.
        </p>
      </div>
      <div className="is-justify-content-center is-align-content-center">
        <div className="fixed-grid">
          <div className="grid">
            <div className="cell has-background-white ">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/my-cloud-ap.png?alt=media&token=f62a2827-53f3-40da-ae38-a7987078a914"
                  alt="One of my projects"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell has-background-white is-flex is-flex-direction-column is-align-self-center">
              <div className="content is-flex is-flex-direction-column is-align-items-center">
                <h3 className="has-text-black">Ticket Master Redux/BulmaCSS</h3>
                <p>
                  I was presented with the opportunity to build a full-stack
                  application using Angular that would handle basic CRUD
                  operations, with a design aesthetic inspired by Ticketmaster's
                  UI. Intrigued by the challenge, I decided to take on the task,
                  seeing it as a perfect chance to apply and expand my skills in
                  front-end development, particularly with Angular.
                </p>
                <p className="has-text-black">
                  To build the application, I used Bulma CSS to create a clean,
                  modern design quickly and efficiently. For state management,
                  Redux ensured smooth data flow across components, enhancing
                  the app's responsiveness. I set up a mock API with
                  simple-json-server to handle basic CRUD operations, simulating
                  a real back-end. Finally, I utilized Nodemon to automate
                  server reloads during development, streamlining the testing
                  process. Together, these tools enabled me to create a
                  functional, visually appealing application that met all
                  project requirements.
                </p>

                <a href="https://github.com/IsaacMakinde/EventsManagerBulma">
                  <button className="button is-link">View Project</button>
                </a>
              </div>
            </div>
            <div className="cell has-background-white is-flex is-flex-direction-column is-align-self-center">
              <div className="content is-flex is-flex-direction-column is-align-items-center">
                <h3 className="has-text-black">Josephu</h3>
                <p>
                  Josephu is a web application designed to serve as a personal
                  website for a YouTuber, providing users with access to
                  exclusive content and showcasing previous collaborations with
                  other creators. The platform also features a 'Contact Me'
                  page, intended to facilitate further collaborations and
                  engagement with the YouTuber’s audience and peers. The primary
                  goal was to create a professional yet accessible space to
                  connect with fans and collaborators alike.
                </p>

                <p className="has-text-black">
                  This project was built without a backend, focusing solely on
                  practicing fundamental CSS techniques and ensuring responsive
                  design for mobile devices. The application served as a
                  hands-on exercise in crafting visually appealing layouts and
                  adaptable designs, with the long-term intent of developing it
                  into a functional personal website for fostering
                  collaborations and audience interaction.
                </p>

                <a href="https://github.com/MishaTuohy">
                  <button className="button is-link">View Project</button>
                </a>
              </div>
            </div>
            <div className="cell has-background-white">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/josephu-5-4.png?alt=media&token=fbf6c120-2d01-4061-9a53-e9516421f126"
                  alt="One of my projects"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="cell has-background-white">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/country-app-republic.png?alt=media&token=f3a1c536-6774-4e5f-ad05-4b9599078429"
                  alt="One of my projects"
                  loading="lazy"
                />
              </figure>
            </div>
            <div className="cell has-background-white is-flex is-flex-direction-column is-align-self-center">
              <div className="content is-flex is-flex-direction-column is-align-items-center">
                <h3 className="has-text-black">Country Wiki</h3>
                <p>
                  Country Wiki is an application I was tasked with developing,
                  designed to fetch and display relevant information about
                  countries using the Country API. The goal was to provide a
                  clean and uniform interface for users to search for and
                  explore detailed data about various countries. To achieve a
                  polished and consistent look, I utilized BulmaCSS, a framework
                  I was keen to learn at the time, which allowed for quick and
                  professional styling across the application.
                </p>
                <p className="has-text-black">
                  On the backend, I implemented an API using Express and
                  Node.js, adhering to the MVC architecture to ensure a clear
                  separation of concerns and maintainability. This project
                  provided a great opportunity to practice structuring a backend
                  efficiently while integrating a third-party API. By combining
                  these tools and techniques, I was able to create a functional
                  and visually appealing application that met the project
                  requirements.
                </p>

                <a href="https://github.com/IsaacMakinde/countryApp">
                  <button className="button is-link">View Project</button>
                </a>
              </div>
            </div>
            <div className="cell has-background-white is-flex is-flex-direction-column is-align-self-center">
              <div className="content is-flex is-flex-direction-column is-align-items-center">
                <h3 className="has-text-black">StoreB {"(Andorid MVVM)"}</h3>
                <p>
                  Store B was an Android application that my partner and I
                  conceptualized for our fourth-year project. The idea was to
                  create a social scanning system for mobile devices, aiming to
                  replace the handheld scanners commonly used in stores like
                  Tesco. This innovative concept sought to enhance user
                  convenience and efficiency in retail environments by
                  leveraging mobile technology. The original project served as a
                  foundation for exploring advanced development techniques and
                  practical applications of software in real-world scenarios.
                </p>
                <p className="has-text-black">
                  Later, I decided to revisit and remake the project using the
                  MVVM architecture to improve maintainability and scalability.
                  I integrated web scraping and Firebase to enhance
                  functionality and used a tech stack that included Android,
                  Express, Python, and a MySQL database. However, due to the
                  significant workload and my lack of confidence in my skills at
                  the time, I ultimately had to abandon the project. This
                  experience taught me valuable lessons about project scope,
                  time management, and the importance of incremental progress in
                  tackling ambitious ideas.
                </p>

                <a href="https://github.com/IsaacMakinde/countryApp">
                  <button className="button is-link">View Project</button>
                </a>
              </div>
            </div>

            <div className="cell has-background-white">
              <figure className="image is-256x256">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/store-small-screenshot.png?alt=media&token=18537a27-5cb6-479c-a7ce-8e4c3feb807e"
                  alt="One of my projects"
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
export default ProjectsDisplay;
