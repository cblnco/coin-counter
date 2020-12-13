import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';

it('Renders Coin Counter <MainContainer /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
