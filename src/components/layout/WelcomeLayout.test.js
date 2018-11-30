import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeLayout from './WelcomeLayout'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeLayout/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
