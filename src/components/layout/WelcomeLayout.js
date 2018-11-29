import React, { Component } from 'react'
import WelcomeContainer from '../container/WelcomeContainer'

export default class WelcomeLayout extends Component {

  render () {
    return(
      <div className={'container-fluid turing--welcome'}>
        <WelcomeContainer/>
      </div>
    )
  }
}
