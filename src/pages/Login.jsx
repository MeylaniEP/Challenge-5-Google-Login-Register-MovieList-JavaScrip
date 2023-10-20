import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Login.css";
import backDrop from "../api/backDrop.js";
import image from "../image/backDrop.jpg";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin.jsx";

function Login() {
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const history = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);

      localStorage.setItem("token", response.data.data.token);

      // Redirect to the dashboard
      history("/");
    } catch (error) {
      // Handle login error
      setValidation(error.response.data);
      console.error("Login failed", error);
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await backDrop();
        setMovies(moviesData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);
  return (
    <>
      <div className="vh-100">
        {movies.map((movie, index) => (
          <div key={index}>
            <img
            src={image}
            className="object-fit-cover w-100 h-100 position-absolute"
            alt="https://unsplash.com/photos/BQTHOGNHo08"
          />
            <div className="d-flex flex-column justify-content-center align-items-center position-relative z-1 vh-100">
              <h1 className="navbar-brand text-danger fw-bold">MovieList</h1>
              <div className="card p-5">
                <h2 className="text mb-2">Sign In</h2>
                {validation.message && (
                  <div className="alert alert-danger">{validation.message}</div>
                )}
                <form onSubmit={loginHandler}>
                  <input
                    className="py-2 px-3 w-100 rounded  border-0 my-3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {validation.email && (
                    <div className="alert alert-danger">
                      {validation.email[0]}
                    </div>
                  )}
                  <input
                    className="py-2 px-3 w-100 rounded rounded border border-0"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {validation.password && (
                    <div className="alert alert-danger">
                      {validation.password[0]}
                    </div>
                  )}
                  <button className="btn btn-danger w-100 mt-5 p-0 d-flex justify-content-center">
                    <p className="m-0 p-2 fw-semibold">Sign In</p>
                  </button>
                </form>

                <p className="text-light  position-relative mb-2" type="email">
                  <span>{/* <a href="#">Need help?</a> */}</span>
                </p>
                <hr className="text-light" />

                <GoogleLogin />
                <p className="text-light">
                  New to MovieList?
                  <Link to={"/register"}>
                    <span>Sign up now.</span>
                  </Link>
                </p>
                <p className="text-light ">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <span>
                    <a href="#"> Learn more</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Login;
