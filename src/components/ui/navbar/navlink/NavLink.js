import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NavItems from '../navitems/NavItems'

export default class NavLink extends Component {
	render() {
		return (
      <div className="collapse navbar-collapse" id="TuringCode">
        <ul className={'navbar-nav mx-auto'}>
          {
            this.props.menu.map((link, index) => {
              return (
                <NavItems items={link} index={index} key={index}/>
              )
            })
          }
        </ul>

        <ul className={'navbar-nav ml-auto'}>
          <li className="nav-item">
            <Link to={'#'} className="nav-link">
              <i className={'far fa-search fa-lg'}/>
            </Link>
          </li>
        </ul>
      </div>
		)
	}
}