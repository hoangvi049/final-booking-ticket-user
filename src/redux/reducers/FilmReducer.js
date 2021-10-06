import { actionTypes } from "../actions/type";

const initialState = {
  listBanner: [],

  listFilm: [],

  filmDetail: {},
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST:
      let clonBannerList = action.payload;
      return { ...state, listBanner: clonBannerList };
    case actionTypes.FETCH_FILM_LIST:
      let cloneFilm = action.payload;
      return { ...state, listFilm: cloneFilm };
    case actionTypes.FETCH_FILM_DETAIL:
      return { ...state, filmDetail: action.payload };
    default:
      return { ...state };
  }
};

export default filmReducer;
