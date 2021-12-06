import React, {Component} from "react"
import { Link } from "react-router-dom";

import styles from './Card.module.css'


class Card extends Component {

  render() {
    return (
      <div className={`${styles['card']}`}>
        <Link to={`/rents/${this.props.id}`} >
          {this.props.children}
        </Link>
      </div>
    )
  }
}

export default Card