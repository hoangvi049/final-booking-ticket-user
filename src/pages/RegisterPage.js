import React from "react";
import { Redirect } from "react-router";
import swal from "sweetalert";
import Register from "../components/Register/Register";
import { userLogin } from "../config/setting";

function RegisterPage(props) {
  if (localStorage.getItem(userLogin)) {
    swal({
      title: "Bạn đã đăng nhập rồi!!!",

      icon: "warning",
      button: "OK",
    });
    return <Redirect to="/" />;
  }
  return <Register />;
}

export default RegisterPage;
