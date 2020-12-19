import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import CoinSVG from './Coin.svg';
import soundBoard from '../../utils/soundBoard';
import './Coin.css';

const Coin = (props) => {
  const { animation, defaultStyle, alt, className } = props;
  const classNames = cn(
    { 'App-Coin-animation': animation },
    { 'App-Coin': defaultStyle },
    // eslint-disable-next-line comma-dangle
    className
  );

  if (animation) {
    soundBoard.playCoin();
  }

  return <img className={classNames} src={CoinSVG} alt={alt} />;
};

Coin.defaultProps = {
  animation: false,
  defaultStyle: true,
  className: '',
  alt: 'Coin',
};

Coin.propTypes = {
  animation: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Coin;
