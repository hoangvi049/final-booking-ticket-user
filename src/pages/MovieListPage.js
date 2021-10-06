import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading/Loading";
import Movie from "../components/Movie/Movie";
import { layDanhSachPhimAcTion } from "../redux/actions/FilmAction";

function MovieListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const distpatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      distpatch(layDanhSachPhimAcTion);
      setLoading(false);
    }, 3000);
  }, [distpatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Movie />
    </div>
  );
}

export default MovieListPage;
