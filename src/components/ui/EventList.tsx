import Event from "../../interfaces/EventInter";
import EventForm from "../form/CreateEventForm";
import DeleteEventForm from "../form/DeleteEventForm";
import EditEventForm from "../form/EditEventForm";
import {
  createEvent,
  deleteEvent,
  updateEvent,
} from "../../services/EventService";
import { useEffect, useState, useMemo } from "react";
import EventCard from "./EventCard";
import { useUser } from "@clerk/clerk-react";
import { useEvent } from "../../contexts/Events/useEvent";

const EventList: React.FC = () => {
  // form visibility state
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event>(null);
  const [eventToEdit, setEventToEdit] = useState<Event>(null);
  const [formLoading, setFormLoading] = useState(false);
  const { events, categories, fetchCategories, fetchEvents, loading } =
    useEvent();
  // User and events state
  const { isSignedIn, user, isLoaded } = useUser();

  // Sorting and filtering state
  const [sortCriteria, setSortCriteria] = useState("Date"); // New sort
  const [filterCriteria, setFilterCriteria] = useState(""); // New filter
  const [username, setUsername] = useState("Guest");
  const [Ascending, setAscending] = useState(true);

  useEffect(() => {
    fetchEvents();
    fetchCategories();
  }, [user, fetchCategories, fetchEvents, isSignedIn]);

  useEffect(() => {
    if (isSignedIn && isLoaded && user?.fullName !== username) {
      setUsername(user.fullName);
    }
  }, [isSignedIn, isLoaded, user?.fullName, username]);

  const filteredEvents = useMemo(() => {
    if (!filterCriteria) return events;
    return events.filter((event) =>
      event.title.toLowerCase().includes(filterCriteria.toLowerCase())
    );
  }, [events, filterCriteria]);

  const sortEvents = (orderChoice: string) => {
    if (orderChoice === "Ascending") {
      if (sortCriteria === "Date") {
        filteredEvents.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      } else if (sortCriteria === "Host") {
        filteredEvents.sort((a, b) => a.host.localeCompare(b.host));
      } else if (sortCriteria === "Category") {
        filteredEvents.sort((a, b) => a.category_id - b.category_id);
      }
    } else {
      if (sortCriteria === "Date") {
        filteredEvents.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else if (sortCriteria === "Host") {
        filteredEvents.sort((a, b) => b.host.localeCompare(a.host));
      } else if (sortCriteria === "Category") {
        filteredEvents.sort((a, b) => b.category_id - a.category_id);
      }
    }
  };
  const handleEventCreateButton = () => {
    setShowCreateForm((showCreateForm) => !showCreateForm);
  };

  const handleAddEvent = async (event: Event) => {
    setFormLoading(true);
    try {
      await createEvent(event);
      setShowCreateForm(false);
      await fetchEvents();
    } catch (error) {
      console.log("Error adding event", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditFormOpen = (eventId: string) => {
    const event = events.find((event) => event.id === eventId);
    if (event) {
      setEventToEdit(event);
      setShowEditForm(true);
    }
  };

  const handleEditFormClose = () => {
    setShowEditForm(false);
  };

  const editEventFormAction = async (eventObject: Event) => {
    setFormLoading(true);
    try {
      const response = await updateEvent(eventObject); // Call the API to update the event
      const updatedEvent = response.data; // Extract updated event from the response
      console.log("Updated event", updatedEvent);
      // Update the state with the edited event
      await fetchEvents();
      setShowEditForm(false); // Close the edit form
    } catch (error) {
      console.log("Error editing event", error);
      console.log("Event object", eventObject);
    }
    setFormLoading(false);
  };

  const handleDeleteFormOpen = (eventId: string) => {
    setShowDeleteForm(true);
    setEventToDelete(events.find((event) => event.id === eventId));
  };

  const handleDeleteFormClose = () => {
    setShowDeleteForm(false);
  };
  const deleteEventFormAction = async (eventId: string) => {
    setFormLoading(true);
    try {
      const response = await deleteEvent(eventId);
      const isEventDeleted = response.data;
      console.log("Event deleted", isEventDeleted);

      fetchEvents();
      setShowDeleteForm(false);
    } catch (error) {
      console.log("Error deleting event", error);
    }
    setFormLoading(false);
  };

  return (
    <section className="section is-capitalized">
      <div className="columns is-variable is-2 list-controls is-uppercase">
        <div className="column is-7">
          <h2 className="is-title is-size-3 is-uppercase has-text-black has-text-weight-bold">
            ({filteredEvents.length}) Upcoming events
          </h2>
        </div>

        <div className="field column">
          <label className="label has-text-black">Search Events</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Filter by title"
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div className="field column">
          <label className="label has-text-black">Sort by</label>
          <div className="control">
            <div className="select">
              <select
                onChange={(e) => {
                  setSortCriteria(e.target.value);
                  sortEvents(Ascending ? "Ascending" : "Descending");
                }}
                disabled={loading}
              >
                <option value="Date">Date</option>
                <option value="Host">Host</option>
                <option value="Category">Category</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field column">
          <label className="label has-text-black">Order by</label>
          <div className="control">
            <div className="select">
              <select
                onChange={(e) => {
                  setAscending(e.target.value === "Ascending");
                  sortEvents(e.target.value);
                }}
                disabled={loading}
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {loading ? (
          <div className="is-flex is-flex-direction-column is-justify-center is-align-items-center">
            <progress className="progress is-success" value={50} max={100}>
              50%
            </progress>
            <p>Loading events and categories...</p>
          </div>
        ) : (
          filteredEvents.map((event: Event) => (
            <EventCard
              key={event.id}
              eventObject={event}
              onDeleteEvent={handleDeleteFormOpen}
              onEditEvent={handleEditFormOpen}
              userName={username}
              category={
                categories.find((c) => c.id === event.category_id)?.name ||
                "Uncategorized"
              }
            />
          ))
        )}
      </div>
      {isSignedIn && (
        <button
          id="createEventButton"
          className="add-event-button button is-link is-medium"
          aria-label="createEventButton"
          onClick={handleEventCreateButton}
          disabled={formLoading || loading}
        >
          Add Event
        </button>
      )}

      {showCreateForm && (
        <EventForm
          showForm={showCreateForm}
          onClose={handleEventCreateButton}
          onAddEvent={handleAddEvent}
          categoryOptions={categories}
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
          categoryOptions={categories}
        />
      )}
    </section>
  );
};

export default EventList;
