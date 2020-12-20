import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ id, className, onClick, children }) => {
  const classNames = cn('App-button', className);
  return (
    <button id={id} className={classNames} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: null,
};

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
