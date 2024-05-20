import Event from "../../interfaces/EventInter";
import EventCard from "./EventCard";
const EventList = ({ events }) => {
  return (
    <section className="section">
      <p>Events</p>
      {events.map((event: Event) => (
        <EventCard key={event.id} eventObject={event} />
      ))}
    </section>
  );
};

export default EventList;
