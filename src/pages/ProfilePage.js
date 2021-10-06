import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import swal from "sweetalert";
import Loading from "../components/Loading/Loading";
import Profile from "../components/Profile/Profile";
import { userLogin } from "../config/setting";
import { layThongTinTaiKhoanAction } from "../redux/actions/AdminAction";

function ProfilePage(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(layThongTinTaiKhoanAction());
    setLoading(false);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!localStorage.getItem(userLogin)) {
    swal({
      title: "Bạn cần phải đăng nhập",

      icon: "warning",
      button: "OK",
    });
    return <Redirect to="/" />;
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return <Profile />;
}

export default ProfilePage;
