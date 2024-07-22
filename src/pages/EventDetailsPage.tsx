import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../interfaces/EventInter";
import { DateTimeFormatOptions } from "intl";
import CountdownTimer from "../components/ui/CountdownTimer";
import GuestList from "../components/ui/GuestList";
import Reviews from "../components/form/Reviews";
import Activities from "../components/ui/Activities";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("reviews");

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
            <button className="button is-rounded is-outlined is-primary is-dark mx-2">
              Interested
            </button>
            <button className="button is-rounded is-primary is-dark mx-2">
              Decline
            </button>
          </div>
        </div>

        <div className="is-flex is-flex-direction-row is-justify-content-space-between mt-4">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-calendar"></i>
            </span>
            <span className="tag">{formatDate(event.date)}</span>
          </div>
          <div className="tags has-addons are-medium">
            <span className="tag is-success">
              <i className="fa fa-euro-sign"></i>
            </span>
            <span className="tag">{event.pricing.toFixed(2)}</span>
          </div>
        </div>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-map-marker"></i>
            </span>
            <span className="tag">{event.venue}</span>
          </div>
        </div>
        <div className="is-align-self-center"></div>
        <GuestList />
      </div>
      <div className="tabs is-centered is-medium mt-6 mb-6 is-dark is-boxed  ">
        <ul>
          <li
            onClick={() => {
              setActiveTab("reviews");
            }}
            className="is-active"
          >
            <a>
              <span className="icon is-small">
                <i className="fa fa-comment" aria-hidden="true"></i>
              </span>
              <span>Reviews</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("details");
            }}
          >
            <a>
              <span className="icon is-small">
                <i className="fa fa-info" aria-hidden="true"></i>
              </span>
              <span>Details</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("activities");
            }}
          >
            <a>
              <span className="icon is-small">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span>Activities</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("carpooling");
            }}
          >
            <a>
              <span className="icon is-small">
                <i className="fa fa-car" aria-hidden="true"></i>
              </span>
              <span>Carpooling</span>
            </a>
          </li>
          <li
            onClick={() => {
              setActiveTab("photos");
            }}
          >
            <a>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Photos</span>
            </a>
          </li>
        </ul>
      </div>
      {activeTab === "photos" && <div>Photos</div>}
      {activeTab === "carpooling" && <div>Carpooling</div>}
      {activeTab === "activities" && <Activities />}
      {activeTab === "details" && <div>Details</div>}
      {activeTab === "reviews" && <Reviews />}
    </div>
  );
};

export default EventDetailsPage;
