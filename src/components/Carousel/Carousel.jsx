import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Carousel/Carousel.scss";
import BookingTab from "../BookingTab/BookingTab";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { layDanhSachBannerAction } from "../../redux/actions/FilmAction";

function Carousel(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachBannerAction);
  }, [dispatch]);
  const { listBanner } = useSelector((state) => state.filmReducer);

  const renderBanner = () => {
    return listBanner?.map((item) => {
      return (
        <div
          className="item"
          key={item.maBanner}
          style={{ backgroundImage: `url(${item.hinhAnh})` }}
        >
          {/* <div className="item__img">
            <img src={item.hinhAnh} alt={item.maPhim} width="100%" />
            <div className="background__overlay"></div>
          </div> */}
        </div>
      );
    });
  };

  return (
    <div className="banner">
      <OwlCarousel
        loop
        nav
        autoplay
        autoplaySpeed={3}
        items={1}
        className="banner-carousel owl-carousel owl-theme"
      >
        {renderBanner()}
      </OwlCarousel>
      <BookingTab />
    </div>
  );
}

export default Carousel;
