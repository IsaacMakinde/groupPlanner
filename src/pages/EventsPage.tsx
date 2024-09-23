import EventList from "../components/ui/EventList";

const EventsPage: React.FC = () => {
  return (
    <div>
      <section className="section">
        <div className="hero-section">
          <div className="hero-section-text has-text-white">
            <h1 className="hero-section-title  is-align-self-center  has-text-white is-weight-bold">
              IGM Events
            </h1>
            <p className="hero-section-subtitle">
              {" "}
              A simple event manager between friends on this platform, on this
              platform you can create, edit, delete, and view events. The goal
              of this platform is to make it easier for you and your friends to
              plan events together and keep each other updated. Let's get
              started!
            </p>
            <a href="#createEventButton">
              <button className="button is-link">Get Started</button>
            </a>
          </div>
        </div>
      </section>
      <EventList></EventList>
    </div>
  );
};

export default EventsPage;
