import React from "react";
import PropTypes from "prop-types";
import NumberField from "../numberField/NumberField";
import "./LimitHandler.css";

const LimitHandler = ({ value, setValue }) => {
    return (
        <div className="limit-container">
            <div className="limit-sentence">Current limit:</div>
            <NumberField id="limit_field" value={value} setValue={setValue} min="5" max="15" />
        </div>
    )
};

LimitHandler.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired
};

export default LimitHandler;
