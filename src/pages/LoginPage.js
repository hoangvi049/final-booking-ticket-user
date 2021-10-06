import React, { useEffect } from "react";
import Login from "../components/Login/Login";
import swal from "sweetalert";
import { userLogin } from "../config/setting";
import { Redirect } from "react-router";
function LoginPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (localStorage.getItem(userLogin)) {
    swal({
      title: "Bạn đã đăng nhập rồi!!!",

      icon: "warning",
      button: "OK",
    });
    return <Redirect to="/" />;
  }
  return <Login />;
}

export default LoginPage;
