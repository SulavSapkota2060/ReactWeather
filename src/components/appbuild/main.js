import React, { Component } from "react";
import Aux from "../hoc/AuxWrapper/auxwrap";
import "./main.css";
import Card from "../weatherCard/card";
import Spinner from "../spinner/spinner";

class Main extends Component {
  state = {
    name: null,
    data: null,
  };

  spin = null;

  changeCityHandler = (e) => {
    this.spin = <Spinner />;

    this.setState({ name: document.querySelector("input").value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      console.log("ENTERED");
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=cdc6775592b5c25b4450d17a226d7e8f`
      )
        .then((r) => r.json())
        .then((pr) => {
          this.spin = null;
          this.setState({ data: pr });
        });
    } else if (prevState.name === this.state.name) {
      this.spin = null;
    }
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=cdc6775592b5c25b4450d17a226d7e8f`
    )
      .then((r) => r.json())
      .then((pr) => {
        this.setState({ data: pr });
      });
  }

  render() {
    return (
      <Aux>
        <div className="title">
          <h2>Weather Application</h2>
          <p>
            
            <a href="http://sulavsapkota.000webhostapp.com">Sulav Sapkota</a>
          </p>
        </div>
        <div className="search">
          <input
            placeholder="Enter the name of the city eg. Kathmandu"
            type="text"
            className="form-control"
          />

          <i
            onClick={(e) => this.changeCityHandler(e)}
            className="fa fa-search"
            style={{ fontSize: "30px", color: "#aaa", cursor: "pointer" }}
          ></i>
        </div>
        {this.spin}
        {this.state.data != null ? (
          <Card name={this.state.name} data={this.state.data} />
        ) : null}
      </Aux>
    );
  }
}

export default Main;
