import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Movie/Movie.scss";
import moment from "moment";

import Loading from "../Loading/Loading";

function Movie(props) {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const [danhSachPhimSearch, setDanhSachPhimSearch] = useState([]);
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  const { listFilm } = useSelector((state) => {
    return state.filmReducer;
  });

  useEffect(() => {
    setDanhSachPhim(listFilm);
    setLoading(false);
  }, [listFilm]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  //Get current film

  useEffect(() => {
    let results = danhSachPhim.filter((phim) => {
      return phim.tenPhim.toLowerCase().includes(searchText.toLowerCase());
    });
    setDanhSachPhimSearch(results);
    console.log(danhSachPhim);
  }, [danhSachPhim, searchText]);

  // const renderPagination = () => {};

  const renderMovie = () => {
    return danhSachPhimSearch.map((film, index) => {
      return (
        <div key={index} className="movie-detail col-md-3 col-sm-12 ">
          <div className="movie-card ">
            <div className="card-content">
              <div className="card-img">
                <img
                  className="movie-img"
                  src={film.hinhAnh}
                  alt={film.tenPhim}
                />
                <div className="overlay">
                  <i className="far fa-play-circle"></i>
                  {/* <NavLink
                    className="card-link"
                    to={`/moviedetail/${film.maPhim}`}
                  > */}

                  {/* </NavLink> */}
                </div>
                <div className="movie-rating">
                  <p className="rating-number">10</p>
                  <div className="rating-start">
                    <i className="fa fa-star film__star" />
                    <i className="fa fa-star film__star" />
                    <i className="fa fa-star film__star" />
                    <i className="fa fa-star film__star" />
                    <i className="fa fa-star film__star" />
                  </div>
                </div>
              </div>
              <div className="card-text">
                <NavLink
                  className="btn btn-link"
                  to={`/moviedetail/${film.maPhim}`}
                >
                  <span className="btn-text"> ĐẶT VÉ</span>
                </NavLink>

                <div className="text-content">
                  <p className="movie_age-rate">PG</p> <span></span>
                  <h5 className="movie-name">{film.tenPhim}</h5>
                  <p> {moment(film.ngayKhoiChieu).format("DD-MM-yyyy")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="movie container">
        <h3 className="movie__title">Kho Phim</h3>
        <div className="search">
          <div id="wrap">
            <form autoComplete="on">
              <input
                id="search"
                name="search"
                value={searchText}
                onChange={handleChange}
                type="text"
                placeholder="Nhập tên phim cần tìm"
              />
              <i className="fas fa-search"></i>
            </form>
          </div>
        </div>

        <div className="row movielist-content">{renderMovie()}</div>
      </div>
    );
  }
}

export default Movie;
