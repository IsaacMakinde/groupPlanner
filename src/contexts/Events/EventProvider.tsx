import { useState, useCallback } from "react";
import { EventContext } from "./eventContext";
import { getEvent } from "../../services/EventService";

export const EventProvider = ({ children }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchEvent = useCallback((id: string) => {
    setLoading(true);
    getEvent(id)
      .then((event) => {
        setEvent(event);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <EventContext.Provider value={{ event, fetchEvent, loading, error }}>
      {children}
    </EventContext.Provider>
  );
};
