import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import NavLink from './NavLink'

it('renders without crashing', () => {
  const menu = [{ name: "Inicio", url: "/" }]
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NavLink menu={menu} index={1}/>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
