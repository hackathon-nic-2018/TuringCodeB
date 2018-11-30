import React, { Component } from 'react'

export default class ProfileContainer extends Component {
  render () {
    const image = "/assets/media/img/profile/profile.jpg"
    const bg_profile = {
      background: 'url('+ image +')'
    };

    return (
      <div className={'turing--content--profile'}>
        <div className={'container-fluid turing--profile-bg'} style={bg_profile}>
        </div>

      </div>
    )
  }
}
