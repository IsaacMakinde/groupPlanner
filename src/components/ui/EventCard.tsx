import Event from "../../interfaces/EventInter";
import { FC } from "react";
import unsplash001 from "../../assets/img/unsplash-001.jpg";
import { DateTimeFormatOptions } from "intl";

interface EventCardProps {
  eventObject: Event;
  onDeleteEvent: (eventId: string) => void;
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

const EventCard: FC<EventCardProps> = ({ eventObject, onDeleteEvent }) => {
  return (
    // <div className="card">
    //   <div className="card-content has-text-left is-capitalized">
    //     <div className="media">
    //       <div className="media-left">
    //         <div className="subtitle has-icons-left">
    //           <div className="is-flex  has-text-success flex-direction-row is-justify-content-start is-align-items-center">
    //             <i className="fas fa-calendar"></i>
    //             <p className="mx-2">{formatDate(eventObject.date)}</p>
    //           </div>
    //           <div className="is-flex  has-text-info flex-direction-row is-justify-content-start is-align-items-center">
    //             <i className="fas fa-map-marker"></i>
    //             <p className="mx-2">{eventObject.venue}</p>
    //           </div>
    //           <div className="is-flex has-text-warning flex-direction-row is-justify-content-start is-align-items-center">
    //             <i className="fas fa-euro-sign"></i>
    //             <p className="mx-2">{eventObject.pricing.toFixed(2)}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <p className="title is-4">
    //       {eventObject.title} ({eventObject.category})
    //     </p>
    //     <p className="is-flex-wrap has-height-50">{eventObject.description}</p>

    //     <div className="is-flex-wrap mt-6 is-capitalized">
    //       <span className="tag is-primary">{eventObject.host}</span>
    //       <span className="tag is-info">Angel</span>
    //       <span className="tag is-info">Destiny</span>
    //       <span className="tag is-info">Skye</span>
    //       <span className="tag is-info">Raj</span>
    //       <span className="tag is-info">Hope</span>
    //     </div>
    //   </div>
    // </div>
    <div className="event-card">
      <div className="event-card-cta">
        <div className="event-user-cta">
          <button className="button is-small is-primary">Edit</button>
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
        <p className="is-size-7">{eventObject.description}</p>
      </div>
      <img src={unsplash001} alt="unsplash001" />
    </div>
  );
};

export default EventCard;

{
  /* <footer className="card-footer">
<a href="#" className="card-footer-item">
  Edit
</a>
<a
  className="card-footer-item"
  onClick={() => onDeleteEvent(eventObject.id)}
>
  Delete
</a>
</footer> */
}
