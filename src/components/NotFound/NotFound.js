import React from "react"

import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div>
      <div className={`${styles['not-found__wrapper']}`}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a
        href="#"
        className={`${styles['not-found__link']}`}
      >
        Retourner sur la page d'accueil
      </a>
    </div>
  )
}

export default NotFound