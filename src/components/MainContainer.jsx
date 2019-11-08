import React, { Component } from "react";
import Header from "../components/header/Header";
import Counter from "../components/counter/Counter";
import "../grid/simple-grid.min.css";
import "./style.css";

class MainContainer extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Header title="React counter" />
        </div>
        <div className="row">
          <Counter limit={10} animationTimeout={230} />
        </div>
      </div>
    );
  }
}

export default MainContainer;
