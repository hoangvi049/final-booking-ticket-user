import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupID } from "../../../config/setting";
import { capNhatThongTinTaiKhoanAction } from "../../../redux/actions/AdminAction";

function EditProfile(props) {
  const { thongTinTaiKhoan } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  let [state, setState] = useState({
    values: {
      hoTen: "",
      taiKhoan: "",
      email: "",
      matKhau: "",
      maLoaiNguoiDung: "",
      maNhom: groupID,
      soDt: "",
    },

    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
    },
  });

  useEffect(() => {
    setState({
      values: {
        taiKhoan: thongTinTaiKhoan.taiKhoan,
        matKhau: thongTinTaiKhoan.matKhau,
        email: thongTinTaiKhoan.email,
        hoTen: thongTinTaiKhoan.hoTen,
        maLoaiNguoiDung: thongTinTaiKhoan.maLoaiNguoiDung,
        soDt: thongTinTaiKhoan.soDT,
        maNhom: thongTinTaiKhoan.maNhom,
      },
      errors: { hoTen: "", taiKhoan: "", matKhau: "", soDt: "", email: "" },
    });
  }, [thongTinTaiKhoan]);

  const handleChange = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };

    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };

    if (name === "email") {
      let regexEmail =
        "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    if (name === "soDt") {
      let regexPhoneNumber = "^[0-9-+]{9,15}$";
      if (value.match(regexPhoneNumber)) {
        newErrors.soDt = "";
      } else {
        newErrors.soDt = "Sô điện thoại không hợp lệ";
      }
    }

    setState({ values: newValues, errors: newErrors });
  };

  const handlleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = state;
    //check valid before submitting
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Thông tin không hợp lệ");
      return;
    }

    let infoUpdate = {
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      hoTen: values.hoTen,
      email: values.email,
      soDt: values.soDt,
      maNhom: values.maNhom,
      maLoaiNguoiDung: values.maLoaiNguoiDung,
    };

    console.log(infoUpdate);
    dispatch(capNhatThongTinTaiKhoanAction(infoUpdate));
  };

  return (
    <div className="card-body">
      <form className="formRegister" onSubmit={handlleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tài khoản</label>
          <input
            className="input"
            name="taiKhoan"
            placeholder="Tên tài khoản"
            value={state.values.taiKhoan}
            disabled
            onChange={handleChange}
          />
          <span className="text-danger"></span>
        </div>

        <div className="form-group">
          <label htmlFor="">Mật khẩu</label>
          <input
            className="input"
            name="matKhau"
            type="text"
            value={state.values.matKhau}
            onChange={handleChange}
            placeholder="Mật khẩu"
          />
          <span className="text-danger">{state.errors.matKhau}</span>
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            className="input"
            type="text"
            name="email"
            value={state.values.email}
            onChange={handleChange}
            placeholder=" Email"
          />
          <span className="text-danger">{state.errors.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="">Họ tên</label>
          <input
            className="input"
            type="text"
            name="hoTen"
            value={state.values.hoTen}
            onChange={handleChange}
            placeholder="Họ tên"
          />
          <span className="text-danger">{state.errors.hoTen}</span>
        </div>

        <div className="form-group">
          <label htmlFor="">Sô điện thoại</label>
          <input
            className="input"
            type="text"
            name="soDt"
            value={state.values.soDt}
            onChange={handleChange}
            placeholder=" Số điện thoại"
          />
          <span className="text-danger">{state.errors.soDt}</span>
        </div>

        <button className="btnChange btn btn-primary" type="submit">
          Cập nhật thông tin
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
