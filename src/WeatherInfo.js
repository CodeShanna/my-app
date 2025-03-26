import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./weather.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="list-unstyled">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize list-unstyled">
          {props.data.description}
        </li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <br />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="list-unstyled">Humidity: {props.data.humidity}%</li>
            <li className="list-unstyled">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

