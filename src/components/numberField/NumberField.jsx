import React from 'react';
import PropTypes from 'prop-types';
import './NumberField.css';

const NumberField = ({ id, value, onChange, onBlur, onDecrease, onIncrease }) => (
  <div id={id} className="number-field">
    <button className="number-button left" type="button" onClick={onDecrease}>
      -
    </button>
    <input className="number-input" value={value} onChange={onChange} onBlur={onBlur} />
    <button className="number-button right" type="button" onClick={onIncrease}>
      +
    </button>
  </div>
);

NumberField.defaultProps = {
  onChange: null,
  onBlur: null,
  onDecrease: null,
  onIncrease: null,
};

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
};

export default NumberField;
