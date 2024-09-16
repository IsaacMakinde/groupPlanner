import { useState, useCallback, useMemo } from "react";
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

  const contextValue = useMemo(
    () => ({ event, fetchEvent, loading, error }),
    [event, fetchEvent, loading, error]
  );

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
