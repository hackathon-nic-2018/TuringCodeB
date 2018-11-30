import React, { Component } from 'react'

export default class ChipsBusiness extends Component {
  render () {
    return (
      <div className={'container'}>
        <div className='row justify-content-center'>
          <div className={'turing-tourism'}>
            <i className={'fal fa-umbrella-beach fa-lg'}/> T&uacute;rismo
          </div>
          <div className={'turing-gastronomy'}>
            <i className={'fal fa-utensils fa-lg'}/> Bar y Restaurantes
          </div>

          <div className={'turing-hotels'}>
            <i className={'fal fa-hotel fa-lg'}/> Hoteles
          </div>

          <div className={'turing-store'}>
            <i className={'fal fa-house-flood fa-lg'}/> Establecimientos
          </div>

          <div className={'turing-business'}>
            <i className={'fal fa-store fa-lg'}/> Peque&ntilde;os negocios
          </div>
        </div>
      </div>
    )
  }
}

