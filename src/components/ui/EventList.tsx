import Event from "../../interfaces/EventInter";
interface EventListProps {
  events: Event[];
}
import EventCard from "./EventCard";
const EventList: React.FC<EventListProps> = ({ events }) => {
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
