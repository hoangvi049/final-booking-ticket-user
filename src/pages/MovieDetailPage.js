import React, { useEffect } from "react";
import MovieDetail from "../components/MovieDetail/MovieDetail";

function MovieDetailPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MovieDetail props={props} />
    </div>
  );
}

export default MovieDetailPage;
