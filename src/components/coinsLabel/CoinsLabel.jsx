import React from 'react';
import PropTypes from 'prop-types';
import Coin from '../coin/Coin';
import './CoinsLabel.css';

const CoinsLabel = ({ number, padLength, padString }) => (
  <div>
    <Coin id="coin_label_svg" className="App-Coin-label" alt="Coin label" />
    <span className="App-Coin-label-symbol">&nbsp;🗙&nbsp;&nbsp;</span>
    <span className="App-Coin-label-text">{number.toString().padStart(padLength, padString)}</span>
  </div>
);

CoinsLabel.defaultProps = {
  padLength: 4,
  padString: '0',
};

CoinsLabel.propTypes = {
  padLength: PropTypes.number,
  padString: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default CoinsLabel;
