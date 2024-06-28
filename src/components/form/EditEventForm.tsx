import Event from "../../interfaces/EventInter";

interface EditEventFormProps {
  event: Event;
  showForm: boolean;
  onClose: () => void;
  onEditEvent: (event) => void;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  showForm,
  event,
  onClose,
  onEditEvent,
}) => {
  const defaultDate = new Date().toISOString().split("T")[0];
  const maxLength = 450;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const newEvent = {
      id: event.id,
      title: payload.title.toString(),
      host: payload.host.toString(),
      date: payload.date.toString(),
      venue: payload.venue.toString(),
      description: payload.description.toString(),
      category: payload.category.toString(),
      pricing: parseFloat(payload.pricing.toString()),
      guests: payload.guestList.toString(),
    };
    onEditEvent(newEvent);
  };
  return (
    <div className={`modal ${event && showForm ? "is-active is-clipped" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Update Event</p>
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
                  defaultValue={event?.title}
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
                  defaultValue={event?.host.name}
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
                  defaultValue={event?.guests}
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
                  defaultValue={event?.date}
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
                  defaultValue={event?.venue}
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
                  defaultValue={event?.pricing}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-euro-sign"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control has-icons-left">
                <div className="select" defaultValue={event?.category}>
                  <select name="category">
                    <option value="Celebration">Celebration</option>
                    <option value="Travel">Travel Plan</option>
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
                  defaultValue={event?.description}
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
                onClick={onClose}
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

export default EditEventForm;
