import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { datVeAcTion } from "../../../redux/actions/BookingAction";
import { ThongTinDatVe } from "../../../_core/models/ThongTinDatVe";
import "../Checkout/Checkout.scss";
import _ from "lodash";
import { Tabs } from "antd";
import { Card, Avatar } from "antd";

function Checkout(props) {
  const distpach = useDispatch();
  var moment = require("moment");
  const { TabPane } = Tabs;
  const { Meta } = Card;

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => {
    return state.bookingReducer;
  });

  const { thongTinPhim } = chiTietPhongVe;
  const { thongTinTaiKhoan } = useSelector((state) => {
    return state.userReducer;
  });

  const renderSlotBooked = () => {
    return danhSachGheDangDat.map((slot, index) => {
      return (
        <div key={index} className="slot__text d-flex ">
          <p className="slot__number">Ghế {slot.tenGhe}</p>
          <span className="slot__price">{slot.giaVe.toLocaleString()}đ </span>
        </div>
      );
    });
  };

  const renderTotalFee = () => {
    return danhSachGheDangDat
      .reduce((tongTien, ghe, index) => {
        return (tongTien += ghe.giaVe);
      }, 0)
      .toLocaleString();
  };

  const datVe = () => {
    const thongTinDatVe = new ThongTinDatVe();
    thongTinDatVe.maLichChieu = thongTinPhim.maLichChieu;
    thongTinDatVe.danhSachVe = danhSachGheDangDat;
    distpach(datVeAcTion(thongTinDatVe));
  };

  const renderbookingResult = () => {
    return thongTinTaiKhoan.thongTinDatVe?.reverse().map((ticket, index) => {
      return (
        <Card className="ticketDetail" key={index}>
          <Meta
            avatar={<Avatar src={ticket.hinhAnh} />}
            title={ticket.tenPhim}
            description={_.first(ticket.danhSachGhe).tenHeThongRap}
          />
          <span className="d-flex text-danger">
            Ghế:{" "}
            {ticket.danhSachGhe?.slice(0, 4).map((ghe, index) => {
              return (
                <p key={index} className="mr-1 ml-1">
                  {" "}
                  {ghe.tenGhe}
                </p>
              );
            })}
          </span>
          <span>
            {" "}
            {moment(ticket.ngayDat).format("DD-MM-yyyy")}
            <p>{moment(ticket.ngayDat).format("hh:mm A")}</p>
          </span>
        </Card>
      );
    });
  };

  return (
    <div className="bookingTicket__right col-md-3 col-sm-12">
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={<span className="tabs__name">Thông tin đặt vé</span>}
          key="-1"
        >
          <div className="checkout__form">
            <div className="total__fee">
              <span className="fee">{renderTotalFee()}đ</span>
            </div>
            <div className="film__info">
              <span className="film__age--ranking">C18</span>
              <span className="film__name">{thongTinPhim.tenPhim}</span>
            </div>
            <div className="theater__info">
              <p className="theater__name">{thongTinPhim.tenCumRap}</p>
              <p className="address">{thongTinPhim.diaChi}</p>

              <p className="date__info">
                {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
                {thongTinPhim.tenRap}
              </p>
            </div>
            <div className="slot__count">
              <p className="tilte">Ghế đã chọn</p>
              <div className="slot__booked ">{renderSlotBooked()}</div>
            </div>
            <div className="discountForm d-flex justify-content-between">
              <div className="discountForm__content">
                <label className="label__name ">Mã giảm giá</label>
                <input
                  type="text"
                  name="code"
                  id="txtDiscountCode"
                  className="form-control d-inline"
                  placeholder="Nhập tại đây..."
                />
              </div>
            </div>
            <button id="btnCheckCode btn btn-dark" className="btn mb-2">
              Áp dụng
            </button>

            <div className="payForm">
              <a href="/#" className="pay__link">
                <span>Hình thức thanh toán</span>
                <p className="text__notification">
                  Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                </p>
              </a>
            </div>
            <div className="textNotification text-center">
              <i className="fa fa-info-circle text-danger mr-1" />
              <span className="noti__text">
                Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
                nhắn <span className="noti__link">ZMS</span> (tin nhắn Zalo) và{" "}
                <span className="noti__link">Email</span> đã nhập.{" "}
              </span>
            </div>
            <div
              id="btnBook"
              className="btnBook btn btn-success"
              data-toggle="modal"
              data-target="#CreditModal"
              onClick={() => {
                datVe();
              }}
            >
              Thanh toán
            </div>
          </div>
        </TabPane>
        <TabPane
          className="tabs__result"
          tab={<span>Kết quả đặt vé</span>}
          key="1"
        >
          {renderbookingResult()}
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Checkout;
