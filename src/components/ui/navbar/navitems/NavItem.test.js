import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import NavItems from './NavItems'

it('renders without crashing', () => {
  const items= { name: "Inicio", url: "/" }
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <NavItems items={items} index={1}/>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});