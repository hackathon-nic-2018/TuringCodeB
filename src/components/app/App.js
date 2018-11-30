import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Content from '../content/Content'
import Footer from '../ui/footer/Footer'
import Navigation from '../ui/navbar/navigation/Navigation'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentDidMount() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      document.querySelector('nav.turing--shadow').style.display = 'none'
    }
  }

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

