import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavBrand from './navbrand/NavBrand'
import NavLink from './navlink/NavLink'
import { NavigationTuring } from '../../../api/ServerApi'

class Navigation extends Component {

  componentDidMount() {
    this.props.NavigationTuring()
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white turing--shadow fixed-top">
        <div className={'container'}>
          <NavBrand/>

          <div className="navbar-toggler" data-toggle="collapse" data-target="#TuringCode" aria-label="Toggle navigation">
            <i className={'fas fa-ellipsis-v fa-lg'}/>
          </div>

          <NavLink menu={this.props.navigationturing}/>
        </div>
      </nav>
    )
  }
}

const mapStateProps = (state) => {
  return state
}

const matchDispatchProps = (dispatch) => {
  return bindActionCreators({
    NavigationTuring: NavigationTuring
  }, dispatch)
}

export default connect(mapStateProps, matchDispatchProps)(Navigation)