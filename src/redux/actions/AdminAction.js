// import { adminService } from "../../services/baseService";
import { actionTypes } from "./type";
import { history } from "../../App";
import { token, userLogin } from "../../config/setting";
import { authService } from "../../services/authenticationService";
import { createAction } from "./index";
import swal from "sweetalert";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const res = await authService.dangNhap(thongTinDangNhap);
      localStorage.setItem(userLogin, JSON.stringify(res.data.content));
      localStorage.setItem(token, res.data.content.accessToken);
      dispatch(createAction(actionTypes.DANG_NHAP, res.data.content));
      swal({
        title: "Đăng nhập thành công",
        text: "Xin chào " + res.data.content.taiKhoan,
        icon: "success",
        button: "OK",
      });

      history.goBack();
    } catch (error) {
      console.log(error?.response.data);

      swal({
        title: "Đăng nhập thất bại",
        text: error?.response.data.content,
        icon: "warning",
        button: "OK",
      });
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const res = await authService.dangKy(thongTinDangKy);

      if (res.data.statusCode === 200) {
        swal({
          title: "Đăng ký thành công",
          icon: "success",
          button: "OK",
        });
        history.push("/login");
      }
    } catch (error) {
      console.log(error?.response.data);
      swal({
        title: "Đăng ký thất bại",
        text: error?.response.data.content,
        icon: "warning",
        button: "OK",
      });
    }
  };
};

export const dangXuatAction = () => {
  return async (dispatch) => {
    dispatch(createAction(actionTypes.DANG_XUAT));
    window.location.reload();
  };
};

export const layThongTinTaiKhoanAction = () => {
  return (dispatch) => {
    authService
      .layThongTinTaiKhoan()
      .then((res) => {
        console.log(res.data.content);
        dispatch(createAction(actionTypes.SET_THONG_TIN, res.data.content));
      })
      .catch((err) => {
        console.log(err?.response.data);
      });
  };
};

export const capNhatThongTinTaiKhoanAction = (thongTinTaiKhoan) => {
  return (dispatch) => {
    authService
      .capNNhatThongTinTaiKhoan(thongTinTaiKhoan)
      .then((res) => {
        swal({
          title: "Sửa thông tin thành công",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        dispatch(createAction(actionTypes.UPDATE_THONG_TIN, res.data.content));
      })
      .catch((err) => {
        alert("Thông tin không hợp lệ");
      });
  };
};
