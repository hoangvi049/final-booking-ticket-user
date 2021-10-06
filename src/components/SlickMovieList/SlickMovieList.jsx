import "../SlickMovieList/SlickMovieList.scss";
import React from "react";
import MovieListCarousel from "../MovieListCarousel/MovieListCarousel";

function SlickMovieList(props) {
  return (
    <div className="listMovie">
      <div className="container">
        <div id="listMovieTabs">
          <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Đang Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Sắp Chiếu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MovieListCarousel />
    </div>
  );
}

export default SlickMovieList;
