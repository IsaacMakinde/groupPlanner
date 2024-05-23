import Button from "../ui/Button";
import { useState } from "react";
import Event from "../../interfaces/EventInter";

const EventForm = ({ showForm, onClose, onAddEvent }) => {
  const defaultDate = new Date().toISOString().split("T")[0];
  const [formTitle, setTitle] = useState("");
  const [formDate, setDate] = useState(defaultDate);
  const [formVenue, setVenue] = useState("");
  const [formDescription, setDescription] = useState("");
  const [formCategory, setCategory] = useState("Travel");
  const [formPricing, setPricing] = useState(0);
  const [formGuests, setGuests] = useState("");

  const newEvent: Event = {
    id: 4,
    title: formTitle,
    date: formDate,
    venue: formVenue,
    description: formDescription,
    category: formDescription,
    pricing: formPricing,
    guests: formGuests,
  };

  const handleSubmit = (e) => {
    console.log("Form submitted");
    console.log("trigger", e.target);
    e.preventDefault();
    console.log({
      formTitle,
      formDate,
      formVenue,
      formDescription,
      formCategory,
      formPricing,
      formGuests,
    });
    onAddEvent(newEvent);
  };

  const maxLength = 250;

  return (
    <div className={`modal ${showForm ? "is-active is-clipped" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an event</p>
        </header>
        <form onSubmit={handleSubmit}>
          <section className="modal-card-body">
            {/* <!-- Content ... --> */}
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={formTitle}
                  placeholder="Event Title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-tag"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  name="host"
                  type="text"
                  placeholder="Host name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-id-badge"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  name="guestList"
                  value={formGuests}
                  onChange={(e) => setGuests(e.target.value)}
                  type="text"
                  placeholder="Guests"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-users"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  name="date"
                  type="date"
                  value={formDate}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-calendar"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  name="venue"
                  type="text"
                  value={formVenue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Venue"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-map-marker"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input"
                  name="pricing"
                  value={formPricing}
                  onChange={(e) => setPricing(e.target.valueAsNumber)}
                  type="number"
                  step={0.01}
                  placeholder="10.00"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-euro-sign"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control has-icons-left">
                <div className="select">
                  <select
                    value={formCategory}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                  >
                    <option value="Celebration">Celebration</option>
                    <option value="Travel">Travel</option>
                    <option value="Get Together">Get Together</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left">
                <textarea
                  className="textarea"
                  name="description"
                  value={formDescription}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={`Give a brief description of the event. (${maxLength} words)`}
                ></textarea>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <Button
                styling="button is-link"
                label={"Confirm"}
                onClick={handleSubmit}
              ></Button>
              <Button
                styling={"button is-link is-light"}
                label={"Cancel"}
                onClick={onClose}
              ></Button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
