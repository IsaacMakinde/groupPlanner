import Button from "../ui/Button";
import { useState } from "react";

const EventForm = ({ showForm, onClose }) => {
  const [formData, setFormData] = useState({
    name: null,
    date: null,
    venue: null,
    description: null,
    category: null,
    pricing: null,
    guests: null,
  });

  const maxLength = 250;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  return (
    <div className={`modal ${showForm ? "is-active is-clipped" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an event</p>
        </header>
        <section className="modal-card-body">
          {/* <!-- Content ... --> */}
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                name="title"
                value={formData.name}
                onChange={handleChange}
                placeholder="Event Title"
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
                value={formData.guests}
                onChange={handleChange}
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
                value={formData.date}
                onChange={handleChange}
                type="text"
                placeholder="DD/MM/YYY"
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
                value={formData.venue}
                onChange={handleChange}
                type="text"
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
                value={formData.pricing}
                onChange={handleChange}
                type="text"
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
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Celebration</option>
                  <option>Travel</option>
                  <option>Get Together</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left">
              <textarea
                className="textarea"
                name="description"
                value={formData.description}
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
              onClick={onClose}
            ></Button>
            <Button
              styling={"button is-link is-light"}
              label={"Cancel"}
              onClick={onClose}
            ></Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventForm;
