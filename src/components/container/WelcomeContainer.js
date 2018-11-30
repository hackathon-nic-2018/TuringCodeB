import React, { Component } from 'react'
import Header from '../ui/header/Header'

export default class WelcomeContainer extends Component {
  render () {
    return (
      <div className={'content'}>
        <div className={'container-fluid turing--container-banner'}>
          <img className={'phone'} src={'/assets/media/img/home/phone.png'} alt={'Phone'}/>
          <img className={'confitte'} src={'/assets/media/img/home/confetti-right@2x.png'} alt={'Confitte 1'}/>
          <img className={'confitte2'} src={'/assets/media/img/home/confetti-left@2x.png'} alt={'Confitte 2'}/>

          <div className={'container'}>
            <Header/>
          </div>
        </div>

        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-md-6 turing--content-1'}>
                <p className={'turing-marine display-4'}>Acerca de nosotros</p>
                <p className={'turing-marine'}>
                  <span className='turing-orange font-weight-bold'>Zoneg Nicaragua:</span> es una app para buscar negocios de manera fácil y rápida
                  de encontrar x o y producto si necesidad de moverse del lugar en el que
                  se encuentre y podrá tener comunicación con el establecimiento .
                </p>
              </div>

              <div className={'col-md-6 turing--content-2'}>
                <img src={'/assets/media/img/home/walls_hero@2x.png'} alt={'wal'}/>
              </div>
            </div>
          </div>
        </div>

        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <hr className={'turing--hr-line'}/>
            <div className={'row'}>
              <div className={'col-md-6 turing--content-2'}>
                <img src={'/assets/media/img/home/hotel/hotel.png'} alt={'home'}/>
              </div>

              <div className={'col-md-6 turing--content-1'}>
                <h1 className={'turing-marine display-4'}>Bar y Restaurantes</h1>
                <p className={'turing-marine'}>
                  Conoce los mejores lugares de pasa tiempo, tu familia y amigos puede decidir
                  antes de salir donde distraerse o celebrar lo que deseas con la mejor informacion
                  que te brindamos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <hr className={'turing--hr-line'}/>
            <div className={'row'}>
              <div className={'col-md-6 turing--content-1'}>
                <p className={'turing-marine display-4'}>T&uacute;rismo</p>
                <p className={'turing-marine'}>
                  Brindamos la informaci&oacute;n que necesitas saber,  lugares que deseas conocer
                  con sus mejores comodidades.
                </p>
              </div>

              <div className={'col-md-6 turing--content-2'}>
                <img src={'/assets/media/img/home/tourims/tourims.png'} alt={'wal'}/>
              </div>
            </div>
          </div>
        </div>

        <div className={'container turing--container-content'}>
          <div className={'container'}>
            <hr className={'turing--hr-line'}/>
            <div className={'row'}>
              <div className={'col-md-6 turing--content-2'}>
                <img src={'/assets/media/img/home/hotel/hotel.png'} alt={'home'}/>
              </div>

              <div className={'col-md-6 turing--content-1'}>
                <h1 className={'turing-marine display-4'}>Hoteles</h1>
                <p className={'turing-marine'}>
                  Tus desiciones están en tus manos, puedes tener la oportunidad de elegir lo que necesitas,
                  tu comidad es lo primero.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className={'turing--hr-line-blue'}/>
      </div>
    )
  }
}
