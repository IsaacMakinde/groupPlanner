import { useUser } from "@clerk/clerk-react";
import { useEvent } from "../../contexts/Events/useEvent";
const GuestList = ({ host }) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { guests, loading } = useEvent();

  if (!isLoaded && loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container subtitle has-text-primary mt-4 card">
      <div className="card ">
        <header className="card-header">
          <p className="card-header-title has-text-info">
            Guest List ({guests.length})
          </p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="false"></i>
            </span>
          </button>
        </header>

        <div className="card-content guest-list-card ">
          <div className="content">
            <div className="fixed-grid has-4-cols  has-2-cols-mobile">
              <div className="grid guest-list">
                {guests.map((guest) => (
                  <div className="cell" key={guest.id}>
                    <div className="card guest-card check">
                      {isSignedIn && user.fullName == host && (
                        <button className="delete is-medium"></button>
                      )}
                      <div className="card-image">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src={guest.guest_image_url}
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <p className="title is-4 has-text-grey">
                            {guest.guest_name}
                          </p>
                          <span className="tag is-medium is-info ">
                            {guest.guest_status}
                          </span>
                        </div>
                      </div>
                      <div className="card-footer hover">
                        {isSignedIn && user.fullName == host && (
                          <button className="card-footer-item has-text-primary">
                            Approve
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isSignedIn && user.fullName == host && (
                  <div className="cell">
                    <div className="card guest-card check">
                      <div></div>
                      <div className="card-image">
                        <button className="button is-rounded is-large is-primary is-rounded is-outlined is-dark mx-2">
                          Add
                        </button>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <p className="title is-4 has-text-info">
                            Invite Friend
                          </p>
                        </div>
                      </div>

                      <div className="card-footer"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="card-footer">
          {isSignedIn && user.fullName == host && (
            <>
              <a href="#" className="card-footer-item has-text-white">
                Save
              </a>
              <a href="#" className="card-footer-item has-text-white">
                Edit
              </a>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};

export default GuestList;
