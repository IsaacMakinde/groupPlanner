import Event from "../../interfaces/EventInter";
import React, { FC } from "react";
interface EventCardProps {
  eventObject: Event;
}

const EventCard: FC<EventCardProps> = ({ eventObject }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-2by1">
          <img
            src="https://bulma.io/assets/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{eventObject.name}</p>
          </div>
        </div>

        <div className="content"></div>
      </div>
    </div>
  );
};

export default EventCard;
