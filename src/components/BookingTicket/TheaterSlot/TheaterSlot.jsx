import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../redux/actions/type";
import "../TheaterSlot/TheaterSlot.scss";
import { createAction } from "../../../redux/actions/index";
function TheaterSlot(props) {
  const dispatch = useDispatch();
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheNguoiKhacDat } =
    useSelector((state) => {
      return state.bookingReducer;
    });

  const { thongTinTaiKhoan } = useSelector((state) => {
    return state.userReducer;
  });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderGhe = (daDat, ghe) => {
    if (daDat) {
      let picked__success = "";
      if (thongTinTaiKhoan.taiKhoan === ghe.taiKhoanNguoiDat) {
        picked__success = "picked__success";
      } else {
      }
      return (
        <i
          key={ghe.stt}
          className={`fa fa-couch slot__item slot__picked ${picked__success}  `}
        ></i>
      );
    } else {
      let picking__fromOther = "";
      let slot__vip = ghe.loaiGhe === "Vip" ? "slot__vip" : "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      let indexOther = danhSachGheNguoiKhacDat.findIndex(
        (gheKD) => gheKD.maGhe === ghe.maGhe
      );
      let slot__picking = "";
      if (indexGheDangDat !== -1) {
        slot__picking = "slot__picking";
      }
      if (indexOther !== -1) {
        picking__fromOther = "picking__from--other";
        return (
          <i
            key={ghe.stt}
            className={`fa fa-couch slot__item  ${picking__fromOther} `}
          ></i>
        );
      }

      return (
        <i
          onClick={() => dispatch(createAction(actionTypes.CHOOSE_SLOT, ghe))}
          key={ghe.stt}
          className={`fa fa-couch slot__item ${slot__vip} ${slot__picking} `}
        ></i>
      );
    }
  };

  const renderDanhSachGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      return (
        <Fragment key={index}>
          {renderGhe(ghe.daDat, ghe)}
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="bookingTicket__left col-md-9 col-sm-12 p-0">
      <div className="info d-flex justify-content-between">
        <div className="film__img d-flex bg-light">
          <img src={thongTinPhim.hinhAnh} alt={thongTinPhim.tenPhim} />

          <div className="theater">
            <span className="name">{thongTinPhim.tenRap}</span>
            <p className="time">Giờ chiếu: {thongTinPhim.gioChieu}</p>
          </div>
        </div>
      </div>
      <div className="screen">
        <img
          className="screen__img"
          src="https://i.ibb.co/zWgWjtg/screen.png"
          alt="screen"
        />
      </div>
      <div className="danhSachGhe">
        {renderDanhSachGhe()}

        <div className="slot__type row">
          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item slot__picking" />
            <span className="slot__text">Ghế bạn đang chọn</span>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item slot__picked" />
            <span className="slot__text">Ghế đã được đặt</span>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item unpicked__slot " />
            <span className="slot__text">Ghế chưa được đặt</span>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item slot__vip" />
            <span className="slot__text">Ghế Vip</span>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item picked__success" />
            <span className="slot__text">Ghế bạn đã đặt</span>
          </div>

          <div className="col-md-2 col-sm-6 col-xs-6">
            <i className="fa fa-couch type__item picking__from--other" />
            <span className="slot__text">Ghế đang được chọn</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterSlot;
