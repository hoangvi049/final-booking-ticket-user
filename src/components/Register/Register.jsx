import React from "react";
import { NavLink } from "react-router-dom";
import "../Register/Register.scss";
import { Input } from "antd";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { groupID } from "../../config/setting";
import { useCallback } from "react";
import { dangKyAction } from "../../redux/actions/AdminAction";

const validationSchema = yup.object().shape({
  taiKhoan: yup.string().required("Yêu cầu nhập tên tài khoản"),
  matKhau: yup.string().required("Yêu cầu nhập mật khẩu"),
  hoTen: yup.string().required("Yêu cầu nhập họ tên"),
  email: yup
    .string()
    .required("Yêu cầu nhập email")
    .email("Email không hợp lệ"),
  soDt: yup
    .string()
    .required("Yêu cầu nhập số điện thoại")
    .matches(/^[0-9]+$/g, "Số điện thoại không hợp lệ"),
});

function Register(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
      maNhom: groupID,
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      setAllTouched();
      console.log(values);
      dispatch(dangKyAction(values));
    },
  });

  const setAllTouched = useCallback(() => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  }, [formik]);

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__header">
          <NavLink to="/" className="img-logo">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e139c64-eb71-4e77-8f03-93a7ecea436c/dccdpok-d50bd49d-a7ee-4155-b627-22154d08ad98.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTM5YzY0LWViNzEtNGU3Ny04ZjAzLTkzYTdlY2VhNDM2Y1wvZGNjZHBvay1kNTBiZDQ5ZC1hN2VlLTQxNTUtYjYyNy0yMjE1NGQwOGFkOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3EIGjnkNmWLjxA6dN00B3N1oD5OEPFb__lhvr3LTvcQ"
              alt="logo"
            />
            <span className="text-logo">HV Movie</span>
          </NavLink>
        </div>

        <div className="register__form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="taiKhoan"
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Tài Khoản"
              />
              {formik.touched.taiKhoan ? (
                <p className="text-danger">{formik.errors.taiKhoan}</p>
              ) : null}
            </div>
            <div className="form-group">
              <Input.Password
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="matKhau"
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
              />
              {formik.touched.matKhau ? (
                <p className="text-danger">{formik.errors.matKhau}</p>
              ) : null}
            </div>

            <div className="form-group">
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="hoTen"
                type="text"
                className="form-control"
                placeholder="Họ và Tên"
              />
              {formik.touched.hoTen ? (
                <p className="text-danger">{formik.errors.hoTen}</p>
              ) : null}
            </div>

            <div className="form-group">
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
              {formik.touched.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="form-group">
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="soDt"
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
              />
              {formik.touched.soDt ? (
                <p className="text-danger">{formik.errors.soDt}</p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary">
              Đăng ký
            </button>
          </form>
        </div>

        <div className="register__footer">
          <NavLink to="/login">Bạn đã có tài khoản?</NavLink>
        </div>

        <NavLink to="/" className="close__btn">
          <i class="fas fa-times-circle"></i>
        </NavLink>
      </div>
    </section>
  );
}
export default Register;
