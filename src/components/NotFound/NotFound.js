import React, { Component } from "react"
import { Link } from "react-router-dom"

import styles from './NotFound.module.css'

class NotFound extends Component {
  render() {
    return (
      <div>
        <div className={`${styles['not-found__wrapper']}`}>
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link
          to="/homepage"
          className={`${styles['not-found__link']}`}
        >
          Retourner sur la page d'accueil
        </Link>
      </div>
    )
  }
}

// const NotFound = () => {
//   return (
//     <div>
//       <div className={`${styles['not-found__wrapper']}`}>
//         <h1>404</h1>
//         <p>Oups! La page que vous demandez n'existe pas.</p>
//       </div>
//       <Link
//         to="/homepage"
//         className={`${styles['not-found__link']}`}
//       >
//         Retourner sur la page d'accueil
//       </Link>
//     </div>
//   )
// }

export default NotFound