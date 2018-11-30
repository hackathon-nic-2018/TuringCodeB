import React, { Component } from 'react'
import Header from '../../ui/header/Header'
import SerachBar from '../../ui/searchbar/SerachBar'
import TopBusiness from '../../ui/business/TopBusiness'

export default class BusinessContainer extends Component {
  render () {
    return (
      <div className={'turing--content--business'}>
        {/*Search bar*/}
        <SerachBar/>

        {/*Business Content*/}
        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <TopBusiness/>
          </div>
        </div>

      </div>
    )
  }
}
