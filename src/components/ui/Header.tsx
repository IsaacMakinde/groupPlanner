import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <nav aria-label="primary menu">
      <ul className="nav-list">
        <li className="nav-item ">
          <figure className="image is-128x128">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/planner-426320.appspot.com/o/IMG_0500.jpg?alt=media&token=9b8c260c-ac84-4c34-baf0-1bb5f5f7f533"
              className="is-rounded"
            ></img>
          </figure>
        </li>
        <li className="nav-item is-size-5">
          <Link aria-current="page" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item is-size-5">
          <Link to={"/events"}>Events</Link>
        </li>
        <li className="nav-item">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
