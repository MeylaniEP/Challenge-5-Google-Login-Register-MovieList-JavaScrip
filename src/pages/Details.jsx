import React from "react";
import "../assets/styles/Details.css";
import { AiOutlineStar } from "react-icons/ai";
import {FiPlayCircle} from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";

function Details() {
  const detailMovie = useLoaderData();
  let params = useParams();
  console.log(params);

  return (
    <div className="vh-100">
      <img
        className="object-fit-cover w-100 h-100 position-absolute"
        src={`https://image.tmdb.org/t/p/w1280${detailMovie.backdrop_path}`}
      />
      <div className="detail flex d-flex flex-column justify-content-center p-5 vh-100 w-50 position-relative z-1 text-light">
        <h1>{detailMovie.title}</h1>
        <p>
          Release date : <span>{detailMovie.release_date}</span>
        </p>
        <p>{detailMovie.overview}</p>
        <p>
          <AiOutlineStar className="yellow-icon" /> <span>{detailMovie.vote_average}</span>
        </p>
        <button type="button" className="flex d-felx align-items-center justify-content-center  btn btn-danger rounded-pill"><FiPlayCircle /><span className="fw-semibold"> WATCH TRAILER</span></button>
      </div>
    </div>
  );
}

export default Details;
