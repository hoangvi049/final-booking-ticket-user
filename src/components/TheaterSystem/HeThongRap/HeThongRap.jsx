import React from "react";
import "../HeThongRap/HeThongRap.scss";
function HeThongRap(props) {
  const { heThongRap } = props;

  return heThongRap?.map((item, index) => {
    return (
      <a
        className="nav-link"
        id="v-pills-home-tab"
        data-toggle="pill"
        href={`#${item.maHeThongRap}`}
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        key={index}
      >
        <img
          className="heThongRap__logo"
          src={item.logo}
          alt={item.tenHeThongRap}
        />
      </a>
    );
  });
}

export default HeThongRap;
