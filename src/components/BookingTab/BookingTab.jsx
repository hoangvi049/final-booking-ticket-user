import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../BookingTab/BookingTab.scss";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { layLichChieuPhimAction } from "../../redux/actions/CinemaAction";

function BookingTab(props) {
  const dispatch = useDispatch();

  const { listFilm } = useSelector((state) => {
    return state.filmReducer;
  });

  let [maPhim, setMaPhim] = useState({});
  let [maLichChieu, setMaLichChieu] = useState();
  let [maCumRap, setMaCumRap] = useState();
  let [ngayChieu, setNgayChieu] = useState();

  var handleOption = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };

  var handleOptopnLichChieu = (event) => {
    let maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };

  var handleOptintNgayChieu = (event) => {
    let ngayChieu = event.target.value;
    setNgayChieu(ngayChieu);
  };

  var handleOptionCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  useEffect(() => {
    dispatch(layLichChieuPhimAction(maPhim));
  }, [dispatch, maPhim]);

  const { filmDetail } = useSelector((state) => {
    return state.cinemaReducer;
  });

  const renderPhim = () => {
    return listFilm?.slice(0, 10).map((phim, index) => {
      return (
        <option key={index} value={phim.maPhim}>
          {phim.tenPhim}
        </option>
      );
    });
  };
  const renderCumRap = () => {
    return filmDetail.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap, index) => {
        return (
          <option value={cumRap.maCumRap} key={index}>
            {cumRap.tenCumRap}
          </option>
        );
      });
    });
  };

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[moment(currentValue[key]).format("yyyy-MM-DD")] =
        result[moment(currentValue[key]).format("yyyy-MM-DD")] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const renderNgayChieu = () => {
    return filmDetail.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          console.log(listLichChieu, "lll");
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([value], i) => {
            return (
              <option value={value} key={i}>
                {moment(value).format("DD-MM-yyyy")}
              </option>
            );
          });
          return dataLayout;
        } else {
          return null;
        }
      });
    });
  };

  const renderGioChieu = () => {
    return filmDetail.heThongRapChieu?.map((rap) => {
      return rap.cumRapChieu?.map((cumRap) => {
        if (maCumRap === cumRap.maCumRap) {
          const listLichChieu = groupBy(
            cumRap.lichChieuPhim,
            "ngayChieuGioChieu"
          );
          let entries = Object.entries(listLichChieu);
          let dataLayout = entries.map(([index, value], i) => {
            return value.map((item) => {
              if (ngayChieu === index) {
                return (
                  <option value={item.maLichChieu} key={i}>
                    {moment(item.ngayChieuGioChieu).format("hh:mm A")}
                  </option>
                );
              } else {
                return null;
              }
            });
          });
          return dataLayout;
        }
      });
    });
  };

  const renderDatVe = () => {
    if (maLichChieu) {
      return (
        <NavLink to={`/bookingticket/${maLichChieu}`}>
          <button className="btn ">ĐẶT VÉ</button>
        </NavLink>
      );
    } else {
      return (
        <button className="btn" disabled={true}>
          ĐẶT VÉ
        </button>
      );
    }
  };

  return (
    <div className="bookingTab container">
      <div className="row">
        <div id="movie__dropdown" className="col-md-4 col-xs-6 select__item">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleOption}
            >
              <option value="Chọn phim">Chọn Phim</option>

              {renderPhim()}
            </select>
          </div>
        </div>
        <div id="theater__dropdown" className="col-md-2 col-xs-6 select__item">
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleOptionCumRap}
            >
              <option value="Chọn phim">Chọn Rạp</option>
              {renderCumRap()}
            </select>
          </div>
        </div>
        <div
          id="datepicked__dropdown"
          className="col-md-2 col-xs-6 select__item"
        >
          <div className="select__form">
            <select
              name="slct"
              id="slct"
              defaultValue={"DEFAULT"}
              onChange={handleOptintNgayChieu}
            >
              <option value="Chọn phim">Chọn Ngày Chiếu</option>
              {renderNgayChieu()}
            </select>
          </div>
        </div>
        <div id="showtime__dropdown" className="col-md-2 col-xs-6 select__item">
          <div className="select__form">
            <select name="slct" onChange={handleOptopnLichChieu}>
              <option value="Chọn phim">Chọn Suất Chiếu</option>
              {renderGioChieu()}
            </select>
          </div>
        </div>
        <div className="col-md-2 col-sm-12 select__item">
          <div className="select__button">{renderDatVe()}</div>
        </div>
      </div>
    </div>
  );
}

export default BookingTab;
