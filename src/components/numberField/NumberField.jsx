import React from "react";
import PropTypes from "prop-types";
import soundBoard from "../../utils/soundBoard";
import "./NumberField.css";

const NumberField = ({ id, value, setValue, min, max }) => {

    const handleOnIncreaseClick = () => {
        if (value < max) {
            setValue(value + 1);
            soundBoard.playIncrease();
        }
        else {
            soundBoard.playError();
        }
    }

    const handleOnDecreaseClick = () => {
        if (value > min) {
            setValue(value - 1);
            soundBoard.playDecrease();
        }
        else {
            soundBoard.playError();
        }
    }

    return (
        <div id={id} className="number-field">
            <button className="number-button left" onClick={handleOnDecreaseClick}>-</button>
            <input className="number-input" value={value} />
            <button className="number-button right" onClick={handleOnIncreaseClick}>+</button>
        </div>
    )
};

NumberField.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    type: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string
};

export default NumberField;
