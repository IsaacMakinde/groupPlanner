import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-removebg-preview.png";

const Header = () => {
  return (
    <nav aria-label="primary menu">
      <ul className="nav-list">
        <li className="nav-item ">
          <figure className="image is-128x128">
            <img src={logo} className="is-rounded"></img>
          </figure>
        </li>
        <li className="nav-item is-size-5">
          <Link aria-current="page" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item is-size-5">
          <Link to={"/contact"}>Events</Link>
        </li>
        <li className="nav-item">
          <Link to={"/login"}>
            <button className="btn button is-link is-size-6">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
