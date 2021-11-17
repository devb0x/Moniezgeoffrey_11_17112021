import React from "react"
import './Footer.css'

const Footer = () => {
  const copyrightText = '2020 Kasa. All rights reserved'
  return (
    <footer className="footer">
      <img src="" alt=""/>
      <p className="copyright">&#xA9; {copyrightText}</p>
    </footer>
  )
}

export default Footer