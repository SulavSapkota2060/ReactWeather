import React from "react";
import "./WeatherIcon.css";

const WeatherIcon = (props) => {
  let icon = null;
  if (props.weatherId >= 200 && props.weatherId <= 232) {
    icon = <div className="thunderstorm"></div>;
  } else if (props.weatherId >= 300 && props.weatherId <= 321) {
    icon = <div className="showerrain"></div>;
  } else if (props.weatherId >= 500 && props.weatherId <= 531) {
    icon = <div className="rain"></div>;
  } else if (props.weatherId >= 600 && props.weatherId <= 622) {
    icon = <div className="snow"></div>;
  } else if (props.weatherId >= 700 && props.weatherId <= 781) {
    icon = <div className="mist"></div>;
  } else if (props.weatherId >= 801 && props.weatherId <= 804) {
    icon = <div className="fewclouds"></div>;
  } else if (props.weatherId === 800) {
    icon = <div className="clearweather"></div>;
  }

  switch (props.type) {
    case "01d":
      icon = <div className="clearweather"></div>;
      break;
    case "01n":
      icon = <div className="clearsky"></div>;
      break;
    case "02d":
    case "02n":
      icon = <div className="fewclouds"></div>;
      break;
    case "03d":
    case "03n":
      icon = <div className="scatteredclouds"></div>;
      break;
    case "04d":
    case "04n":
      icon = (
        <div
          className="brokenclouds"
          style={{
            marginTop: "10px",
            backgroundSize: "100px",
            backgroundRepeat: "no-repeat",
            height: "100px",
            float: "left",
          }}
        ></div>
      );
      break;
    case "09d":
    case "09n":
      icon = <div className="showerrain"></div>;
      break;
    case "10d":
    case "10n":
      icon = <div className="rain"></div>;
      break;
    case "11d":
    case "11n":
      icon = <div className="thunderstorm"></div>;
      break;
    case "13d":
    case "13n":
      icon = <div className="snow"></div>;
      break;
    case "50d":
    case "50n":
      icon = <div className="mist"></div>;
      break;

    default:
      icon = <div className="mist"></div>;
      break;
  }

  return icon;
};

export default WeatherIcon;
