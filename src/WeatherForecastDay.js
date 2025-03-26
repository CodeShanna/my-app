import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={32} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {Math.round(props.data.temperature.maximum)}º{" / "}
        </span>
        <span className="WeatherForecast-temp-min">
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
