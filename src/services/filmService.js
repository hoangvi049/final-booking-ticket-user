import axios from "axios";
import { domain, token, groupID, tokenCybersoft } from "../config/setting";
export class FilmService {
  layDanhSachBanner = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
      headers: {
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  themPhimUpLoadHinh = (formData) => {
    return axios({
      url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  capNhatPhim = (formData) => {
    return axios({
      url: `${domain}/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        TokenCybersoft: tokenCybersoft,
      },
    });
  };

  xoaPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
        TokenCybersoft: tokenCybersoft,
      },
    });
  };
}

export const filmService = new FilmService();
