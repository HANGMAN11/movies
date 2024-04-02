import React, { useEffect } from "react";
import Card from "./card";

const Main = () => {
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
        searchInput.removeEventListener("input", handleInput)
      

    };
  }, []);
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Comedy</a>
            </li>
          </ul>
        </nav>
        <form>
          <div className="search">
            <input
              type="text"
              placeholder="Movie name"
              className="inputText"
              id="searchInput"
            ></input>
            <button type="search" className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Main;
