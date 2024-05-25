import Event from "../../interfaces/EventInter";

const EventForm = ({ showForm, onClose, onAddEvent }) => {
  const defaultDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    console.log("Form submitted");
    console.log("trigger", e.target);
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const newEvent = {
      title: payload.title.toString(),
      date: payload.date.toString(),
      venue: payload.venue.toString(),
      description: payload.description.toString(),
      category: payload.category.toString(),
      pricing: parseFloat(payload.pricing.toString()),
      guests: payload.guestList.toString(),
    };
    onAddEvent(newEvent);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    onClose();
  };

  const maxLength = 450;

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
                  placeholder="Event Title"
                  minLength={5}
                  maxLength={50}
                  title="Title must be at least 5 characters long"
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
                  min={defaultDate}
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
                  type="number"
                  step={0.01}
                  min={0.0}
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
                  <select name="category">
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
                  maxLength={maxLength}
                  placeholder={`Give a brief description of the event and any helpful links. (${maxLength} words)`}
                ></textarea>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button className="button is-link" type="submit">
                Confirm
              </button>
              <button
                className="button is-link-light"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
