import Event from "../../interfaces/EventInter";
import { FC } from "react";
import unsplash001 from "../../assets/img/unsplash-001.jpg";
import { DateTimeFormatOptions } from "intl";
import { Link } from "react-router-dom";

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
    <div className="event-card is-mobile">
      <div className="event-card-cta">
        <div className="event-user-cta">
          <button
            className="button is-medium is-primary"
            onClick={() => onEditEvent(eventObject.id)}
          >
            Edit
          </button>
          <button
            className="button is-medium is-danger"
            onClick={() => onDeleteEvent(eventObject.id)}
          >
            Delete
          </button>
        </div>
        <div className="event-info">
          <p className="is-size-4 has-text-info">{eventObject.venue}</p>
          <p className="is-size-6 has-text-info">
            <i className="fas fa-euro-sign"></i>
            {eventObject.pricing.toPrecision(4)}
          </p>
        </div>
      </div>

      <div className="event-card-content">
        <p className="is-size-6 has-text-danger event-card-date ">
          {formatDate(eventObject.date)}
        </p>
        <p className="event-card-title">{eventObject.title}</p>
        <p className="is-size-6 has-text-grey-dark event-card-description">
          {eventObject.description}
        </p>

        <div className="event-card-footer is-flex is-justify-content-space-between is-align-items-center columns is-full">
          <p className="is-size-6 has-text-grey column">
            <span className="tag is-medium is-info is-hovered">
              {eventObject.category}
            </span>
          </p>

          <Link to={`/events/${eventObject.id}`}>
            <button className="button is-medium is-primary">
              View Details
            </button>{" "}
          </Link>
        </div>
      </div>

      <img className="image is-128x128" src={unsplash001} alt="unsplash001" />
    </div>
  );
};

export default EventCard;
