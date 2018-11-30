import React, { Component } from 'react'

export default class ChipsBusiness extends Component {

  render () {
    return (
      <div className={'container'}>
        <div className='row justify-content-center'>
          <a href={'/business/tourims'} type={'tourims'} className={'turing-tourism shadow'}>
            <i className={'fal fa-umbrella-beach fa-lg'}/> T&uacute;rismo
          </a>

          <a href={'/business/bar_and_restaurant'} type={'bar_and_restaurant'} className={'turing-gastronomy shadow'}>
            <i className={'fal fa-utensils fa-lg'}/> Bar y Restaurantes
          </a>

          <a href={'/business/hotel'} type={'hotel'} className={'turing-hotels shadow'}>
            <i className={'fal fa-hotel fa-lg'}/> Hoteles
          </a>

          <a href={'/business/establishments'} type={'establishments'} className={'turing-store shadow'}>
            <i className={'fal fa-house-flood fa-lg'}/> Establecimientos
          </a>

          <a href={'/business/small_business'} type={'small_business'} className={'turing-business shadow'}>
            <i className={'fal fa-store fa-lg'}/> Peque&ntilde;os negocios
          </a>
        </div>
      </div>
    )
  }
}

