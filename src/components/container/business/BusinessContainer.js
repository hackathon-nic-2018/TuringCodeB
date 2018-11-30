import React, { Component } from 'react'
import SerachBar from '../../ui/searchbar/SerachBar'
import TopBusiness from '../../ui/business/TopBusiness'
import BusinessLocation from '../../ui/business/BusinessLocation'

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
            {/* Business Location*/}
            <BusinessLocation/>
          </div>
        </div>

      </div>
    )
  }
}
