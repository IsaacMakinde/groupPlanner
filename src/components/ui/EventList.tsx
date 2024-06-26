import Event from "../../interfaces/EventInter";
import EventForm from "../form/CreateEventForm";
import DeleteEventForm from "../form/DeleteEventForm";
import EditEventForm from "../form/EditEventForm";
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
} from "../../services/EventService";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Counter from "./Counter";

const EventList: React.FC = () => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [eventToDelete, setEventToDelete] = useState<Event>(null);
  const [eventToEdit, setEventToEdit] = useState<Event>(null);

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
    try {
      const response = await createEvent(event);
      const newEvent = response.data;
      setEventsList([...eventsList, newEvent]);
      console.log("Event added", event);
      console.log(eventsList);
      setShowCreateForm(false);
    } catch (error) {
      console.log("Error adding event", error);
    }
  };

  const handleEditFormOpen = (eventId: string) => {
    const event = eventsList.find((event) => event.id === eventId);
    if (event) {
      setEventToEdit(event);
      setShowEditForm(true);
    }

    console.log("event to edit:", eventToEdit);
  };

  const handleEditFormClose = () => {
    setShowEditForm(false);
  };

  const editEventFormAction = async (eventObject) => {
    try {
      const response = await updateEvent(eventObject);
      const updatedEvent = response.data;
      setEventsList(
        eventsList.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
      handleEditFormClose();
      console.log("event to edit from form:", eventObject);
    } catch (error) {
      console.log("Error editing event", error);
    }
  };

  const handleDeleteFormOpen = (eventId: string) => {
    setShowDeleteForm(true);
    setEventToDelete(eventsList.find((event) => event.id === eventId));
    console.log("event to delete:", eventToDelete);
  };

  const handleDeleteFormClose = () => {
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
    handleDeleteFormClose();
    console.log("event to delete from form:", eventId);
  };

  return (
    <section className="section is-capitalized">
      <p className="title is-4">upcoming events</p>

      <Counter></Counter>
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
          <label className="label has-text-primary">Order</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Ascending</option>
                <option>Descending</option>
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
              onDeleteEvent={handleDeleteFormOpen}
              onEditEvent={handleEditFormOpen}
            />
          ))
        )}
      </div>

      <button
        className="add-event-button button is-link is-medium is-rounded"
        aria-label="createEventButton"
        onClick={handleEventCreateButton}
      >
        Add Event
      </button>

      {showCreateForm && (
        <EventForm
          showForm={showCreateForm}
          onClose={handleEventCreateButton}
          onAddEvent={handleAddEvent}
        />
      )}

      {showDeleteForm && eventToDelete && (
        <DeleteEventForm
          deleteItem={deleteEventFormAction}
          event={eventToDelete}
          onClose={handleDeleteFormClose}
          showForm={showDeleteForm}
        />
      )}

      {showEditForm && eventToEdit && (
        <EditEventForm
          showForm={showEditForm}
          onClose={handleEditFormClose}
          onEditEvent={editEventFormAction}
          event={eventToEdit}
        />
      )}
    </section>
  );
};

export default EventList;
