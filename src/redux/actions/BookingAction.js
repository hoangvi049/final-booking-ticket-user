import { bookingService } from "../../services/bookingService";
import { actionTypes } from "./type";
import { createAction } from "./index";
import swal from "sweetalert";
export const layDanhSachPhongVeAction = (maPhim) => {
  return (dispatch) => {
    bookingService
      .layDanhSachPhongVe(maPhim)
      .then((res) => {
        dispatch(
          createAction(actionTypes.FETCH_BOOKING_ROOM, res.data.content)
        );
      })
      .catch((error) => {
        console.log(error?.response.data);
      });
  };
};

export const datVeAcTion = (thongTinDatVe) => {
  return () => {
    try {
      swal({
        title: "Bạn chắc chứ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Thanh toán thành công! Chúc bạn xem phim vui vẻ", {
            icon: "success",
          });
          bookingService.datVe(thongTinDatVe);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          swal("Chọn lại nào!");
        }
      });
    } catch (error) {
      console.log(error?.response.data);
    }
  };
};
