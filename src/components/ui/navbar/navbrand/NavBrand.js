import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBrand extends Component {

  render () {
    const logo = '/assets/media/img/logo/zn-icon.png'
    return (
      <Link to={'/'} className="navbar-brand turing--navbrand">
        <img src={logo} width={40} alt="Zona de Negocios"/>
        <span>ZONEG</span>
        <small>NICARAGUA</small>
      </Link>
    )
  }
}

