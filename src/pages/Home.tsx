import { useState } from "react";
import Button from "../components/ui/Button";
import EventForm from "../components/form/EventForm";
import EventList from "../components/ui/EventList";
import Event from "../interfaces/EventInter";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleEventCreateButton = () => {
    console.log("Create Event!");
    // trigger a form to be displayed
    setShowForm((showForm) => !showForm);
  };

  const eventsList: Event[] = [
    {
      id: 1,
      name: "Event 1",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
    {
      id: 2,
      name: "Event 2",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
    {
      id: 3,
      name: "Event 3",
      date: "01/01/2024",
      venue: "Citywest",
      description: "null",
      category: "Celebration",
      pricing: 12.5,
      guests: "Isaac",
    },
  ];

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
        ></EventForm>
      </section>
      <EventList events={eventsList} />
    </div>
  );
};

export default Home;
