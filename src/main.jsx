import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import getMovies from "./api/getMovies.js";
import Details from "./pages/Details.jsx";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./index.css";
import getDetailsMovie from "./api/getDetailsMovie.js";
import Login from "./pages/Login.jsx";
import Registrasi from "./pages/Registrasi.jsx";
import Welcome from "./pages/Wellcome.jsx";
import Authentication from "./layouts/Authentication.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { useLoaderData } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthComponent = () => {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
    >
      <AppWithRoutes />
    </GoogleOAuthProvider>
  );
};

const AppWithRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          <Route index element={<Home />} loader={getMovies} />
          <Route
            element={<Details />}
            path="/details/:id"
            loader={getDetailsMovie}
          />
          <Route element={<UserProfile />} path="/account" />
        </Route>

        <Route path="/wellcome" element={<Welcome />} />

        <Route element={<Authentication />}>
          <Route element={<Registrasi />} path="/register" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GoogleAuthComponent />
  </React.StrictMode>
);
