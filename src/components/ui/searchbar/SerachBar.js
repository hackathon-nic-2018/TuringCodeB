import React, { Component } from 'react'
import ChipsBusiness from '../business/ChipsBusiness'

export default class SerachBar extends Component {
  render () {
    return (
      <div className={'container-fluid turing--search-content turing-bg shadow-sm'}>
        <div className={'container turing--searchbar'}>
          <div className="text-center">
            <input className={'turing--searchbar turing-gray-description'} type={'text'} placeholder={'Buscar un negocio'}/>
          </div>
        </div>

        <ChipsBusiness/>
      </div>
    )
  }
}

