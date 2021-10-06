import React, { useEffect } from "react";
import "../MovieDetail/MovieDetail.scss";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import DetailTabs from "./DetailTab/DetailTab";
import { useDispatch, useSelector } from "react-redux";
// import { layThongTinPhimAction } from "../../redux/actions/FilmAction";
import ShowtimesTab from "./ShowTmesTab/ShowtimesTab";
import { layLichChieuPhimAction } from "../../redux/actions/CinemaAction";

function MovieDetail(props) {
  let moment = require("moment");
  const dispatch = useDispatch();
  const { id } = props.props.match.params;

  useEffect(() => {
    dispatch(layLichChieuPhimAction(id));
  }, [dispatch, id]);

  const { filmDetail } = useSelector((state) => {
    return state.cinemaReducer;
  });

  const renderStar = (rating) => {
    if (rating > 5) rating = 5;

    var htmlStar = [];
    for (let i = 0; i < rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star"></i>);
      htmlStar.push(star);
    }

    for (let i = 0; i < 5 - rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star-half-alt"></i>);
      htmlStar.push(star);
    }

    return htmlStar;
  };

  const countRatingMark = (rating) => {
    return <p>{rating * 0.5 + 10 * 0.5}</p>;
  };

  return (
    <div
      key={filmDetail.maPhim}
      className="movieDetail"
      style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
    >
      <div className="overlay__gradient"></div>
      <CustomCard
        style={{ minHeight: "100vh", padding: "150px 0" }}
        effectColor="#OA2029" // required
        color="#OA2029" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="movieDetail__info">
          <div className="container">
            <div className="row">
              <div className="col-md-6 detail__content row">
                <div className="detail__content--img col-md-6">
                  <img src={filmDetail.hinhAnh} alt="hinhAnh" />
                  <div className="rating__point">
                    <p className="rating__number">
                      {countRatingMark(filmDetail.danhGia)}
                    </p>
                    <div className="rating__star">
                      {renderStar(filmDetail.danhGia)}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 detail__content--name">
                  <p className="date">
                    {" "}
                    {moment(filmDetail.ngayKhoiChieu).format("DD-MM-yy")}
                  </p>

                  <div className="name">
                    <span className="age__rate">C18</span>

                    <h5 className="title"> {filmDetail.tenPhim}</h5>
                  </div>
                  <div className="critic">
                    <p>100 phút - 0 IMDb - 2D/Digital</p>
                  </div>

                  <button className="btn btn__buy">ĐẶT VÉ</button>
                </div>
              </div>

              <div className="col-md-6 detail__rating">
                <div className="rating__ring">
                  {countRatingMark(filmDetail.danhGia)}
                  <div className="ring__style"></div>
                </div>
                <div className="rating__stars">
                  {renderStar(filmDetail.danhGia)}
                </div>

                <div className="rating__info">10 người đánh giá</div>
              </div>
            </div>
          </div>
        </div>

        <div className="film__infoMobile">
          <div className="days">
            {moment(filmDetail.ngayKhoiChieu).format("DD-MM-yy")}
          </div>
          <div className="name">{filmDetail.tenPhim}</div>
          <div className="during">120 phút</div>
        </div>

        <div className="movieDetail__tabs container">
          <div>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-link nav__thongTin active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Thông Tin
                </a>
                <a
                  className="nav-link nav__lichChieu"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Lịch Chiếu
                </a>
              </div>
            </nav>
            <div className="tab-content " id="nav-tabContent">
              <div
                className="tab-pane tab__info  fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <DetailTabs filmDetail={filmDetail} />
              </div>
              <div
                className="tab-pane tab__showtimes fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <ShowtimesTab heThongRap={filmDetail.heThongRapChieu} />
              </div>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}

export default MovieDetail;
