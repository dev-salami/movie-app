// import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../request";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movies.length);
  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[10%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-gray-200 text-lg">
            Average Rating : {movie?.vote_average}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {/* <ReactReadMoreReadLess
              charLimit={150}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
              {movie?.overview}
              
            </ReactReadMoreReadLess> */}
            {/* {truncateString(movie?.overview, 150)}; */}
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Main;
