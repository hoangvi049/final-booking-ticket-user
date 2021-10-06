import axios from "axios";
import { domain, groupID, tokenCybersoft } from "../config/setting";

export class CinemaService {
  layHeThongRap = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinHeThongRap?MaNhom=${groupID}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?MaNhom=${groupID}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  layThongTinLichChieuPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };
}

export const cinemaService = new CinemaService();
