import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ActiveBlock from './ActiveBlock.svg';
import InactiveBlock from './InactiveBlock.svg';
import soundBoard from '../../utils/soundBoard';
import './MysteryBlock.css';

const arePropsEqual = (prevProps, nextProps) =>
  prevProps.animation === nextProps.animation && prevProps.active === nextProps.active;

const MysteryBlock = ({ id, animation, active, alt, onClick }) => {
  const classNames = cn('App-Mistery-Block-Btn', { 'margin-top': animation });

  if (animation && active) {
    soundBoard.playBlockKick();
  }

  return (
    <button className={classNames} type="button" onClick={onClick}>
      <img
        id={id}
        className="App-Mistery-Block"
        src={active ? ActiveBlock : InactiveBlock}
        alt={alt}
      />
    </button>
  );
};

MysteryBlock.defaultProps = {
  id: 'mystery-block',
  alt: 'Mystery Block',
  onClick: null,
};

MysteryBlock.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool.isRequired,
  animation: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default memo(MysteryBlock, arePropsEqual);
