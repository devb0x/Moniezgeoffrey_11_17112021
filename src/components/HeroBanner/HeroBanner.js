import React, { Component } from "react"

// import styles from './HeroBanner.module.css'

class HeroBanner extends Component {
  constructor() {
    super()
    this.title = 'Chez vous, partout et ailleurs'
  }
  render() {
    return (
      <div className="hero-banner">
        <img src={require("../../public/assets/img/banner.jpg")} alt="paysage"/>
        <h1 className="hero-banner__title">{this.title}</h1>
      </div>


      // <div className={`${styles['HeroBanner']}`}>
      //   <img src={require("../../public/assets/img/banner.jpg")} alt=""/>
      //   <h1 className={`${styles['hero-banner__title']}`}>{this.title}</h1>
      // </div>
    )
  }
}

export default HeroBanner