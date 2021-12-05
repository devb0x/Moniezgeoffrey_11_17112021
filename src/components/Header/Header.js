import React, {Component} from "react"
import './Header.css'
import { NavLink } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          {/*<img className="header-logo" src={require("../../../public/assets/img/logo.svg")} alt="Kusa logo" />*/}
          <img className="header-logo" src={require("../../public/assets/img/logo.svg")} alt="Kusa logo" />
          <ul>
            <li className="header-nav__item">
              <NavLink activeClassName="active" to="/homepage">Accueil</NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink activeClassName="active" to="/404" >A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header