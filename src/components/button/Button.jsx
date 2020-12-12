import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  const classNames = cn("App-button", props.className);
  return (
    <button {...props} className={classNames}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
