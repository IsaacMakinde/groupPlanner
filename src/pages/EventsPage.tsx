import EventList from "../components/ui/EventList";

const Home: React.FC = () => {
  return (
    <div>
      <section className="top section">
        <div className="container">
          <h1 className="title is-1">Welcome to the Events page</h1>
        </div>
      </section>
      <EventList></EventList>
    </div>
  );
};

export default Home;
