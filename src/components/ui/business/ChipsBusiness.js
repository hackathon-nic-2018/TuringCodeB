import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ChipsBusiness extends Component {
  render () {
    return (
      <div className={'container'}>
        <div className='row justify-content-center'>
          <Link to={'/business/tourims'} className={'turing-tourism shadow'}>
            <i className={'fal fa-umbrella-beach fa-lg'}/> T&uacute;rismo
          </Link>

          <Link to={'/business/bar_and_restaurant'} className={'turing-gastronomy shadow'}>
            <i className={'fal fa-utensils fa-lg'}/> Bar y Restaurantes
          </Link>

          <Link to={'/business/hotel'} className={'turing-hotels shadow'}>
            <i className={'fal fa-hotel fa-lg'}/> Hoteles
          </Link>

          <Link to={'/business/establishments'} className={'turing-store shadow'}>
            <i className={'fal fa-house-flood fa-lg'}/> Establecimientos
          </Link>

          <Link to={'/business/small_business'} className={'turing-business shadow'}>
            <i className={'fal fa-store fa-lg'}/> Peque&ntilde;os negocios
          </Link>
        </div>
      </div>
    )
  }
}

