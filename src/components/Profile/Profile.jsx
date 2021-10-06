import React from "react";
import "../Profile/Profile.scss";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Card, Avatar } from "antd";
import EditProfile from "./EditProfile/EditProfile";

function Profile(props) {
  var moment = require("moment");
  const { TabPane } = Tabs;
  const { Meta } = Card;
  function callback(key) {
    console.log(key);
  }

  const { thongTinTaiKhoan } = useSelector((state) => {
    return state.userReducer;
  });
  const { thongTinDatVe } = thongTinTaiKhoan;

  const renderBookedTicket = () => {
    return thongTinDatVe?.map((ticket, index) => {
      return (
        <Card className="ticketDetail col-md-3 " key={index}>
          <Meta
            avatar={<Avatar src={ticket.hinhAnh} />}
            title={ticket.tenPhim}
            description={_.first(ticket.danhSachGhe).tenHeThongRap}
          />
          <span className="d-flex text-danger">
            Ghế:{" "}
            {ticket.danhSachGhe.slice(0, 4)?.map((ghe, index) => {
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
    <div className="profile ">
      <div className="profile__img">
        <div className="img-avt p-5 text-center">
          <img src="https://i.ibb.co/PCjW83Y/avt.png" alt="hinhanh" />
        </div>
      </div>

      <div className="row profile__info">
        <div className="col-md-4 col-sm-12 user__info">
          <h3>Thông tin người dùng</h3>
          <table className="table">
            <tbody>
              <tr>
                <th>Tài khoản: </th>
                <th>{thongTinTaiKhoan.taiKhoan}</th>
              </tr>
              <tr>
                <th>Họ tên: </th>
                <th>{thongTinTaiKhoan.hoTen}</th>
              </tr>
              <tr>
                <th>Nhóm: </th>
                <th>GP01</th>
              </tr>
              <tr>
                <th>Email: </th>
                <th>{thongTinTaiKhoan.email}</th>
              </tr>
              <tr>
                <th>Số điện thoại: </th>
                <th>{thongTinTaiKhoan.soDT}</th>
              </tr>

              <tr>
                <th>
                  <i className="fas fa-user"></i>{" "}
                </th>
                <th>{thongTinTaiKhoan.loaiNguoiDung?.tenLoai}</th>
              </tr>

              <tr>
                <th>
                  {thongTinTaiKhoan.maLoaiNguoiDung === "QuanTri" ? (
                    <a href="https://www.google.com/">
                      <button className="btn btn-primary ">
                        Tới trang Admin
                      </button>
                    </a>
                  ) : (
                    <div></div>
                  )}
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-7 col-sm-12 profile__content">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Chỉnh sửa thông tin cả nhân" key="1">
              <EditProfile />
            </TabPane>
            <TabPane tab="Lịch sử đặt vé" key="2" className="bookedTickets row">
              {renderBookedTicket()}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Profile;
