import React, { Fragment, useEffect, useState } from "react";
import "../MovieListCarousel/MovieListCarousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { layDanhSachPhimAcTion } from "../../redux/actions/FilmAction";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";
function PrevArrow(props) {
  let className = " prev-arrow";

  return (
    <span className={className} onClick={props.onClick}>
      {<i className="fas fa-chevron-left"></i>}
    </span>
  );
}

function NextArrow(props) {
  let className = " next-arrow";

  return (
    <span className={className} onClick={props.onClick}>
      {<i className="fas fa-chevron-right"></i>}
    </span>
  );
}

function MovieListCarousel(props) {
  let [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimAcTion);
    setLoading(false);
  }, [dispatch]);
  const { listFilm } = useSelector((state) => state.filmReducer);

  const dangChieu = listFilm.filter((item) => {
    return item.dangChieu === true;
  });

  const sapChieu = listFilm.filter((item) => {
    return item.dangChieu !== true;
  });
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinity: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderPhimDangChieu = () => {
    return dangChieu?.slice(0, 10).map((item, index) => {
      return (
        <div className="item__movie" key={item.maPhim}>
          <div className="movie__img">
            <img src={item.hinhAnh} alt={item.tenPhim} />
            <div className="overlay">
              <NavLink
                className="detail__icon"
                to={`/moviedetail/${item.maPhim}`}
              >
                <i className="fa fa-info" />
              </NavLink>
              <p className="infor-date">
                {" "}
                {moment(item.ngayKhoiChieu).format("DD-MM-yyyy")}
              </p>
            </div>

            <div className="item__rating">
              <p className="rating__number">{item.danhGia}</p>
              <div className="rating__star">
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
              </div>
            </div>
            <div className="item__age">P</div>
          </div>

          <div className="item__infor">
            <h5 className="item__infor--name">{item.tenPhim}</h5>
            <h6 className="item__infor--name">120 Phút</h6>
            <NavLink
              className="booking__btn"
              to={`/moviedetail/${item.maPhim}`}
            >
              <span className="btn-title ">ĐẶT VÉ</span>
            </NavLink>
          </div>
        </div>
      );
    });
  };

  const renderPhimSapChieu = () => {
    return sapChieu?.slice(0, 10).map((item, index) => {
      return (
        <div className="item__movie" key={item.maPhim}>
          <div className="movie__img">
            <img src={item.hinhAnh} alt={item.tenPhim} />
            <div className="overlay">
              <NavLink
                className="detail__icon"
                to={`/moviedetail/${item.maPhim}`}
              >
                <i className="fa fa-info play__icon" />
              </NavLink>
              <p className="infor-date">
                Realesed: {moment(item.ngayKhoiChieu).format("DD-MM-yyyy")}
              </p>
            </div>
            <div className="item__rating">
              <p className="rating__number">{item.danhGia}</p>
              <div className="rating__star">
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
                <i className="fa fa-star film__star" />
              </div>
            </div>
            <div className="item__age">P</div>
          </div>

          <div className="item__infor">
            <h5 className="item__infor--name">{item.tenPhim}</h5>
            <h6 className="item__infor--name">120 Phút</h6>
            <NavLink
              className="booking__btn"
              to={`/moviedetail/${item.maPhim}`}
            >
              <span className="btn-title">ĐẶT VÉ</span>
            </NavLink>
          </div>
        </div>
      );
    });
  };

  const renderSkeleton = () => {
    return dangChieu?.slice(0, 10).map((item, index) => {
      return (
        <div className="item__movie" key={item.maPhim}>
          <div className="movie__img">
            <SkeletonTheme
              color="rgba(255, 255, 255, 0.705)"
              highlightColor="#323232"
            >
              <Skeleton height={290} />
            </SkeletonTheme>

            <SkeletonTheme
              color="rgba(255, 255, 255, 0.705)"
              highlightColor="#323232"
            >
              <span className="film__age">
                <Skeleton />
              </span>
            </SkeletonTheme>
          </div>

          <div className="item__infor">
            <SkeletonTheme
              color="rgba(255, 255, 255, 0.705)"
              highlightColor="#323232"
            >
              <p className="film__name">
                <Skeleton />
              </p>
            </SkeletonTheme>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active container"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <Fragment>
          <Slider {...settings}>
            {loading ? renderSkeleton() : renderPhimDangChieu()}
          </Slider>
        </Fragment>
      </div>
      <div
        className="tab-pane fade container"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <Fragment>
          <Slider {...settings}>
            {" "}
            {loading ? renderSkeleton() : renderPhimSapChieu()}
          </Slider>
        </Fragment>
      </div>
    </div>
  );
}

export default MovieListCarousel;
