import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BusinessLocation extends Component {

  render () {
    return (
      <span>
        <h1
          className="animated fadeIn delay-2s turing-marine turing--business-location justify-content-center turing--mt">
          Negocios según tu ubicaci&oacute;n - <span className="font-weight-bold turing-pink">Le&oacute;n</span>
        </h1>
        <div className={'row'}>
          {
            this.props.business.map((business, index) => {
              return (
                <div className={'col-md-3 turing-mtop'} key={index}>
                  <div className="card shadow">
                    <img className="card-img-top" src={business.image} alt="Card image cap"/>
                    <div className="card-body text-center">
                      <h5 className="card-title font-weight-bold turing-blue">
                        {business.name}
                      </h5>

                      <p className="card-text">
                        {business.description}
                      </p>

                      <Link to={'/profile/' + business.name.replace(/\s+/g, '')} className="card-link turing--card-link">
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </span>
    )
  }
}

