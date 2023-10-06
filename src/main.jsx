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
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import getDetailsMovie from "./api/getDetailsMovie.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/" >
      <Route index element={<Home />} loader={getMovies} />
      <Route element={<Details />} path="/details/:id" loader={getDetailsMovie} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
