import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Content from '../content/Content'
import Footer from '../ui/footer/Footer'
import Navigation from '../ui/navbar/Navigation'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render () {
    const { children } = this.props;
    return (
      <div className={'turing--app'}>
        <Navigation/>
        <Content body={children}/>
        <Footer/>
      </div>
    )
  }
}

