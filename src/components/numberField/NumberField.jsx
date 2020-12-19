import React from 'react';
import PropTypes from 'prop-types';
import './NumberField.css';

const NumberField = ({ id, value, onChange, onBlur, onDecrease, onIncrease }) => (
  <div id={id} className="number-field">
    <button className="number-button left" onClick={onDecrease}>
      -
    </button>
    <input className="number-input" value={value} onChange={onChange} onBlur={onBlur} />
    <button className="number-button right" onClick={onIncrease}>
      +
    </button>
  </div>
);

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
};

export default NumberField;
