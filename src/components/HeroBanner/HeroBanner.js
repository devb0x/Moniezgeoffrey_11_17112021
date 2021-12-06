import React, { Component } from "react"

import styles from './HeroBanner.module.css'

class HeroBanner extends Component {

  render() {
    let title = 'Chez vous, partout et ailleurs'
    return (
      <div className={`${styles['hero-banner']}`}>
        <img src={require("../../public/assets/img/banner.jpg")} alt="paysage"/>
        <div className={`${styles['background']}`} />
        <h1 className={`${styles['hero-banner__title']}`}>{title}</h1>
      </div>
    )
  }
}

export default HeroBanner