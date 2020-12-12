import React from "react";
import Header from "../components/header/Header";
import Counter from "../components/counter/Counter";
import "../grid/simple-grid.min.css";
import "./MainContainer.css";

const MainContainer = () => (
  <div className="App container">
    <div className="row">
      <Header title="React Coin Counter" />
    </div>
    <div className="row">
      <Counter limit={10} animationTimeout={230} />
    </div>
  </div>
);

export default MainContainer;
