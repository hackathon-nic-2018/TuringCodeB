import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WelcomeContainer from '../../container/welcome/WelcomeContainer'
import { ContentHome } from '../../../api/ServerApi'

class WelcomeLayout extends Component {

  componentDidMount() {
    this.props.ContentHome()
  }

  render () {
    return(
      <div className={'turing--welcome'}>
        <WelcomeContainer content={this.props.contenthome}/>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return state
}

const matchDispatchProps = (dispatch) => {
  return bindActionCreators({
    ContentHome: ContentHome
  }, dispatch)
}

export default connect(mapStateProps, matchDispatchProps)(WelcomeLayout)