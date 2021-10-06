import React from "react";

import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { dangXuatAction } from "../../redux/actions/AdminAction";
import _ from "lodash";
import { history } from "../../App";
function Header(props) {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(dangXuatAction());
  };

  const renderMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          history.push("/profile");
        }}
      >
        Profile
      </Menu.Item>

      <Menu.Item onClick={logOut} danger>
        Log out
      </Menu.Item>
    </Menu>
  );

  const { taiKhoan } = useSelector((state) => {
    return state.userReducer;
  });

  const renderLogin = () => {
    if (_.isEmpty(taiKhoan)) {
      return (
        <NavLink className="login-link" to="/login">
          <i className="far fa-user mr-2" />
          <span>Login</span>
        </NavLink>
      );
    } else {
      return (
        <Dropdown overlay={renderMenu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <i className="far fa-user mr-2"></i> <span>{taiKhoan}</span>{" "}
            <DownOutlined />
          </a>
        </Dropdown>
      );
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e139c64-eb71-4e77-8f03-93a7ecea436c/dccdpok-d50bd49d-a7ee-4155-b627-22154d08ad98.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTM5YzY0LWViNzEtNGU3Ny04ZjAzLTkzYTdlY2VhNDM2Y1wvZGNjZHBvay1kNTBiZDQ5ZC1hN2VlLTQxNTUtYjYyNy0yMjE1NGQwOGFkOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3EIGjnkNmWLjxA6dN00B3N1oD5OEPFb__lhvr3LTvcQ"
              alt="logo"
              style={{ width: 50, height: 50 }}
            />
            <span className="text__logo">HV Movie</span>
          </NavLink>
        </div>

        <div className="header__mobile">
          <div className="header__login">{renderLogin()}</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/movielist">
                Kho Phim
              </NavLink>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#schedule">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Cụm Rạp
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/#news">
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/#home__app">
                Ứng dụng
              </NavLink>
            </li>
          </ul>
          <div className="header__login">{renderLogin()}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
