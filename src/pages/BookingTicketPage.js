import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Checkout from "../components/BookingTicket/Checkout/Checkout";
import TheaterSlot from "../components/BookingTicket/TheaterSlot/TheaterSlot";
import { userLogin } from "../config/setting";
import swal from "sweetalert";

import { layThongTinTaiKhoanAction } from "../redux/actions/AdminAction";
import { layDanhSachPhongVeAction } from "../redux/actions/BookingAction";
import Loading from "../components/Loading/Loading";

function BookingTicketPage(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let id = props.match.params.id;
  useEffect(() => {
    setTimeout(() => {
      dispatch(layDanhSachPhongVeAction(id));
      setLoading(false);
    }, 3000);
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
    window.scrollTo(0, 0);
  }, [dispatch]);

  if (!localStorage.getItem(userLogin)) {
    swal({
      title: "Đăng nhập để có thể đặt vé",

      icon: "warning",
      button: "OK",
    });
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid bg-light" style={{ paddingTop: 20 }}>
          <div className="bookingTicket__content row mt-5">
            <TheaterSlot />
            <Checkout />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default BookingTicketPage;
