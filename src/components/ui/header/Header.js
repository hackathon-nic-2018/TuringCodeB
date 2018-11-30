import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

  render () {
    return (
      <header className="turing--header">
        <div className={'turing--title'}>
          <h1 className='turing-marine display-3 turing--name-app'>Zona de Negocios</h1>
          <p className="turing-gray-description">
            Crea un perfil para tu negocio <br/>
            con información relevante para tus clientes de una manera fácil y rápida.
          </p>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className={'fab fa-facebook-square fa-2x'}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className={'fab fa-instagram fa-2x'}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className={'fab fa-twitter fa-2x'}/>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className={'fab fa-google-play fa-2x'}/>
            </a>
          </li>
        </ul>

        <div className={'turing--group-btn'}>
          <Link to={'/business'} className={'btn turing--btn-primary shadow'}>
            <i className={'far fa-search'}/> Explorar negocios
          </Link>

          <Link to={'/signin'} className={'btn turing--btn-secundary shadow'}>
            <i className={'far fa-sign-in'}/> Registrar mi negocio
          </Link>
        </div>
      </header>
    )
  }
}
