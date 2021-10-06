import { ThongTinTaiKhoan } from "../../_core/models/ThongTinTaiKhoan";
import { actionTypes } from "../actions/type";

let taiKhoan = "";

if (localStorage.getItem("userLogin")) {
  taiKhoan = JSON.parse(localStorage.getItem("userLogin")).taiKhoan;
}

const initialState = {
  taiKhoan: taiKhoan,
  thongTinTaiKhoan: new ThongTinTaiKhoan(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DANG_NHAP:
      state.taiKhoan = action.payload.taiKhoan;

      return { ...state };
    case actionTypes.DANG_XUAT:
      localStorage.removeItem("userLogin");
      state.taiKhoan = "";
      window.location.reload();
      return { ...state };
    case actionTypes.SET_THONG_TIN:
      state.thongTinTaiKhoan = action.payload;
      return { ...state };
    case actionTypes.UPDATE_THONG_TIN:
      state.thongTinTaiKhoan = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
