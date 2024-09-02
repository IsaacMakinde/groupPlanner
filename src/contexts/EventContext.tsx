import { createContext, useState, useContext, useCallback } from "react";
import { getEvent } from "../services/EventService";

const EventContext = createContext(null);

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

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};
