import React, { useContext } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useState } from "react";

const Login = () => {
  //Initial State
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  //Handle Changes in input
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      if (err.response && err.response.data) {
        // If err.response is defined and has data
        setErr(err.response.data);
      } else {
        // Fallback in case response or data is undefined
        console.error("Login failed", err);
        setErr("An error occurred during login");
      }
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome To Movie Mingle</h1>
          <p>The social site for all your movie controversy needs</p>
          <span>Have not signed up yet?</span>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
