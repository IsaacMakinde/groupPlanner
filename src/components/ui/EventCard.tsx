import Event from "../../interfaces/EventInter";
import { FC } from "react";
import unsplash001 from "../../assets/img/unsplash-001.jpg";
import { DateTimeFormatOptions } from "intl";

interface EventCardProps {
  eventObject: Event;
  onDeleteEvent: (eventId: string) => void;
  onEditEvent: (eventId: string) => void;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const EventCard: FC<EventCardProps> = ({
  eventObject,
  onDeleteEvent,
  onEditEvent,
}) => {
  return (
    <div className="event-card">
      <div className="event-card-cta">
        <div className="event-user-cta">
          <button
            className="button is-small is-primary"
            onClick={() => onEditEvent(eventObject.id)}
          >
            Edit
          </button>
          <button
            className="button is-small is-danger"
            onClick={() => onDeleteEvent(eventObject.id)}
          >
            Delete
          </button>
        </div>
        <div className="event-info">
          <p className="is-size-5 has-text-info">{eventObject.venue}</p>
          <p className="is-size-7 has-text-info">
            <i className="fas fa-euro-sign"></i>
            {eventObject.pricing.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="event-card-content">
        <p className="is-size-7 has-text-danger event-card-date ">
          {formatDate(eventObject.date)}
        </p>
        <p className="event-card-title">{eventObject.title}</p>
        <p className="is-size-7 has-text-grey-dark event-card-description">
          {eventObject.description}
        </p>
      </div>
      <img src={unsplash001} alt="unsplash001" />
    </div>
  );
};

export default EventCard;
