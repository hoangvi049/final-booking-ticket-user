import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layHeThongRapAction } from "../../redux/actions/CinemaAction";
import { cinemaService } from "../../services/cinemaService";
import "../TheaterSystem/TheaterSystems.scss";
import CumRap from "./CumRap/CumRap";
import HeThongRap from "./HeThongRap/HeThongRap";

function TheaterSystem(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layHeThongRapAction);
  }, [dispatch]);

  const { heThongRap } = useSelector((state) => {
    return state.cinemaReducer;
  });

  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    cinemaService
      .layCumRapTheoHeThong()
      .then((result) => {
        setCumRap(result.data.content);
      })
      .catch((err) => {
        console.log(err?.response.data);
      });
  }, []);

  return (
    <div>
      <section id="schedule" className="schedule">
        <div className="schedule__content">
          <div className="container">
            <h1 className="text-center">Lịch Chiếu</h1>
            <div className="schedule__row row bg-light">
              <div className="main__tab col-2">
                <div
                  className="nav flex-column nav-pills"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <HeThongRap heThongRap={heThongRap} />
                </div>
              </div>
              <div className="main__tabContent col-md-10 col-sm-12">
                <div className="tab-content" id="v-pills-tabContent">
                  <CumRap cumRap={cumRap} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TheaterSystem;
