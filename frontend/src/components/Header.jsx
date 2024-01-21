import { Link } from "react-router-dom";
import logo from "/logo.jpeg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile" />
            Suraj
          </li>
          <li>
            <Link to="/create" />
            Create Post
          </li>
          <li>
            <Link to="/authors" />
            Authors
          </li>
          <li>
            <Link to="/logout" />
            Logout
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
