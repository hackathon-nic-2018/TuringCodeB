import React, { Component } from 'react'

export default class ProfileContainer extends Component {
  render () {
    const image = '/assets/media/img/business/1.jpg'
    const bg_profile = {
      background: 'url(' + image + ')'
    }

    return (
      <div className={'turing--content--profile'}>
        <div className={'container-fluid turing--profile-bg'}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={'col-md-4 card'}>
                <div className={'turing--banner rounded shadow'} style={bg_profile}/>
                <div className='turing--name display-4 turing-marine text-center'>Restaurante Ya voy</div>
                <div className={'turing--description text-center'}>
                  Almuerzo, Cena, Brunch, Abierto hasta tarde. Reservaciones, Asientos al aire libre, Asiento.
                </div>
                <div className={'turing--social-media'}>
                  redes
                </div>
              </div>

              <div className={'col-md-8'}>
                <div className={'turing--map shadow'}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.207735946842!2d-86.88211768578277!3d12.43587522977277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f711f930b24a3c5%3A0xe62f4dd7477f9c87!2sRestaurante+Yavoy!5e0!3m2!1sen!2sni!4v1543590498301"
                    frameBorder="0" allowFullScreen/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
