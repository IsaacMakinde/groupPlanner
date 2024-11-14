import logo from "../../assets/img/logo-removebg-preview.png";
import Contact from "../form/Contact";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer mt-6 section">
      <div className="content m-4 has-text-centered">
        <div className="columns">
          <div className="column is-4 flex">
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <figure className="image is-128x128">
                <img src={logo} className="is-rounded"></img>
              </figure>
              <h3 className="has-text-primary bold">Event Manager</h3>
              <p>A simple event manager for all your event planning needs.</p>
            </div>
          </div>
          <div className="column is-4">
            <h3 className="has-text-primary bold">Browse</h3>
            <div className="is-flex is-flex-direction-column columns">
              <div className="column">
                <Link to="/events">Home</Link>
              </div>
              <div className="column">
                <Link to="/events">Events</Link>
              </div>
              <div className="column">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <h3 className="has-text-primary bold">Contact</h3>
            <p>Feel free to send me a message and follow</p>

            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
