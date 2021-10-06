import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import filmReducer from "./reducers/FilmReducer";
import { cinemaReducer } from "./reducers/CinemaReducer";
import { userReducer } from "./reducers/UserReducer";
import { bookingReducer } from "./reducers/BookingReducer";

const rootReducer = combineReducers({
  filmReducer,
  cinemaReducer,
  userReducer,
  bookingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
