import axios from "axios";
import { domain, tokenCybersoft, token } from "../config/setting";
export class AuthService {
  dangNhap = (thongTinDangNhap) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: thongTinDangNhap,
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  dangKy = (thongTinDangKy) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTinDangKy,
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  layThongTinTaiKhoan = () => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",

      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };

  capNNhatThongTinTaiKhoan = (thongTinTaiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinTaiKhoan,
      headers: {
        TokenCybersoft: tokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}

export const authService = new AuthService();
