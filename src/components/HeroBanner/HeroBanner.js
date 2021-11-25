import React, {Component} from "react"

import './HeroBanner.css'

class HeroBanner extends Component {
  constructor() {
    super()
    this.title = 'Chez vous, partout et ailleurs'
  }
  render() {
    return (
      <div className="hero-banner">
        <img src={require("../../public/assets/img/img.png")} alt=""/>
        <h1 className="hero-banner__title">{this.title}</h1>
      </div>
    )
  }
}

export default HeroBanner