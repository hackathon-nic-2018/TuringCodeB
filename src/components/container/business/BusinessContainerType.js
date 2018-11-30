import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BusinessTopsApi } from '../../../api/ServerApi'
import BusinessType from '../../ui/business/BusinessType'
import SerachBarType from '../../ui/searchbar/SerachBarType'

class BusinessContainerType extends Component {

  componentDidMount () {
    this.props.BusinessTopsApi()
  }

  render () {
    return (
      <div className={'turing--content--business'}>
        {/*Search bar*/}
        <SerachBarType/>

        {/*Business Content*/}
        <div className={'container turing--container-content'}>
          <div className={'container'}>

            {/* Business Location*/}
            <BusinessType business={this.props.businesslocation} type={this.props.typebusiness}/>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateProps = (state) => {
  return state
}

const matchDispatchProps = (dispatch) => {
  return bindActionCreators({
    BusinessTopsApi: BusinessTopsApi
  }, dispatch)
}

export default connect(mapStateProps, matchDispatchProps)(BusinessContainerType)