import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CoinsLabel from '../coinsLabel/CoinsLabel';
import Coin from '../coin/Coin';
import MysteryBlock from '../mysteryBlock/MysteryBlock';
import soundBoard from '../../utils/soundBoard';
import Button from '../button/Button';
import './Counter.css';

const Counter = ({ limit, animationTimeout }) => {
  const [counter, setCounter] = useState(0);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [isMysteryBlockActive, setIsMysteryBlockActive] = useState(true);
  const [mysteryBlockAnimation, setMysteryBlockAnimation] = useState(false);

  // Effect to delay the prop update to set the block active or inactive.
  useEffect(() => {
    if (counter > limit) {
      setCounter(limit);
    }

    setTimeout(() => setIsMysteryBlockActive(counter < limit), animationTimeout);
  }, [counter, animationTimeout, limit]);

  const removeAnimations = () => {
    setTimeout(() => {
      setCoinAnimation(false);
      setMysteryBlockAnimation(false);
    }, animationTimeout);
  };

  const handleOnIncreaseClick = () => {
    if (counter < limit) {
      setCounter(counter + 1);
      setCoinAnimation(true);
      setMysteryBlockAnimation(true);
      removeAnimations();
    } else {
      soundBoard.playError();
      setMysteryBlockAnimation(true);
      setTimeout(() => {
        setMysteryBlockAnimation(false);
      }, animationTimeout);
    }
  };

  const handleOnDecreaseClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      soundBoard.playDecrease();
    } else {
      soundBoard.playError();
    }
  };

  return (
    <>
      <div className="row">
        <CoinsLabel number={counter} padLength={4} padString="0" />
      </div>
      <div className="row App-Mystery-Block-row">
        <Coin id="main_coin" defaultStyle animation={coinAnimation} alt="Coin" />
        <MysteryBlock
          id="mystery_block"
          active={isMysteryBlockActive}
          animation={mysteryBlockAnimation}
          alt="Mystery Block"
          onClick={handleOnIncreaseClick}
        />
      </div>
      <div className="row">
        <div className="col-4" />
        <div className="col-2">
          <Button id="decrease_button" className="decrease-button" onClick={handleOnDecreaseClick}>
            Decrease
          </Button>
        </div>
        <div className="col-2">
          <Button id="increase_button" className="increase-button" onClick={handleOnIncreaseClick}>
            Increase
          </Button>
        </div>
        <div className="col-4" />
      </div>
    </>
  );
};

Counter.defaultProps = {
  animationTimeout: 200,
};

Counter.propTypes = {
  limit: PropTypes.number.isRequired,
  animationTimeout: PropTypes.number,
};

export default Counter;
