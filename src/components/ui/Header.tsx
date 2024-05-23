import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Home</Link>
    </section>
  );
};

export default Header;
