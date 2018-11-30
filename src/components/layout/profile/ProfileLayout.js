import React, { Component } from 'react'
import ProfileContainer from '../../container/profile/ProfileContainer'

export default class ProfileLayout extends Component {

  render () {
    return(
      <div className={'turing--business'}>
        <ProfileContainer/>
      </div>
    )
  }
}
