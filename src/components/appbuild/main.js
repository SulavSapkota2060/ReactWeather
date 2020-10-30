import React, { Component } from "react";
import Aux from "../hoc/AuxWrapper/auxwrap";
import "./main.css";
import Card from "../weatherCard/card";
import Spinner from "../spinner/spinner";

class Main extends Component {
  state = {
    name: null,
    data: null,
    theme: "light",
  };

  spin = null;
  i = (<i class="fa fa-moon-o" style={{ fontSize: "30px" }}></i>);

  changeCityHandler = (e) => {
    this.spin = <Spinner />;

    this.setState({ name: document.querySelector("input").value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      console.log("ENTERED");
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=cdc6775592b5c25b4450d17a226d7e8f&units=imperial`
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

  changeThemeHandler = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      this.i = (
        <i style={{ color: "white", fontSize: "30px" }} class="fa fa-sun-o"></i>
      );
    } else if (this.state.theme === "dark") {
      this.setState({ theme: "light" });
      document.body.style.backgroundColor = "#eee";
      document.body.style.color = "black";
      this.i = <i class="fa fa-moon-o" style={{ fontSize: "30px" }}></i>;
    }
  };
  componentDidMount() {
    document.body.style.backgroundColor = "#eee";
  }
  render() {
    return (
      <Aux>
        <div className="title">
          <button
            style={{
              float: "right",
              border: "none",
              background: "none",
              margin: "10px",
            }}
            onClick={this.changeThemeHandler}
          >
            {this.i}
          </button>
          <div>
            <h2>Weather Application</h2>

            <a href="http://sulavsapkota.000webhostapp.com">Sulav Sapkota</a>
          </div>
        </div>
        <div className="search">
          <input
            placeholder="Enter the name of the city/country eg. New York"
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
          <Card
            theme={this.state.theme}
            name={this.state.name}
            data={this.state.data}
          />
        ) : null}
      </Aux>
    );
  }
}

export default Main;
