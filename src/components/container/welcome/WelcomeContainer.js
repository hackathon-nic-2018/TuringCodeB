import React, { Component } from 'react'
import Header from '../../ui/header/Header'

export default class WelcomeContainer extends Component {
  render () {
    return (
      <div className={'content'}>
        <div className={'container-fluid turing--container-banner'}>
          {/*<img className={'phone'} src={'/assets/media/img/home/phone.png'} alt={'Phone'}/>*/}
          <img className={'confitte fadeInRight animated'} src={'/assets/media/img/home/confetti-right@2x.png'} alt={'Confitte 1'}/>
          <img className={'confitte2 fadeInLeft animated'} src={'/assets/media/img/home/confetti-left@2x.png'} alt={'Confitte 2'}/>

          <div className={'container'}>
            <Header/>
          </div>
        </div>

        {
          this.props.content.map((content, index) => {
            if (index === 0 || index === 2) {
              return (
                <div className={'container-fluid turing--container-content'} key={index}>
                  <div className={'container'}>
                    <div className={'row'}>
                      <div className={'col-md-6 turing--content-1'}>
                        <p className={'turing-marine display-4'}>{ content.name }</p>
                        <p className={'turing-marine'}>
                          { content.description }
                        </p>
                      </div>

                      <div className={'col-md-6 turing--content-2'}>
                        <img src={content.image} alt={content.name}/>
                      </div>
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className={'container-fluid turing--container-content turing--content--gay'} key={index}>
                  <div className={'container'}>
                    <div className={'row'}>
                      <div className={'col-md-6 turing--content-2'}>
                        <img src={content.image} alt={content.name}/>
                      </div>

                      <div className={'col-md-6 turing--content-1'}>
                        <h1 className={'turing-marine display-4'}>{ content.name }</h1>
                        <p className={'turing-marine'}>
                          { content.description }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }

        <hr className={'turing--hr-line-blue'}/>
      </div>
    )
  }
}
