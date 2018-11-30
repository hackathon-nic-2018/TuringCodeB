import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeContainer from './WelcomeContainer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeContainer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
