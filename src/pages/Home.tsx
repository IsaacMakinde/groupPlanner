import { useState } from "react";
import Button from "../components/ui/Button";
import EventForm from "../components/form/EventForm";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleEventCreateButton = () => {
    console.log("Create Event!");
    // trigger a form to be displayed
    setShowForm((showForm) => !showForm);
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
        ></EventForm>
      </section>
    </div>
  );
};

export default Home;
