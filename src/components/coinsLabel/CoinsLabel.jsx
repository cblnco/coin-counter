import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../coin/Coin';
import './CoinsLabel.css';

const CoinsLabel = ({ number, padStart, padStr }) => (
  <div>
    <Coin id="coin_label_svg" className="App-Coin-label" alt="Coin label" />
    <span className="App-Coin-label-symbol">&nbsp;🗙&nbsp;&nbsp;</span>
    <span className="App-Coin-label-text">{number.toString().padStart(padStart, padStr)}</span>
  </div>
);

CoinsLabel.defaultProps = {
  padStr: 1,
};

CoinsLabel.propTypes = {
  padStr: PropTypes.number,
  number: PropTypes.number.isRequired,
  padStart: PropTypes.number.isRequired,
};

export default CoinsLabel;
