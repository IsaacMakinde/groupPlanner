import EventList from "../components/ui/EventList";
const EventsPage: React.FC = () => {
  return (
    <div>
      <section className="section">
        <div className="hero-section">
          <div className="hero-section-text has-text-white">
            <h1 className="hero-section-title  has-text-white is-weight-bold">
              Event Manager
            </h1>
            <p className="hero-section-subtitle">
              A simple event manager for all your event planning needs.
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
