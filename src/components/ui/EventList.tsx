import Event from "../../interfaces/EventInter";
interface EventListProps {
  events: Event[];
}
import EventCard from "./EventCard";
const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <section className="section is-capitalized">
      <p className="title is-4">upcoming events</p>
      {events.map((event: Event) => (
        <EventCard key={event.id} eventObject={event} />
      ))}
    </section>
  );
};

export default EventList;
