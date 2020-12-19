import React from 'react';
import Coin from '../coin/Coin';
import PropTypes from 'prop-types';
import './CoinsLabel.css';

const CoinsLabel = ({ number, padStart, padStr }) => (
  <div>
    <Coin id="coin_label_svg" className="App-Coin-label" alt="Coin label" />
    <span className="App-Coin-label-symbol">&nbsp;🗙&nbsp;&nbsp;</span>
    <span className="App-Coin-label-text">{number.toString().padStart(padStart, padStr)}</span>
  </div>
);

CoinsLabel.propTypes = {
  padStr: PropTypes.string,
  number: PropTypes.number.isRequired,
  padStart: PropTypes.number.isRequired,
};

export default CoinsLabel;
