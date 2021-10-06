import { cinemaService } from "../../services/cinemaService";
import { createAction } from "./index";
import { actionTypes } from "./type";

export const layHeThongRapAction = (dispatch) => {
  cinemaService
    .layHeThongRap()
    .then((res) => {
      dispatch(createAction(actionTypes.FETCH_HE_THONG_RAP, res.data.content));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const layLichChieuPhimAction = (id) => {
  return async (dispatch) => {
    try {
      let res = await cinemaService.layThongTinLichChieuPhim(id);
      dispatch(
        createAction(actionTypes.FETCH_HE_THONG_RAP_THEO_PHIM, res.data.content)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// export const layCumRapTheoHeThongAction = (dispatch) => {
//   cinemaService
//     .layCumRapTheoHeThong()
//     .then((res) => {
//
//       dispatch(createAction(actionTypes.FETCH_HE_THONG_RAP, res.data.content));
//     })
//     .catch((err) => {
//       console.log(err?.response.data);
//     });
// };
