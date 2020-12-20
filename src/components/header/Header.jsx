import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './Header.css';

const Header = ({ title }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="React logo" />
    <p className="App-paragraph">{title}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
