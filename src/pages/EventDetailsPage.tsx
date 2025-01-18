import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateTimeFormatOptions } from "intl";
import CountdownTimer from "../components/ui/CountdownTimer";
import GuestList from "../components/ui/GuestList";
import Reviews from "../components/form/Reviews";
import Activities from "../components/ui/Activities";
import Details from "../components/ui/Details";
import Carpooling from "../components/form/Carpooling";
import GuestData from "../interfaces/guestData";
import Photos from "../components/form/Photos";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useEvent } from "../contexts/Events/useEvent";
import { useQuery } from "react-query";
import { getEvent } from "../services/EventService";
import { useMutation } from "react-query";
import { addGuest } from "../services/EventService";
import Swal from "sweetalert2";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { hostUser, fetchEvent } = useEvent();
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("reviews");
  const { isLoaded, user } = useUser();
  // const [formLoading, setFormLoading] = useState(false);

  //useQuery hook to fetch event
  const {
    data: eventItem,
    error: eventFetchingError,
    isLoading: IsEventLoading,
  } = useQuery(["events", id], () => getEvent(id), { enabled: !!id });

  const { mutate: joinEvent } = useMutation(
    ({ eventId, data }: { eventId: string; data: GuestData }) =>
      addGuest(eventId, data), // Destructure the object to pass the correct parameters
    {
      onSuccess: (data) => {
        console.log("Guest added to event", data);
        Swal.fire({
          title: "Success!",
          text: "Guest successfully added to event!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      },
      onError: (error) => {
        console.error("Error adding guest to event", error);
        alert("There was an error adding the guest to the event.");
      },
      onSettled: () => {
        console.log("Guest addition process settled.");
      },
    }
  );

  const handleAddGuest = () => {
    const guestData: GuestData = {
      clerk_id: user.id,
      guest_status: "subscribed",
      guest_email: user.emailAddresses[0].emailAddress,
      guest_name: user.firstName,
      guest_image_url: user.imageUrl,
      event_id: id,
    };
    console.log("Submitting guest data", guestData);

    joinEvent({ eventId: id, data: guestData });
  };

  useEffect(() => {
    fetchEvent(id);
  }, [id, fetchEvent, eventItem]);

  useEffect(() => {
    if (eventItem) {
      setDate(new Date(eventItem.date));
      console.log("hostUser", hostUser);
    }
  }, [eventItem, hostUser]);

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

  if (IsEventLoading || !isLoaded) {
    return <p>Loading...</p>;
  }

  if (eventFetchingError) {
    return <div>Error fetching events</div>;
  }

  if (!eventItem) {
    return <p>Event not found</p>;
  }

  return (
    <div className="container is-fullhd">
      <CountdownTimer
        targetDate={date}
        eventTitle={eventItem.title}
        userName={eventItem.host}
        hostImage={hostUser?.image_url}
      />
      <div className="container has-text-black is-flex is-flex-direction-column">
        <div className="is-flex is-flex-direction-row is-justify-content-space-between mt-4 has-text-white">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-calendar"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {formatDate(eventItem.date)}
            </span>
          </div>
          <div className="tags has-addons are-medium ">
            <span className="tag is-success">
              <i className="fa fa-euro-sign"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {eventItem.pricing}
            </span>
          </div>
        </div>
        <div className="is-flex is-flex-direction-row is-justify-content-space-between">
          <div className="tags has-addons are-medium">
            <span className="tag is-info">
              <i className="fa fa-map-marker"></i>
            </span>
            <span className="tag has-text-white has-background-black">
              {eventItem.venue}
            </span>
          </div>
        </div>
        <div className="is-align-self-center"></div>

        <GuestList host={eventItem.host} />
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
        <SignedIn>
          <button className="button is-outlined is-black">Cancel</button>
          <button className="button is-black" onClick={handleAddGuest}>
            Subscribe
          </button>
        </SignedIn>
        <button className="button is-link">Add to Calendar</button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
