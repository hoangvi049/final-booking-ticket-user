import axios from "axios";
import { domain, token, tokenCybersoft } from "../config/setting";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export class BookingService {
  layDanhSachPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    return axios({
      url: `${domain}/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}

export const bookingService = new BookingService();
