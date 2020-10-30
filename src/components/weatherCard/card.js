import React from "react";
import "./card.css";
import WeatherIcon from '../weatherIcon/WeatherIcon'

const Card = (props) => {
  let theme = null
  if(props.theme === 'dark'){
    theme = {
      backgroundColor:"black",
      color:"white"
    }
  }
  else{
    theme={
      backgroundColor:"white",
      color:"black"
    }
  }
  console.log(props.data.cod)
  if(props.data.cod === 200){
      return (
        <div style={theme} className="card">
          <h1>
            <u>{props.name}</u>
          </h1>
          <hr color="white" />
          <div
            className="topLevel"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <div style={{backgroundColor:"white", borderRadius:"100%"}}>
              <WeatherIcon
                weatherId={props.data.weather[0].id}
                type={props.data.weather[0].icon}
              />
            </div>
            <div className="temps">
              <p style={{ marginTop: "20px" }}>{props.data.sys.country}</p>
              <h1>
                {props.data.main.temp} <sup>o</sup>F
              </h1>
              Min-Max:{props.data.main.temp_min}-{props.data.main.temp_max}
            </div>
          </div>
          <hr color="white" />
          <b>{props.data.weather[0].description.toUpperCase()}</b>
          <hr color="white" />

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
 else if(props.data.cod == 404){
     return (
       <div style={theme} className="card">
         <h1 style={{color:"red"}}>City not found</h1>
       </div>
     );
 }
 else{
   return(
     <div className="card">
       <h1>Type city name.</h1>
     </div>
   )
 }
   
};
export default Card;
