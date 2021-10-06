import { actionTypes } from "../actions/type";

const initialState = {
  heThongRap: [],
  filmDetail: {},
};

export const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HE_THONG_RAP:
      return { ...state, heThongRap: action.payload };
    case actionTypes.FETCH_HE_THONG_RAP_THEO_PHIM:
      const cloneLichChieu = action.payload;
      return { ...state, filmDetail: { ...cloneLichChieu } };
    default:
      return { ...state };
  }
};
