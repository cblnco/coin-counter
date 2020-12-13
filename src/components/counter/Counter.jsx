import React, { useState, useEffect } from "react";
import CoinsLabel from "../coinsLabel/CoinsLabel";
import Coin from "../coin/Coin.jsx";
import MysteryBlock from "../mysteryBlock/MysteryBlock";
import Button from "../button/Button";
import PropTypes from "prop-types";
import "./Counter.css";

const Counter = ({ limit, animationTimeout }) => {
  const [counter, setCounter] = useState(0);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [isMysteryBlockActive, setIsMysteryBlockActive] = useState(true);
  const [mysteryBlockAnimation, setMysteryBlockAnimation] = useState(false);

  // Effect to delay the prop update to set the block active or inactive.
  useEffect(() => {
    setTimeout(
      () => setIsMysteryBlockActive(counter < limit),
      animationTimeout
    );
  }, [counter, animationTimeout, limit]);

  const playIncorrectFX = () => {
    const incorrectFX = new Audio(
      "https://themushroomkingdom.net/sounds/wav/smw/smw_lemmy_wendy_incorrect.wav"
    );
    incorrectFX.play();
  };

  const removeAnimations = () => {
    setTimeout(
      () => {
        setCoinAnimation(false);
        setMysteryBlockAnimation(false);
      },
      animationTimeout
    );
  };

  const handleOnIncreaseClick = () => {
    if (counter < limit) {
      setCounter(counter + 1);
      setCoinAnimation(true);
      setMysteryBlockAnimation(true);
      removeAnimations();
    } else {
      playIncorrectFX();
      setMysteryBlockAnimation(true);
      setTimeout(() => {
        setMysteryBlockAnimation(false);
      },
        animationTimeout);
      
    }
  };

  const handleOnDecreaseClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      const decrementFX = new Audio(
        "https://themushroomkingdom.net/sounds/wav/smw/smw_stomp_bones.wav"
      );
      decrementFX.play();
    } else {
      playIncorrectFX();
    }
  };

  return (
    <>
      <div className="row">
        <CoinsLabel number={counter} padStart={5} padStr="0" />
      </div>
      <div className="row App-Mystery-Block-row">
        <Coin
          id="main_coin"
          defaultStyle
          animation={coinAnimation}
          alt="Coin"
        />
        <MysteryBlock
          id="mystery_block"
          active={isMysteryBlockActive}
          animation={mysteryBlockAnimation}
          alt="Mystery Block"
        />
      </div>
      <div className="row">
        <div className="col-4" />
        <div className="col-2">
          <Button action="increase" id="increase_button" onClick={handleOnIncreaseClick}>
            Increase
          </Button>
        </div>
        <div className="col-2">
          <Button action="decrease" id="decrease_button" onClick={handleOnDecreaseClick}>
            Decrease
          </Button>
        </div>
        <div className="col-4" />
      </div>
    </>
  );
}

Counter.propTypes = {
  limit: PropTypes.number.isRequired,
  animationTimeout: PropTypes.number
};

export default Counter;
