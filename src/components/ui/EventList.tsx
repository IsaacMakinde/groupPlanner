import Swal from "sweetalert2";
import Event from "../../interfaces/EventInter";
import EventForm from "../form/CreateEventForm";
import DeleteEventForm from "../form/DeleteEventForm";
import EditEventForm from "../form/EditEventForm";

import {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
} from "../../services/EventService";
import { useEffect, useState, useMemo } from "react";
import EventCard from "./EventCard";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import { getCategories } from "../../services/CategoryService";
import { useQueryClient } from "react-query";

const EventList: React.FC = () => {
  // form visibility state
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event>(null);
  const [eventToEdit, setEventToEdit] = useState<Event>(null);
  const [formLoading, setFormLoading] = useState(false);
  // User and events state
  const { isSignedIn, user, isLoaded } = useUser();
  const queryClient = useQueryClient();
  // Sorting and filtering state
  const [sortCriteria, setSortCriteria] = useState("Date"); // New sort
  const [filterCriteria, setFilterCriteria] = useState(""); // New filter
  const [username, setUsername] = useState("Guest");
  const [Ascending, setAscending] = useState(true);

  useEffect(() => {
    if (isSignedIn && isLoaded && user?.fullName !== username) {
      setUsername(user.fullName);
    }
  }, [isSignedIn, isLoaded, user?.fullName, username]);

  // UseQuery hooks to fetch events and categories
  const {
    data: eventItems,
    error: eventsFetchingError,
    isLoading: IsEventsLoading,
  } = useQuery("events", getEvents);
  const {
    data: categoryItems,
    error: categoryFetchingError,
    isLoading: isCategoriesLoading,
  } = useQuery("categories", getCategories);

  const filteredEvents = useMemo(() => {
    if (!filterCriteria) return eventItems;
    return eventItems.filter((event) =>
      event.title.toLowerCase().includes(filterCriteria.toLowerCase())
    );
  }, [eventItems, filterCriteria]);

  const { mutate: createEventMutation } = useMutation(createEvent, {
    onSuccess: (data) => {
      console.log("Event created", data);
      const message = "Event created successfully";
      queryClient.invalidateQueries("events");
      Swal.fire({
        title: "Event created",
        text: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
    },
    onError: (error) => {
      console.log("Error creating event", error);
      const message = "Error creating event";
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
    onSettled: () => {
      console.log("Event creation request settled");
    },
  });

  const { mutate: updateEventMutation } = useMutation(updateEvent, {
    onSuccess: (data) => {
      console.log("Event updated", data);
      const message = "Event updated successfully";
      queryClient.invalidateQueries("events");
      Swal.fire({
        title: "Event updated",
        text: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
    },
    onError: (error) => {
      console.log("Error updating event", error);
      const message = "Error updating event";
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
    onSettled: () => {
      console.log("Event update request settled");
    },
  });

  const { mutate: deleteEventMutation } = useMutation(deleteEvent, {
    onSuccess: (data) => {
      console.log("Event deleted", data);
      const message = "Event deleted successfully";
      queryClient.invalidateQueries("events");
      Swal.fire({
        title: "Event deleted",
        text: message,
        icon: "success",
        confirmButtonText: "Ok",
      });
    },
    onError: (error) => {
      console.log("Error deleting event", error);
      const message = "Error deleting event";
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
    onSettled: () => {
      console.log("Event deletion request settled");
    },
  });

  const onSubmitEvent = (event) => {
    const eventObject = {
      ...event,
    };
    createEventMutation(eventObject);
  };

  const onSubmitEventUpdate = (event) => {
    const eventObject = {
      ...event,
    };
    updateEventMutation(eventObject);
  };

  const onSubmitEventDelete = (eventId) => {
    deleteEventMutation(eventId);
  };

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
      await onSubmitEvent(event);
      setShowCreateForm(false);
    } catch (error) {
      console.log("Error adding event", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditFormOpen = (eventId: string) => {
    const event = eventItems.find((event) => event.id === eventId);
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
    await onSubmitEventUpdate(eventObject); // Call the API to update the event
    setShowEditForm(false); // Close the edit form
    setFormLoading(false);
  };

  const handleDeleteFormOpen = (eventId: string) => {
    setShowDeleteForm(true);
    setEventToDelete(eventItems.find((event) => event.id === eventId));
  };

  const handleDeleteFormClose = () => {
    setShowDeleteForm(false);
  };
  const deleteEventFormAction = async (eventId: string) => {
    setFormLoading(true);
    await onSubmitEventDelete(eventId);
    setShowDeleteForm(false);
    setFormLoading(false);
  };

  if (isCategoriesLoading || IsEventsLoading) {
    return (
      <section className="section is-capitalized">
        <div className="columns is-variable is-2 list-controls is-uppercase">
          <div className="column is-7">
            <h2 className="is-title is-size-3 is-uppercase is-skeleton">
              (0) Upcoming events
            </h2>
          </div>

          <div className="field column">
            <div className="control is-skeleton">
              <input className="input is-skeleton" type="text" />
            </div>
          </div>

          <div className="field column">
            <div className="control">
              <div className="select">
                <select className="is-skeleton">
                  <option>Date</option>
                  <option>Host</option>
                  <option>Category</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field column">
            <div className="control">
              <div className="select">
                <select className="is-skeleton">
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="event-card is-flex is-flex-direction-column">
            <div className="is-skeleton">
              <div className="event-card-cta">
                <div className="event-user-cta">
                  <button
                    aria-label="Edit Event"
                    className="button is-medium is-black is-skeleton"
                  >
                    Edit
                  </button>
                  <button
                    aria-label="Delete Event"
                    className="button is-medium is-black is-skeleton"
                  >
                    Delete
                  </button>
                </div>
                <div className="">
                  <p className="is-size-3 has-text-weight-medium is-skeleton">
                    venue
                  </p>
                </div>
              </div>
            </div>

            <div className="event-card-content">
              <p className="is-size-6  event-card-date is-skeleton">date</p>
              <p className="event-card-title button is-medium is-black is-skeleton">
                Title
              </p>

              <p className="is-size-6 event-card-description is-skeleton">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </p>

              <div className="event-card-footer is-flex is-justify-content-space-between is-align-items-center columns is-full">
                <p className="is-size-6 has-text-grey column">
                  <span className="tag is-medium is-info is-hovered is-skeleton">
                    category
                  </span>
                </p>
                <button className="button is-medium is-skeleton">
                  View Details
                </button>{" "}
              </div>
            </div>
          </div>
        </div>

        <button
          id="createEventButton"
          className="add-event-button button is-link is-medium is-skeleton"
          aria-label="createEventButton"
        >
          Add Event
        </button>
      </section>
    );
  }

  if (eventsFetchingError || categoryFetchingError) {
    return <div>Error fetching events</div>;
  }
  if (!eventItems || !categoryItems) {
    return <div>No events found</div>;
  }

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
              disabled={IsEventsLoading || isCategoriesLoading}
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
                disabled={IsEventsLoading || isCategoriesLoading}
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
                disabled={IsEventsLoading || isCategoriesLoading}
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {filteredEvents.map((event: Event) => (
          <EventCard
            key={event.id}
            eventObject={event}
            onDeleteEvent={handleDeleteFormOpen}
            onEditEvent={handleEditFormOpen}
            userName={username}
            category={
              categoryItems.find((c) => c.id === event.category_id)?.name ||
              "Uncategorized"
            }
          />
        ))}
      </div>
      {isSignedIn && (
        <button
          id="createEventButton"
          className="add-event-button button is-link is-medium"
          aria-label="createEventButton"
          onClick={handleEventCreateButton}
          disabled={formLoading || IsEventsLoading || isCategoriesLoading}
        >
          Add Event
        </button>
      )}

      {showCreateForm && (
        <EventForm
          showForm={showCreateForm}
          onClose={handleEventCreateButton}
          onAddEvent={handleAddEvent}
          categoryOptions={categoryItems}
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
          categoryOptions={categoryItems}
        />
      )}
    </section>
  );
};

export default EventList;
