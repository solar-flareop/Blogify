import { Link } from "react-router-dom";
import logo from "/logo.jpeg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandle = () => {
    window.innerWidth < 800 ? setIsNavShow(false) : setIsNavShow(true);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandle}>
          <img src={logo} alt="logo" />
        </Link>
        {isNavShow && (
          <ul className="nav__menu">
            <li>
              <Link to="/profile/sdf" onClick={closeNavHandle}>
                Suraj
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandle}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandle}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandle}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShow(!isNavShow)}
        >
          {isNavShow ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
