import React, {Component} from "react"

import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

class Header extends Component {
  render() {
    return (
      <header className={`${styles['header']}`}>
        <nav className={`${styles['header-nav']}`}>
          <img
            className={`${styles['header-logo']}`}
            src={require("../../public/assets/img/logo.svg")}
            alt="Kusa logo" />
          <ul>
            <li className={`${styles['header-nav__item']}`}>
              <NavLink activeClassName="active" to="/homepage">Accueil</NavLink>
            </li>
            <li className={`${styles['header-nav__item']}`}>
              <NavLink activeClassName="active" to="/about" >A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header