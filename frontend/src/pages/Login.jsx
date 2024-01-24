import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleInputController = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login_form">
          <p className="form__error-message">This is an error message</p>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputController}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputController}
          />

          <button type="submit" className="btn primary">
            SignIn
          </button>
        </form>
        <small>
          Don&apos;t have an account ? <Link to="/register">Sign Up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
