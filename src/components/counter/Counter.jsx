import React, { Fragment, Component } from "react";
import CoinsLabel from "../coinsLabel/CoinsLabel";
import Coin from "../coin/Coin.jsx";
import MysteryBlock from "../mysteryBlock/MysteryBlock";
import Button from "../button/Button";
import PropTypes from "prop-types";
import "./style.css";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      coinAnimation: false,
      isMysteryBlockActive: true,
      mysteryBlockAnimation: false
    };
  }

  removeAnimations = () => {
    setTimeout(
      () =>
        this.setState((prevState, props) => ({
          isMysteryBlockActive: prevState.counter < props.limit,
          coinAnimation: false,
          mysteryBlockAnimation: false
        })),
      this.props.animationTimeout
    );
  };

  handleOnIncreaseClick = () => {
    debugger
    if (this.state.counter < this.props.limit) {
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        coinAnimation: true,
        mysteryBlockAnimation: true,
        isMysteryBlockActive: true
      }), this.removeAnimations());


    } else {
      this.setState({ mysteryBlockAnimation: true });
      setTimeout(() => this.setState({ mysteryBlockAnimation: false }), this.props.animationTimeout);
    }
  };

  handleOnDecreaseClick = () => {
    if (this.state.counter > 0) {
      this.setState((prevState, props) => ({
        counter: prevState.counter - 1,
        isMysteryBlockActive: prevState.counter <= props.limit
      }));
      const decrementFX = new Audio(
        "https://themushroomkingdom.net/sounds/wav/smw/smw_stomp_bones.wav"
      );
      decrementFX.play();
    } else {
      const disabledFX = new Audio(
        "https://themushroomkingdom.net/sounds/wav/smw/smw_lemmy_wendy_incorrect.wav"
      );
      disabledFX.play();
    }
  };


  handleOnButtonClick = event => {
    const actionMap = {
      increase: 1,
      decrease: -1
    }
    const actionType = event.target.getAttribute("action");

    this.setState(prevState => ({
      counter: prevState.counter + actionMap[actionType]
    }))
  }


  render() {
    const {
      counter,
      coinAnimation,
      isMysteryBlockActive,
      mysteryBlockAnimation
    } = this.state;

    return (
      <Fragment>
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
            <Button action="increase" id="increase_button" onClick={this.handleOnIncreaseClick}>
              Increase
            </Button>
          </div>
          <div className="col-2">
            <Button action="decrease" id="decrease_button" onClick={this.handleOnDecreaseClick}>
              Decrease
            </Button>
           
          </div>
          <div className="col-4" />
        </div>
      </Fragment>
    );
  }
}

Counter.propTypes = {
  limit: PropTypes.number.isRequired,
  animationTimeout: PropTypes.number
};

export default Counter;
