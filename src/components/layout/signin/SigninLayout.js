import React, { Component } from 'react'
import SigninContainer from '../../container/signin/SigninContainer'

export default class BusinessLayout extends Component {

  render () {
    return(
      <div className={'turing--business'}>
        <SigninContainer/>
      </div>
    )
  }
}
