import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { actionTypes } from "../actions/type";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),

  danhSachGheDangDat: [],

  danhSachGheNguoiKhacDat: [{ maGhe: 50949 }, { maGhe: 50950 }],
};

export const bookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKING_ROOM:
      return {
        ...state,
        chiTietPhongVe: action.payload,
        danhSachGheDangDat: [],
      };
    case actionTypes.CHOOSE_SLOT:
      //Cập nhật danhSachGheDangDat
      const item = action.payload;
      let cloneDangDat = [...state.danhSachGheDangDat];
      let index = cloneDangDat.findIndex((ghe) => ghe.maGhe === item.maGhe);
      if (index !== -1) {
        cloneDangDat.splice(index, 1);
      } else {
        cloneDangDat.push(item);
      }
      return {
        ...state,
        danhSachGheDangDat: cloneDangDat,
      };
    default:
      return { ...state };
  }
};
