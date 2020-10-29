import React from "react";
import "./card.css";
import WeatherIcon from '../weatherIcon/WeatherIcon'

const Card = (props) => {
  if(props.data.cod === 200){
      return (
        <div className="card">
          <h1>
            <u>{props.name}</u>
          </h1><hr/>
          <div
            className="topLevel"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <WeatherIcon
              weatherId={props.data.weather[0].id}
              type={props.data.weather[0].icon}
            />
            <div className="temps">
              <h1 style={{ marginTop: "45px" }}>
                {props.data.main.temp} <sup>o</sup>F
              </h1>
              Min-Max:{props.data.main.temp_min}-{props.data.main.temp_max}
            </div>
          </div>
          <hr />
          <b>{props.data.weather[0].description.toUpperCase()}</b>
          <hr />

          <p>Pressure : {props.data.main.pressure} Pa</p>
          <p>
            Humidity : {props.data.main.humidity} g/m<sup>3</sup>
          </p>
          <p>Wind: {props.data.wind.speed} m/s</p>
          <p>
            Latitude: {props.data.coord.lat}
            <sup>o</sup>
          </p>
          <p>
            Longitude: {props.data.coord.lon}
            <sup>o</sup>
          </p>
        </div>
      );
  }
 else{
     return (
       <div className="card">
         <h1>Please enter city name in the search box.</h1>
       </div>
     );
 }
   
};
export default Card;
