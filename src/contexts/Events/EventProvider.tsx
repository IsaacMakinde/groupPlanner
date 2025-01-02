import { useState, useCallback, useMemo } from "react";
import { EventContext } from "./eventContext";
import { getEvents, getEvent, getGuests } from "../../services/EventService";
import { getCategories } from "../../services/CategoryService";
import { getUser } from "../../services/UserService";

// This provider is a wrapper that provides the event context to its children
// This wrapper provides information about the event, the host user, event guests and the loading state

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hostUser, setHostUser] = useState(null);
  const [guests, setGuests] = useState([]);
  const [categories, setCategories] = useState([]);

  // TODO: Implement the fetchUser function
  const fetchUser = useCallback((id: string) => {
    console.log("fetchUser happening", id);
    setLoading(true);
    getUser(id)
      .then((user) => {
        setHostUser(user);

        setLoading(false);
        console.log("hostUser", user);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // TODO: Implement function that userside deletes an event
  const eventDelete = useCallback(
    (id: string) => {
      const filteredEvents = events.filter((event) => event.id !== id);
      setEvents(filteredEvents);
    },
    [events]
  );

  // TODO: Implement the fetchGuests function
  const fetchGuests = useCallback((eventId: string) => {
    setLoading(true);
    getGuests(eventId)
      .then((guests) => {
        setGuests(guests);
        console.log("guests", guests);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // TODO: Implement the fetchEvent function
  const fetchEvent = useCallback(
    (id: string) => {
      setLoading(true);
      getEvent(id)
        .then((event) => {
          setEvent(event);
          // fetch user data with the clerk_id
          fetchUser(event.clerk_id);
          fetchGuests(event.id);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    },
    [fetchGuests, fetchUser]
  );

  // TODO: Implement the fetchCategories function
  const fetchCategories = useCallback(() => {
    setLoading(true);
    getCategories()
      .then((categories) => {
        console.log("categories", categories);
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // TODO: Implement the fetchEvents function
  const fetchEvents = useCallback(() => {
    setLoading(true);
    getEvents()
      .then((events) => {
        setEvents(events);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      event,
      events,
      hostUser,
      guests,
      categories,
      eventDelete,
      fetchCategories,
      fetchGuests,
      fetchEvents,
      fetchEvent,
      fetchUser,
      loading,
      error,
    }),
    [
      event,
      events,
      hostUser,
      guests,
      categories,
      eventDelete,
      fetchCategories,
      fetchGuests,
      fetchEvent,
      fetchEvents,
      fetchUser,
      loading,
      error,
    ]
  );

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
