import "./App.scss";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import BookingTicketPage from "./pages/BookingTicketPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import MovieListPage from "./pages/MovieListPage";

export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/" exact Component={HomePage}></HomeTemplate>
          <HomeTemplate path="/home" exact Component={HomePage}></HomeTemplate>
          <HomeTemplate
            path="/moviedetail/:id"
            exact
            Component={MovieDetailPage}
          ></HomeTemplate>
          <HomeTemplate
            path="/bookingticket/:id"
            exact
            Component={BookingTicketPage}
          ></HomeTemplate>
          <HomeTemplate
            path="/login"
            exact
            Component={LoginPage}
          ></HomeTemplate>
          <HomeTemplate
            path="/register"
            exact
            Component={RegisterPage}
          ></HomeTemplate>
          <HomeTemplate
            path="/profile"
            exact
            Component={ProfilePage}
          ></HomeTemplate>
          <HomeTemplate
            path="/movielist"
            exact
            Component={MovieListPage}
          ></HomeTemplate>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
