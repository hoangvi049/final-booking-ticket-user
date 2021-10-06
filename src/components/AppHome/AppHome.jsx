import React from "react";
import "../AppHome/AppHome.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function AppHome(props) {
  return (
    <div className="AppHome" id="home__app">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 AppHome__text">
            <div>
              <h3 className="text__title">
                Ứng dụng tiện lợi dành cho người yêu điện ảnh
              </h3>
              <p className="text__content">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn btn-info">
                App miễn phí - Tải về ngay
              </button>
              <p className="text__content">Đã có hai phiên bản iOS & Android</p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mobile">
            <div className="mobile__screen">
              <img
                className="mobile__screen--img"
                src="https://i.ibb.co/smKg7xh/mobile.png"
                alt="mobile"
              />

              <div className="mobile__slider">
                <OwlCarousel
                  loop
                  nav
                  autoplay
                  items={1}
                  className="mobile-carousel owl-carousel owl-theme"
                >
                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide4.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide5.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide8.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide10.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide13.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide14.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                      alt="hinhanh"
                    />
                  </div>

                  <div className="mobile__carousel--item">
                    <img
                      className="img-fluid"
                      src="https://tix.vn/app/assets/img/icons/slide/slide16.jpg"
                      alt="hinhanh"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHome;
