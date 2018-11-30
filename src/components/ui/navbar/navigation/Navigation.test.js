import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import store from '../../../../stores/stores'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </Provider>
    , div)
  ReactDOM.unmountComponentAtNode(div)
})
