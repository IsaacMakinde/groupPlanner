import EventList from "../components/ui/EventList";

const Home: React.FC = () => {
  return (
    <div>
      <section className="section">
        <div className="hero-section">
          <div className="hero-section-text">
            <h1 className="hero-section-title has-text-black">Event Manager</h1>
            <p className="hero-section-subtitle has-text-dark ">
              A simple event manager for all your event planning needs
            </p>
            <button className="button is-primary">Get started</button>
          </div>
        </div>
      </section>
      <EventList></EventList>
    </div>
  );
};

export default Home;
