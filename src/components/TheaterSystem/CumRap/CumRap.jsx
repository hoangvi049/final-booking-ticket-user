import React, { Fragment } from "react";
import LichChieu from "../LichChieu/LichChieu";

function CumRap(props) {
  let { cumRap } = props;

  const renderCum = () => {
    return cumRap.map((item, index) => {
      return (
        <div
          className="tab-pane fade"
          id={item.maHeThongRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          key={index}
        >
          <div className="secondary__row row">
            <div className="secondary__tab col-md-5 col-sm-12">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {renderRap(item)}
              </div>
            </div>
            <div className="secondary__tabContent col-md-7 col-sm-12">
              <div className="tab-content" id="v-pills-tabContent">
                {renderLichChieuTheoRap(item)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderRap = (rap) => {
    return rap.lstCumRap?.map((item, index) => {
      return (
        <a
          className="nav-link"
          data-toggle="pill"
          href={`#${item.maCumRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          key={index}
        >
          <div className="img__theater">
            <img
              src="https://cdn1.nhatrangtoday.vn/images/photos/cgv-nha-trang-1.jpg"
              alt="sdsd"
            />
          </div>
          <div className="text__theater" key={index}>
            <span className="name__theater">
              <span className="name__aftertheater">{item.tenCumRap}</span>
            </span>
            <p className="address__theater">{item.diaChi}</p>
            <span className="detail__theater">[chi tiết]</span>
          </div>
        </a>
      );
    });
  };

  const renderLichChieuTheoRap = (rap) => {
    return rap.lstCumRap?.map((item, index) => {
      return (
        <div
          className="tab-pane fade show"
          id={item.maCumRap}
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          key={index}
        >
          <div className="tab__list">
            <ul>
              <LichChieu rap={item} maCumRap={item.maCumRap} />
            </ul>
          </div>
        </div>
      );
    });
  };

  return <Fragment>{renderCum()}</Fragment>;
}

export default CumRap;
