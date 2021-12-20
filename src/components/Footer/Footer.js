import React, { Component } from "react"

import styles from './Footer.module.css'

class Footer extends Component {

  render() {
    const copyrightText = '2020 Kasa. All rights reserved'

    return (
      <footer className={`${styles['footer']}`}>
        <img
          src={require("../../public/assets/img/logo-footer_kasa.svg")}
          alt="Kasa Logo"/>
        <p className={`${styles['copyright']}`}>&#xA9; {copyrightText}</p>
      </footer>
    )
  }

}

export default Footer