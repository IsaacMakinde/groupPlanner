import Event from "../../interfaces/EventInter";
import EventForm from "../form/CreateEventForm";
import DeleteEventForm from "../form/DeleteEventForm";
import {
  getEvents,
  createEvent,
  deleteEvent,
} from "../../services/EventService";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const EventList: React.FC = () => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [eventToDelete, setEventToDelete] = useState<Event>(null);

  useEffect(() => {
    console.log("use effect ran");
    getEvents()
      .then((data) => {
        setEventsList(data);
      })
      .catch((error) => {
        console.log("Error fetching events", error);
      });
  }, []);

  const handleEventCreateButton = () => {
    setShowCreateForm((showCreateForm) => !showCreateForm);
    console.log("Create Event!");
  };

  const handleAddEvent = async (event: Event) => {
    const response = await createEvent(event);
    const newEvent = response.data;
    setEventsList([...eventsList, newEvent]);
    console.log("Event added", event);
    console.log(eventsList);
    setShowCreateForm(false);
  };

  const handleFormOpen = (eventId: string) => {
    setShowDeleteForm(true);
    setEventToDelete(eventsList.find((event) => event.id === eventId));
  };

  const handleFormClose = () => {
    setShowDeleteForm(false);
  };
  const deleteEventFormAction = async (eventId: string) => {
    deleteEvent(eventId)
      .then(() => {
        setEventsList(eventsList.filter((event) => event.id !== eventId));
      })
      .catch((error) => {
        console.log("Error deleting event", error);
      });
    handleFormClose();
    console.log("event to delete from form:", eventId);
  };
  return (
    <section className="section is-capitalized">
      <p className="title is-4">upcoming events</p>
      <div className="event-list-controls">
        <div className="field">
          <label className="label has-text-primary">Sort by</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Date</option>
                <option>Location</option>
                <option>Guests</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label has-text-primary">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-info"
              type="text"
              placeholder="Search for events"
            ></input>
            <span className="icon is-small is-left">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="wrapper">
        {eventsList.length === 0 ? (
          <p>No events available</p>
        ) : (
          eventsList.map((event: Event) => (
            <EventCard
              key={event.id}
              eventObject={event}
              onDeleteEvent={handleFormOpen}
            />
          ))
        )}

        <button
          className="add-event-button button is-link is-medium is-rounded"
          aria-label="createEventButton"
          onClick={handleEventCreateButton}
        >
          Add Event
        </button>
      </div>

      <EventForm
        showForm={showCreateForm}
        onClose={handleEventCreateButton}
        onAddEvent={handleAddEvent}
      ></EventForm>

      <DeleteEventForm
        deleteItem={deleteEventFormAction}
        event={eventToDelete}
        onClose={handleFormClose}
        showForm={showDeleteForm}
      ></DeleteEventForm>
    </section>
  );
};

export default EventList;
