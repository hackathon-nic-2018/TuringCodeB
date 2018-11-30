import React, { Component } from 'react'
import Header from '../../ui/header/Header'
import SerachBar from '../../ui/searchbar/SerachBar'

export default class BusinessContainer extends Component {
  render () {
    return (
      <div className={'turing--content--business'}>
        {/*Search bar*/}
        <SerachBar/>

      </div>
    )
  }
}
