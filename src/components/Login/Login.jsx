import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Input } from "antd";
import "../Login/Login.scss";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/AdminAction";

function Login(props) {
  const validationSchema = yup.object().shape({
    taiKhoan: yup.string().required("Không được bỏ trống"),
    matKhau: yup.string().required("Không được bỏ trống"),
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: validationSchema,
    // validateOnMount: true,

    onSubmit: (values) => {
      setAllTouched();
      // if (!formik.isValid) return;
      dispatch(dangNhapAction(values));
    },
  });

  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__header">
          <NavLink to="/" className="img-logo">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e139c64-eb71-4e77-8f03-93a7ecea436c/dccdpok-d50bd49d-a7ee-4155-b627-22154d08ad98.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTM5YzY0LWViNzEtNGU3Ny04ZjAzLTkzYTdlY2VhNDM2Y1wvZGNjZHBvay1kNTBiZDQ5ZC1hN2VlLTQxNTUtYjYyNy0yMjE1NGQwOGFkOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3EIGjnkNmWLjxA6dN00B3N1oD5OEPFb__lhvr3LTvcQ"
              alt="logo"
            />
            <span className="text-logo">HV Movie</span>
          </NavLink>
          <div className="login__message">
            Đăng nhập để được nhiều ưu đãi, mua vé
            <br />
            và bảo mật thông tin!
          </div>
        </div>

        <div className="login__form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <Input
                className="form-control"
                name="taiKhoan"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-describedby="emailHelp"
                placeholder="Tài Khoản"
              />
              {formik.touched.taiKhoan ? (
                <p className="text-danger">{formik.errors.taiKhoan}</p>
              ) : null}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <Input.Password
                name="matKhau"
                type="password"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-control"
                placeholder="Mật khẩu"
              />
              {formik.touched.matKhau ? (
                <p className="text-danger">{formik.errors.matKhau}</p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </form>
        </div>

        <div className="login__footer">
          <NavLink to="/register">Bạn chưa có tài khoản?</NavLink>
        </div>

        <NavLink to="/" className="close__btn">
          <i className="fas fa-times-circle"></i>
        </NavLink>
      </div>
    </section>
  );
}

export default Login;
