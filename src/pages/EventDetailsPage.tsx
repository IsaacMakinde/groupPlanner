import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../interfaces/EventInter";
import { DateTimeFormatOptions } from "intl";
import CountdownTimer from "../components/ui/CountdownTimer";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [date, setDate] = useState(new Date());

  // if (!event) {
  //   return <div>Loading...</div>;
  // }

  // TODO: Fetch event using eventService method
  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);

        const newDate = new Date(data.date);
        setDate(newDate);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
        setError(true);
      });
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short",
    };

    return date.toLocaleDateString("en-US", options);
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <div className="container is-fullhd">
      <CountdownTimer targetDate={date} eventTitle={event.title} />

      <div className="container has-text-black is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          <h1 className="title has-text-black">{event.title}</h1>
          <div className="is-flex is-flex-direction-row is-justify-content-space-between">
            <button className="button is-primary is-dark mx-2">
              Interested
            </button>
            <button className="button is-primary is-dark mx-2">Going</button>
          </div>
        </div>

        <div className="is-flex is-flex-direction-row is-justify-content-space-between mt-4">
          <div className="tags has-addons">
            <span className="tag is-info">
              <i className="fa fa-calendar"></i>
            </span>
            <span className="tag">{formatDate(event.date)}</span>
          </div>
          <div className="tags has-addons">
            <span className="tag is-success">
              <i className="fa fa-euro-sign"></i>
            </span>
            <span className="tag">{event.pricing.toFixed(2)}</span>
          </div>
        </div>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          <div className="tags has-addons">
            <span className="tag is-info">
              <i className="fa fa-map-marker"></i>
            </span>
            <span className="tag">{event.venue}</span>
          </div>
        </div>
        <div className="is-align-self-center is-flex is-flex-direction-row is-justify-content-space-between">
          <p className="has-text-black">GuestList</p>
        </div>
      </div>

      <div className="tabs is-centered is-medium mt-6 mb-6 is-dark is-boxed">
        <ul>
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fa fa-comment" aria-hidden="true"></i>
              </span>
              <span>Reviews</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fa fa-info" aria-hidden="true"></i>
              </span>
              <span>Details</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span>Activities</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fa fa-car" aria-hidden="true"></i>
              </span>
              <span>Carpooling</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Photos</span>
            </a>
          </li>
        </ul>
      </div>

      <article className="media has-text-black mt-4 mb-8 mx-3">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  className="is-rounded"
                  src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>

              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </article>

              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  className="is-rounded"
                  src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media mx-3">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea is-primary"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EventDetailsPage;
