import React from "react";
import ActiveBlock from "./ActiveBlock.svg";
import InactiveBlock from "./InactiveBlock.svg";
import cn from "classnames";
import PropTypes from "prop-types";
import "./style.css";

const playMysteryBlockFX = () => {
  const mysteryBlockFX = new Audio(
    "https://themushroomkingdom.net/sounds/wav/smw/smw_shell_ricochet.wav"
  );
  mysteryBlockFX.play();
};

const MysteryBlock = props => {
  const { animation, active, alt } = props;
  const classNames = cn("App-Mistery-Block", { "margin-top": animation });

  if (animation) {
    playMysteryBlockFX();
  }

  return (
    <img {...props} className={classNames} animation={classNames} src={active ? ActiveBlock : InactiveBlock} alt={alt} />
  );
};

MysteryBlock.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool.isRequired,
  animation: PropTypes.bool.isRequired
};

export default MysteryBlock;
