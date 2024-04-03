import React, { useEffect, useState } from "react";
import Card from "./card";

let API_key = "&api_key=110e459ff6ce307eee36bf34d1351ce3";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url_set]);

  useEffect(() => {
    const searchInput = document.getElementById("searchInput");

    const handleInput = () => {
      if (searchInput.value.length > 0) {
        searchInput.classList.add("notEmpty");
      } else {
        searchInput.classList.remove("notEmpty");
      }
    };
    searchInput.addEventListener("input", handleInput);

    return () => {
      searchInput.removeEventListener("input", handleInput);
    };
  }, []);
  const getData = (movieType) => {
    if (movieType == "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) =>{
    if(evt.key == "Enter"){
        url=base_url+"/search/movie?api_key=110e459ff6ce307eee36bf34d1351ce3&query="+search;
        setUrl(url);
        setSearch(" ");
    }
  }
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value) => {
              return (
                <li>
                  <a
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form>
          <div className="search">
            <input
              type="text"
              placeholder="Movie name"
              className="inputText"
              id="searchInput"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyUp={searchMovie}
            ></input>
            <button type="search" className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return (
              <>
                <Card info={res} key={pos} />
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Main;
