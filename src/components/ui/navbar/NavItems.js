import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavItems extends Component {

  componentDidMount() {

  }

  render () {
    return (
      <li
        className={'nav-item '}
        key={this.props.index}
        id={'menu-'+this.props.index}>

        <Link to={this.props.items.url} className={"nav-link"}>{this.props.items.name}</Link>
      </li>
    )
  }
}