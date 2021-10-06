import React from "react";
import { NavLink } from "react-router-dom";
function ShowtimesTab(props) {
  var moment = require("moment");
  const heThongRap = props.heThongRap;
  console.log("props", heThongRap);

  const renderHeThongRap = () => {
    return heThongRap?.map((item, index) => {
      return (
        <a
          key={index}
          className="nav-link "
          id="v-pills-home-tab"
          data-toggle="pill"
          href={`#${item.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          <img src={item.logo} alt={item.maHeThongRap} />
        </a>
      );
    });
  };

  const renderCumRap = () => {
    return heThongRap?.map((item, index) => {
      return (
        <div
          key={index}
          className="tab-pane theater fade"
          id={item.maHeThongRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <div className="theater__list row">
            <div className="theater__tab ">
              <ul
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderRap(item)}
              </ul>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderRap = (rap) => {
    return rap.cumRapChieu?.map((item, index) => {
      return (
        <li key={index}>
          <a
            className="nav-link "
            id="v-pills-home-tab"
            data-toggle="pill"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            href={`#${item.maCumRap}`}
          >
            <div className="img-theater">
              <img src={item.hinhAnh} alt={item.maCumRap} />
            </div>

            <div className="text-theater" key={index}>
              <span className="name">{item.tenCumRap}</span>

              <p className="address">{item.diaChi}</p>
              <span className="detail">[chi tiết]</span>
            </div>
          </a>
          <div className="showtimes-collapse collapse" id={item.maCumRap}>
            <div className="collapse__content">
              <div className="film__timeshow">
                <ul className="showtimes__list row">{renderLichChieu(item)}</ul>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  const renderLichChieu = (cumRap) => {
    // if (heThongRap.cumRapChieu.maCumRap === thisCumRap)
    return cumRap?.lichChieuPhim.slice(0, 3).map((item) => {
      return (
        <div
          key={item.maLichChieu}
          className="tab-pane time__content active col-2"
          id={cumRap}
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <NavLink to={`/bookingticket/${item.maLichChieu}`} className="time ">
            <div className="time__begin mb-2 ">
              {moment(item.ngayChieuGioChieu).format("DD.MM.YYYY")}
              <p>{moment(item.ngayChieuGioChieu).format("hh:mm A")}</p>
            </div>
          </NavLink>
        </div>
      );
    });
  };

  return (
    <div className="row showtimes__movie">
      <div
        className="col-md-3 nav showtimes__main flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {renderHeThongRap()}
      </div>

      <div
        className="col-md-9 showtimes__side tab-content"
        id="v-pills-tabContent"
      >
        {renderCumRap()}
      </div>
    </div>
  );
}

export default ShowtimesTab;
