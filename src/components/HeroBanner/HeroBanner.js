import React from "react"

import './HeroBanner.css'

const HeroBanner = () => {
  const title = 'Chez vous, partout et ailleurs'

  return (
    <div className="hero-banner">
      <img src={require("../../public/assets/img/img.png")} alt=""/>
      <h1 className="hero-banner__title">{title}</h1>
    </div>
  )
}

export default HeroBanner