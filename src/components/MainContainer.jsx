import React, { useState } from "react";
import Header from "../components/header/Header";
import Counter from "../components/counter/Counter";
import LimitHandler from "../components/limitHandler/LimitHandler";
import "../grid/simple-grid.min.css";
import "./MainContainer.css";

const MainContainer = () => {
  const [currentLimit, setCurrentLimit] = useState(20);

  return (
    <div className="App container">
      <div className="row">
        <Header title="React Coin Counter" />
        <LimitHandler id="limit_handler" limit={Number(currentLimit)} setLimit={setCurrentLimit} />
      </div>
      <div className="row">
        <Counter limit={Number(currentLimit)} animationTimeout={230} />
      </div>
    </div>
  )
};

export default MainContainer;
