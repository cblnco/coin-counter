import React from 'react';
import PropTypes from 'prop-types';
import { numberRegex } from '../../utils/regex';
import { MIN, MAX } from '../../utils/constants';
import soundBoard from '../../utils/soundBoard';
import NumberField from '../numberField/NumberField';
import './LimitHandler.css';

const LimitHandler = ({ id, limit, setLimit }) => {
  const onNumberFieldChange = (e) => {
    const newLimit = e.target.value;
    setLimit(numberRegex.test(newLimit) ? newLimit : 0);
  };

  const onNumberFieldBlur = () => {
    let newLimit = limit;

    if (newLimit && numberRegex.test(newLimit)) {
      if (newLimit < MIN) {
        newLimit = MIN;
      } else if (newLimit > MAX) {
        newLimit = MAX;
      } else {
        newLimit = Number(newLimit);
      }
    } else {
      newLimit = MIN;
    }

    setLimit(newLimit);
  };

  const onDecreaseClick = () => {
    if (limit > MIN) {
      setLimit(limit - 1);
      soundBoard.playDecrease();
    } else {
      soundBoard.playError();
    }
  };

  const onIncreaseClick = () => {
    if (limit < MAX) {
      setLimit(limit + 1);
      soundBoard.playIncrease();
    } else {
      soundBoard.playError();
    }
  };

  return (
    <div id={id} className="limit-container">
      <div className="limit-sentence">Current limit:</div>
      <NumberField
        id="number_field"
        value={limit}
        onChange={onNumberFieldChange}
        onBlur={onNumberFieldBlur}
        onDecrease={onDecreaseClick}
        onIncrease={onIncreaseClick}
      />
    </div>
  );
};

LimitHandler.propTypes = {
  id: PropTypes.string,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
};

export default LimitHandler;
