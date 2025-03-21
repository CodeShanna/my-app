import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div classname="WeatherForecast-icon"></div>
          <div className=" WeatherForecast-temperatures">
            <span className="WeatherForecast- max">19°</span>/
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
