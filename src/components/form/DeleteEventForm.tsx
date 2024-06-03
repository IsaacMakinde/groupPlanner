import Event from "../../interfaces/EventInter";

interface DeleteEventFormProps {
  event: Event;
  showForm: boolean;
  onClose: () => void;
  deleteItem: (eventId: string) => void;
  //   event: Event;
  //   onDeleteEvent: (eventId: string) => void;
}
const DeleteEventForm: React.FC<DeleteEventFormProps> = ({
  showForm,
  onClose,
  event,
  deleteItem,
}) => {
  return (
    <div className={`modal ${event && showForm ? "is-active is-clipped" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm Delete</p>
        </header>
        <section className="modal-card-body is-align-items-center">
          <h1>Are you sure you want to cancel : {event?.title}?</h1>
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button
              className="button is-link"
              type="submit"
              onClick={() => deleteItem(event.id)}
            >
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
      </div>
    </div>
  );
};

export default DeleteEventForm;
