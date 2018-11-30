import React, { Component } from 'react'

export default class Sitemap extends Component {

  render () {
    return(
      <div className={'turing--sitemap'}>
        <h3>Sitemap</h3>
        <ul>
          <li><a href={'/'}>Inicio</a></li>
          <li>
            <a href={'/business'}>Buscar Negocios</a>
            <ul>
              <li><a href={'/busines'}> Perfil de un negocio</a></li>
              <li><a href={'/profile'}> Perfil de un negocio</a></li>
            </ul>
          </li>
          <li><a href={'/promotions'}>Promociones</a></li>
          <li><a href={'/contacts'}>Contactanos</a></li>
        </ul>
      </div>
    )
  }
}
