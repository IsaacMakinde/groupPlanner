import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateTimeFormatOptions } from "intl";
import CountdownTimer from "../components/ui/CountdownTimer";
import GuestList from "../components/ui/GuestList";
import Reviews from "../components/form/Reviews";
import Activities from "../components/ui/Activities";
import Details from "../components/ui/Details";
import Carpooling from "../components/form/Carpooling";
import Photos from "../components/form/Photos";
import { useUser } from "@clerk/clerk-react";
import { useEvent } from "../contexts/Events/useEvent";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { event, fetchEvent, loading, error } = useEvent();
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("reviews");
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    fetchEvent(id);
  }, [id, fetchEvent]);

  useEffect(() => {
    if (event) {
      setDate(new Date(event.date));
    }
  }, [event]);

  const addToInterested = () => {
    console.log("Add to interested of this event");
  };

  const declineInvite = () => {
    console.log("Decline this event");
  };

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

  if (!isLoaded) {
    return <p>Loading user...</p>;
  }

  return (
    <div className="container is-fullhd">
      <CountdownTimer
        targetDate={date}
        eventTitle={event.title}
        userName={event.host}
      />
      <div className="container has-text-black is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          {isSignedIn && !(user.fullName == event.host) && isLoaded && (
            <div className="is-flex is-flex-direction-row is-justify-content-space-between">
              <button
                onClick={addToInterested}
                className="button is-rounded is-outlined is-primary is-dark mx-2"
              >
                Interested
              </button>
              <button
                onClick={declineInvite}
                className="button is-rounded is-primary is-dark mx-2"
              >
                Decline
              </button>
            </div>
          )}
        </div>

        <div className="is-flex is-flex-direction-row is-justify-content-space-between mt-4 has-text-white">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-calendar"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {formatDate(event.date)}
            </span>
          </div>
          <div className="tags has-addons are-medium ">
            <span className="tag is-success">
              <i className="fa fa-euro-sign"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {event.pricing.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-map-marker"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {event.venue}
            </span>
          </div>
        </div>
        <div className="is-align-self-center"></div>

        <GuestList host={event.host} />
      </div>
      <div className="tabs is-centered is-medium mt-6 mb-6 is-dark is-boxed ">
        <ul>
          <li
            onClick={() => {
              setActiveTab("reviews");
            }}
            className={activeTab === "reviews" ? "is-active" : ""}
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
            className={activeTab === "details" ? "is-active" : ""}
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
            className={activeTab === "activities" ? "is-active" : ""}
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
            className={activeTab === "carpooling" ? "is-active" : ""}
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
            className={activeTab === "photos" ? "is-active" : ""}
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
      {activeTab === "photos" && <Photos />}
      {activeTab === "carpooling" && <Carpooling />}
      {activeTab === "activities" && <Activities />}
      {activeTab === "details" && <Details />}
      {activeTab === "reviews" && <Reviews />}

      <div className="container buttons is-flex is-justify-content-center are-medium my-5">
        <button className="button is-outlined is-black">Cancel</button>
        <button className="button is-black">Bail</button>
        <button className="button is-link">Add to Calendar</button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
