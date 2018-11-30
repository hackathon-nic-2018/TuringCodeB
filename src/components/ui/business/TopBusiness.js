import React, { Component } from 'react'

export default class TopBusiness extends Component {

  render () {
    return (
      <span>
        <h2 className="turing-marine turing--business-location text-center">
          Los negocios más buscado
        </h2>
        <div className="row justify-content-center turing--tops">

          <div className={'col-md-2 text-center'}>
            <div className={'avatar shadow-sm'}>
              <img src="/assets/media/img/business/1.jpg" alt="Imagen"/>
            </div>

            <h6 className="font-weight-bold turing-gray-description">
              Restaurante
            </h6>
          </div>

          <div className={'col-md-2 text-center'}>
            <div className={'avatar shadow-sm'}>
              <img src="/assets/media/img/business/2.jpg" alt="Imagen"/>
            </div>

            <h6 className="font-weight-bold turing-gray-description">
              Hotel Angel Azul
            </h6>
          </div>

          <div className={'col-md-2 text-center'}>
            <div className={'avatar shadow-sm'}>
              <img src="/assets/media/img/business/3.jpeg" alt="Imagen"/>
            </div>

            <h6 className="font-weight-bold turing-gray-description">
              Túrismo
            </h6>
          </div>

          <div className={'col-md-2 text-center'}>
            <div className={'avatar shadow-sm'}>
              <img src="/assets/media/img/business/4.jpg" alt="Imagen"/>
            </div>

            <h6 className="font-weight-bold turing-gray-description">
              Gastrónomia
            </h6>
          </div>

          <div className={'col-md-2 text-center'}>
            <div className={'avatar shadow-sm'}>
              <img src="/assets/media/img/business/1.jpg" alt="Imagen"/>
            </div>

            <h6 className="font-weight-bold turing-gray-description">
              Túrismo
            </h6>
          </div>

        </div>
      </span>
    )
  }
}

