import { useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

// interface EditEventFormProps {
//   event: Event;
//   showForm: boolean;
//   onClose: () => void;
//   onEditEvent: (event) => void;
//   categoryOptions: unknown[];
// }

const EditEventForm = ({
  showForm,
  event,
  onClose,
  onEditEvent,
  categoryOptions,
}) => {
  const defaultDate = new Date().toISOString().split("T")[0];
  const maxLength = 2000;
  const { user } = useClerk();
  const [placeID, setPlaceID] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    const newEvent = {
      id: event.id,
      title: payload.title.toString(),
      clerk_id: user.id,
      host: user.fullName,
      date: payload.date.toString(),
      venue: payload.venue.toString(),
      place_id: placeID.toString(),
      description: payload.description.toString(),
      category_id: payload.category.valueOf(),
      pricing: parseFloat(payload.pricing.toString()),
    };
    onEditEvent(newEvent);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      const venueInput = document.getElementById(
        "venue_input"
      ) as HTMLInputElement;
      const venueAutocomplete = new google.maps.places.Autocomplete(
        venueInput,
        {
          fields: ["place_id", "formatted_address", "geometry", "name"],
          types: ["establishment", "geocode"],
          componentRestrictions: { country: "ie" },
        }
      );

      venueAutocomplete.addListener("place_changed", () => {
        const place = venueAutocomplete.getPlace();
        const place_id = place.place_id;
        setPlaceID(place_id);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
                  name="date"
                  type="datetime-local"
                  min={defaultDate}
                  placeholder="dd/mm/yyyy hh:mm"
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
                  id="venue_input"
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
                <div className="select">
                  <select name="category">
                    {categoryOptions.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
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
