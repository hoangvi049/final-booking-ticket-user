import React from "react";
import { CubeGrid } from "styled-loaders-react";
import "../Loading/Loading.scss";

function Loading(props) {
  return (
    <div className="loading">
      <CubeGrid duration="10s" color="#FF6B08" />
    </div>
  );
}

export default Loading;
