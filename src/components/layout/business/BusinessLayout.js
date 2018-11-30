import React, { Component } from 'react'
import BusinessContainer from '../../container/business/BusinessContainer'

export default class BusinessLayout extends Component {

  render () {
    return(
      <div className={'turing--business'}>
        <BusinessContainer/>
      </div>
    )
  }
}
