import React from "react";
import "../Footer/Footer.scss";
function Footer(props) {
  return (
    <footer>
      <div className="footer__content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 guidelines">
              <p className="app__name">HV MOVIE</p>
              <div className="row">
                <ul className=" col-md-5">
                  <li>
                    <a href="/#">FAQ</a>
                  </li>
                  <li>
                    <a href="/#">Brand Guidelines</a>
                  </li>
                </ul>
                <ul className="col-md-5">
                  <li>
                    <a href="/#">Thỏa thuận sử dụng</a>
                  </li>
                  <li>
                    <a href="/#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 contact">
              <p className="contact__title">ĐỐI TÁC</p>
              <ul className="contact__item">
                <li className="contact__item--li ">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/QPJb0sq/cgv.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/qy7Zxt6/bhd.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/nnYH6XW/galaxy.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li ">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/Y7spP5M/cinestar.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/vZ9myZy/lotte.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/r2g97r7/megags.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
              <ul className="contact__item ">
                <li className="contact__item--li ">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/Yc2Jzzm/dcine.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/7NDTSnJ/beta.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/Hq57mwP/dongdacinema.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li ">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/VQ0wbkj/TOUCH.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/bKGdjCY/cnx.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="contact__item--li">
                  <a className="contact__item--link" href="/#">
                    <img
                      className="contact__item--img"
                      src="https://i.ibb.co/nDZgccs/STARLIGHT.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-12 mobile__app">
              <p className="mobile__app--title ">MOBILE APP</p>
              <a href="/#" className="mobile__app--item">
                <img
                  src="https://i.ibb.co/Zm8vZgX/apple-logo.png"
                  alt="hinhanh"
                />
              </a>
              <a href="/#" className="mobile__app--item">
                <img
                  src="https://i.ibb.co/m6YfCrT/android-logo.png"
                  alt="hinhanh"
                />
              </a>
            </div>

            <div className="col-md-2 col-sm-12 mobile__app">
              <p className="mobile__app--title ">SOCIAL</p>
              <a href="/#" className="mobile__app--item">
                <img
                  src="https://i.ibb.co/9H50pyY/facebook-logo.png"
                  alt="hinhanh"
                />
              </a>
              <a href="/#" className="mobile__app--item">
                <img
                  src="https://i.ibb.co/1MrJQT3/zalo-logo.png"
                  alt="hinhanh"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="copyright__logo col-md-3 col-sm-12">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e139c64-eb71-4e77-8f03-93a7ecea436c/dccdpok-d50bd49d-a7ee-4155-b627-22154d08ad98.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRlMTM5YzY0LWViNzEtNGU3Ny04ZjAzLTkzYTdlY2VhNDM2Y1wvZGNjZHBvay1kNTBiZDQ5ZC1hN2VlLTQxNTUtYjYyNy0yMjE1NGQwOGFkOTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3EIGjnkNmWLjxA6dN00B3N1oD5OEPFb__lhvr3LTvcQ"
                alt=""
              />{" "}
              <span className="logo__text">HV Movie</span>
            </div>

            <div className="copyright__text col-md-6 col-sm-12">
              <h6 className="text__title text-white">
                HV Movie - DỰ ÁN ĐẶT VÉ XEM PHIM - CYPERSOFT
              </h6>
              <p className="text__content">
                Địa chỉ:459 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí
                Minh, Tp. Hồ Chí Minh, Việt Nam.
                <br />
                Số Điện Thoại (Hotline): 1900 000 000
                <br />
                Email:{" "}
                <span className="text-danger">hoangvi0409@gmail.com</span>
              </p>
            </div>

            <div className="imgBoCo col-md-3 col-sm-12">
              <img
                src="https://file.hstatic.net/1000012850/file/thong-bao-website-voi-bo-cong-thuong_grande.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
