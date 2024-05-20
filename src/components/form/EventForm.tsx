import Button from "../ui/Button";

const EventForm = ({ showForm, onClose }) => {
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
            <label className="label">Name of Event</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Host(s)</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Guests</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Location</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Pricing</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>Celebration</option>
                  <option>Travel</option>
                  <option>Get Together</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
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
