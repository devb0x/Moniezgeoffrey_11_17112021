import React from "react"
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <img className="header-logo" src={require("../../public/assets/img/logo.svg")} alt="Kusa logo" />
        <ul>
          <li className="header-nav__item">
            <a href="#">Accueil</a>
          </li>
          <li className="header-nav__item">
            <a href="#" >A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header