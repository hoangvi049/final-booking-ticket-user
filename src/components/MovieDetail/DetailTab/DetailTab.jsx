import React from "react";

function DetailTabs(props) {
  const { filmDetail } = props;
  let moment = require("moment");
  return (
    <div className="row  info__content text-white">
      <div className="col-md-6 col-sm-12 info__left">
        <div className="row contentLeft">
          <p className="contentTitle">Ngày công chiếu</p>
          <p className="contentDetail">
            {moment(filmDetail.ngayKhoiChieu).format("DD.MM.yy")}
          </p>
        </div>
        <div className="row contentLeft">
          <p className="contentTitle">Đạo diễn</p>
          <p className="contentDetail">Tomoka Nagaoka</p>
        </div>
        <div className="row contentLeft">
          <p className="contentTitle">Diễn viên</p>
          <p className="contentDetail"></p>
        </div>
        <div className="row contentLeft">
          <p className="contentTitle">Thể Loại</p>
          <p className="contentDetail">
            Romance, Action, Mystery, Thriller, Animation, Crime
          </p>
        </div>
        <div className="row contentLeft">
          <p className="contentTitle">Định dạng</p>
          <p className="contentDetail">2D/Digitals</p>
        </div>
        <div className="row contentLeft">
          <p className="contentTitle">Quốc Gia SX</p>
          <p className="contentDetail"></p>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 info__right">
        <p className="substance__title">Nội dung</p>
        <p className="substance__text">{filmDetail.moTa}</p>
      </div>
    </div>
  );
}

export default DetailTabs;
