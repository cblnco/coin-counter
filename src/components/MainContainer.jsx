import React, { useState } from "react";
import Header from "../components/header/Header";
import Counter from "../components/counter/Counter";
import LimitHandler from "../components/limitHandler/LimitHandler";
import "../grid/simple-grid.min.css";
import "./MainContainer.css";

const MainContainer = () => {
  let [counterLimit, setCounterLimit] = useState(10);

  return (
    <div className="App container">
      <div className="row">
        <Header title="React Coin Counter" />
        <LimitHandler value={counterLimit} setValue={setCounterLimit} />
      </div>
      <div className="row">
        <Counter limit={counterLimit} animationTimeout={230} />
      </div>
    </div>
  )
};

export default MainContainer;
