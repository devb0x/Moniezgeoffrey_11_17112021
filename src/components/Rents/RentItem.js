import React, { Component } from "react"

import Card from "../UI/Card"
import styles from './RentItem.module.css'

class RentItem extends Component {
  render() {

    return (
      <li key={this.props.id}>
        <Card id={this.props.id} className={`${styles['rent-item']}`}>
          <div className={styles.background} />
          <img
            className={`${styles['rent-item__thumbnail']}`}
            src={this.props.cover}
            alt={this.props.title}
          />
          <div className={`${styles['rent-item__title']}`}>
            {this.props.title}
          </div>
        </Card>
      </li>
    )
  }
}

export default RentItem