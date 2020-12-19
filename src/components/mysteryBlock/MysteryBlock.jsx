import React, { memo } from "react";
import ActiveBlock from "./ActiveBlock.svg";
import InactiveBlock from "./InactiveBlock.svg";
import soundBoard from "../../utils/soundBoard";
import cn from "classnames";
import PropTypes from "prop-types";
import "./MysteryBlock.css";

const MysteryBlock = props => {
  const { id, animation, active, alt } = props;
  const classNames = cn("App-Mistery-Block", { "margin-top": animation });

  if (animation && active) {
    soundBoard.playBlockKick();
  }

  return (
    <img id={id} className={classNames} animation={classNames} src={active ? ActiveBlock : InactiveBlock} alt={alt} />
  );
};

MysteryBlock.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool.isRequired,
  animation: PropTypes.bool.isRequired
};

export default memo(MysteryBlock);
