import { filmService } from "../../services/filmService";
import { createAction } from "./index";
import { actionTypes } from "./type";
import { history } from "../../App";

export const layDanhSachBannerAction = (dispatch) => {
  filmService
    .layDanhSachBanner()
    .then((res) => {
      dispatch(createAction(actionTypes.FETCH_BANNER_LIST, res.data.content));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const layDanhSachPhimAcTion = (dispatch) => {
  filmService
    .layDanhSachPhim()
    .then((res) => {
      dispatch(createAction(actionTypes.FETCH_FILM_LIST, res.data.content));
    })
    .catch((err) => {
      console.log(err?.reponse.data);
    });
};

export const layThongTinPhimAction = (maPhim) => {
  return (dispatch) => {
    filmService
      .layThongTinPhim(maPhim)
      .then((res) => {
        dispatch(createAction(actionTypes.FETCH_FILM_DETAIL, res.data.content));
      })
      .catch((err) => console.log(err?.reponse.data));
  };
};

export const themPhimAction = (formData) => {
  return (dispatch) => {
    filmService
      .themPhimUpLoadHinh(formData)
      .then((res) => {
        alert("Thêm phim thành công");
        history.push("/film");
      })
      .catch((err) => {
        console.log(err?.reponse.data);
      });
  };
};

// export const capNhatPhimAction = (formData) => {
//   return async (dispatch) => {
//     try {
//       let res = await filmService.capNhatPhim(formData);
//       alert("Cập nhật thông tin phim thành công");
//       history.push("/film");

//       // dispatch(layDanhSachPhimAcTion);
//     } catch (err) {
//       console.log(err?.reponse.data);
//     }
//   };
// };

// export const xoaPhimAction = (maPhim) => {
//   return async (dispatch) => {
//     try {
//       let res = await filmService.xoaPhim(maPhim);
//       alert("Xóa phim thành công");
//       dispatch(layDanhSachPhimAcTion);
//       history.push("/film");
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
