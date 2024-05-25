import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import EventForm from "../components/form/EventForm";
import EventList from "../components/ui/EventList";
import Event from "../interfaces/EventInter";
import { getEvents, createEvent } from "../services/EventService";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [eventsList, setEventsList] = useState<Event[]>(null);

  const handleEventCreateButton = () => {
    console.log("Create Event!");
    // trigger a form to be displayed
    setShowForm((showForm) => !showForm);
  };
  const handleAddEvent = async (event: Event) => {
    const response = await createEvent(event);
    const newEvent = response.data;
    setEventsList([...eventsList, newEvent]);
    console.log("Event added", event);
    console.log(eventsList);
    setShowForm(false);
  };

  useEffect(() => {
    console.log("use effect ran");
    getEvents().then((data) => {
      setEventsList(data);
    });
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Welcome to the Home page</h1>
          <Button
            onClick={handleEventCreateButton}
            label="createEventButton"
            styling={"button is-primary"}
          ></Button>
        </div>
        <EventForm
          showForm={showForm}
          onClose={handleEventCreateButton}
          onAddEvent={handleAddEvent}
        ></EventForm>
      </section>
      {eventsList && <EventList events={eventsList} />}
    </div>
  );
};

export default Home;
