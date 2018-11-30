import React, { Component } from 'react'
import BusinessContainer from '../../container/business/BusinessContainer'
import BusinessContainerType from '../../container/business/BusinessContainerType'

export default class BusinessLayoutType extends Component {

  render () {
    return(
      <div className={'turing--business'}>
        <BusinessContainerType/>
      </div>
    )
  }
}
