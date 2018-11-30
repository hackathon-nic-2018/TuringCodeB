import React, { Component } from 'react'

export default class TopBusiness extends Component {

  render () {
    return (
      <span>
        <h2 className="turing-marine turing--business-location text-center">
          Los negocios más buscado
        </h2>
        <div className="row justify-content-center turing--tops">

          {
            this.props.tops.map((business, index) => {
              return (
                <div className={'col-md-2 text-center'} key={index}>
                  <div className={'avatar shadow-sm'}>
                    <img src={business.image} alt="Imagen"/>
                  </div>

                  <h6 className="font-weight-bold turing-gray-description">
                    {business.name}
                  </h6>
                </div>
              )
            })
          }
        </div>
      </span>
    )
  }
}


