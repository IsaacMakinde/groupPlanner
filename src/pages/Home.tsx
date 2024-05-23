import { useState } from "react";
import Button from "../components/ui/Button";
import EventForm from "../components/form/EventForm";
import EventList from "../components/ui/EventList";
import Event from "../interfaces/EventInter";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [eventsList, setEventsList] = useState<Event[]>([
    {
      id: 1,
      title: "Event 1",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
    {
      id: 2,
      title: "Event 2",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
    {
      id: 3,
      title: "Event 3",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
  ]);
  const handleEventCreateButton = () => {
    console.log("Create Event!");
    // trigger a form to be displayed
    setShowForm(true);
  };
  const handleAddEvent = (event: Event) => {
    setEventsList([...eventsList, event]);
    console.log("Event added", event);
    console.log(eventsList);
    setShowForm(false);
  };

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
      <EventList events={eventsList} />
    </div>
  );
};

export default Home;
