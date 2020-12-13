import React from "react";
import CoinSVG from "./Coin.svg";
import soundBoard from "../../utils/soundBoard";
import cn from "classnames";
import PropTypes from "prop-types";
import "./Coin.css";

const Coin = props => {
  const { animation, defaultStyle, alt, className } = props;
  const classNames = cn(
    { "App-Coin-animation": animation },
    { "App-Coin": defaultStyle },
    className
  );

  if (animation) {
    soundBoard.playCoin();
  }

  return <img className={classNames} src={CoinSVG} alt={alt} />;
};

Coin.propTypes = {
  aniamtion: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  className: PropTypes.string
};

export default Coin;
