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
import { useUser } from "@clerk/clerk-react";

const EventList: React.FC = () => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [eventToDelete, setEventToDelete] = useState<Event>(null);
  const [eventToEdit, setEventToEdit] = useState<Event>(null);
  const [Ascending, setAscending] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("Date");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await getEvents();
        setEventsList(events);
      } catch (error) {
        console.log("Error fetching events", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isSignedIn && isLoaded) {
      setUsername(user.fullName);
    }
  }, [isSignedIn, isLoaded, user]);

  const handleEventCreateButton = () => {
    setShowCreateForm((showCreateForm) => !showCreateForm);
  };

  const handleAddEvent = async (event: Event) => {
    try {
      const response = await createEvent(event);
      const newEvent = response.data;
      setEventsList([...eventsList, newEvent]);
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
  };

  const handleEditFormClose = () => {
    setShowEditForm(false);
  };

  const setSort = (e) => {
    setSortCriteria(e.target.value);
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
    } catch (error) {
      console.log("Error editing event", error);
    }
  };

  const setOrder = (e) => {
    if (e.target.value === "Ascending") {
      setAscending(true);
    } else {
      setAscending(false);
    }

    eventsList.sort((a, b) => {
      if (Ascending) {
        if (sortCriteria === "Host") {
          return a.host.localeCompare(b.host);
        } else if (sortCriteria === "Category") {
          return a.category.localeCompare(b.category);
        }
        return a.date.localeCompare(b.date);
      } else {
        if (sortCriteria === "Host") {
          return b.host.localeCompare(a.host);
        } else if (sortCriteria === "Category") {
          return b.category.localeCompare(a.category);
        }
        return b.date.localeCompare(a.date);
      }
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteFormOpen = (eventId: string) => {
    setShowDeleteForm(true);
    setEventToDelete(eventsList.find((event) => event.id === eventId));
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
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!eventsList) {
    return <p>No events available</p>;
  }

  return (
    <section className="section is-capitalized">
      <div className="columns  is-variable is-2  list-controls">
        <div className="column is-7">
          <h2 className="is-title is-size-4 has-text-primary">
            Upcoming events
          </h2>
        </div>

        <div className="field column">
          <label className="label has-text-primary">Sort by</label>
          <div className="control">
            <div className="select">
              <select onChange={setSort}>
                <option>Date</option>
                <option>Host</option>
                <option>Category</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field column">
          <label className="label has-text-primary">Order by</label>
          <div className="control">
            <div className="select">
              <select onChange={setOrder}>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field column">
          <label className="label has-text-primary">Find Event</label>
          <div className="control has-icons-left has-icons-right">
            <input
              onChange={(e) => handleSearch(e)}
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
              userName={username}
            />
          ))
        )}
      </div>
      {isSignedIn && (
        <button
          id="createEventButton"
          className="add-event-button button is-link is-medium is-rounded"
          aria-label="createEventButton"
          onClick={handleEventCreateButton}
        >
          Add Event
        </button>
      )}

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
