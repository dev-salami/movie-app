import { useEffect, useState } from "react";
import Items from "./items";
import axios from "axios";
function Search() {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState([]);
  const [Found, setFound] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const key = "827ad42638bcc8905f7c22f6277a22fb";
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${input}&page=1&include_adult=false`;

  const searchMovie = () => {
    axios
      .get(url)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((e) => {
        console.log(e.response);
      });
    setFound(true);
    console.log(movie);
    console.log(input);
    console.log(movie.length);
    //     if (movie.length > 0) {
    //       setFound(true);
    //     }
    //     if (movie.length === 0) {
    //       setFound(false);
    //     }
  };

  return (
    <div className="w-full min-h-[20px] py-4  bg-blue-400 flex items-center flex-col  justify-center h-fit ">
      <div className="flex justify-center">
        <div className=" xl:w-96">
          <div className="input-group relative flex space-x-6  items-stretch w-full ">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search for Movies"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={handleInput}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  items-center"
              type="button"
              id="button-addon2"
              onClick={searchMovie}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {Found && (
        <div>
          {movie.length ? null : (
            <h3 className="text-red-800 text-3xl">
              The Movie Searched for isn't found
            </h3>
          )}
        </div>
      )}

      <div className="lg:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1 pt-2  gap-4 ">
        {movie.map((item, id) => (
          <Items key={id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Search;
