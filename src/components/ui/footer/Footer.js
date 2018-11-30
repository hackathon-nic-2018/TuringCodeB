import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div className={'container-fluid'}>
        <div className={'container'}>
          <div className="text-center turing--copyright">
            <p className="text-center turing-marine"><i className="fal fa-copyright"/> 2018 | Zona de Negocios</p>
            <p className={'turing-marine text-center'}>Dise&ntilde;o y Desarrollo por <code>Turing Code</code></p>
          </div>
        </div>
      </div>
    )
  }
}

