import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useState } from "react";

const EventForm = ({ showForm, onClose, onAddEvent }) => {
  const { user } = useUser();
  const defaultDate = new Date().toISOString().split("T")[0];
  const maxLength = 450;
  const [placeID, setPlaceID] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    const newEvent = {
      title: payload.title.toString(),
      host: user.fullName,
      date: payload.date.toString(),
      venue: payload.venue.toString(),
      place_id: placeID,
      description: payload.description.toString(),
      category: payload.category.toString(),
      pricing: parseFloat(payload.pricing.toString()),
      guests: payload.guestList.toString(),
    };
    onAddEvent(newEvent);
    e.currentTarget.reset();
  };

  const handleCancel = () => {
    onClose();
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
        console.log("Venue ID:", place_id);

        console.log("Place:", place);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`modal ${showForm ? "is-active is-clipped" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an event</p>
        </header>
        <form onSubmit={handleSubmit}>
          <section className="modal-card-body">
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
                  id="venue_input"
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
