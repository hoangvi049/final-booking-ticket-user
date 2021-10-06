import React, { Fragment, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import SlickMovieList from "../components/SlickMovieList/SlickMovieList";
import TheaterSystem from "../components/TheaterSystem/TheaterSystem";
import ScrollAnimation from "react-animate-on-scroll";
import AppHome from "../components/AppHome/AppHome";
import News from "../components/News/News";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Carousel />
      <SlickMovieList />
      <ScrollAnimation animateIn="animate__fadeIn">
        <TheaterSystem />
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__zoomIn">
        <News />
      </ScrollAnimation>
      <AppHome />
    </Fragment>
  );
}

export default HomePage;
