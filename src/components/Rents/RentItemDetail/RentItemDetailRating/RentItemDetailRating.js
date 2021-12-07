import React, { Component } from "react"

import styles from './RentItemDetailRating.module.css'

class RentItemDetailRating extends Component {
  render() {
    const rate = parseInt(this.props.value)
    const star = new Array(rate).fill('fill')
    const emptyStar = new Array(5 - rate).fill('empty')

    return (
      <div className={`${styles['wrapper']}`}>
        {star.map((el, index) => (
          <i key={el + index} className="fa fa-star" />
        ))}
        {emptyStar.map((el, index) => (
          <i key={el + index} className={`fa fa-star ${styles['gray']}`} />
        ))}
      </div>
    )
  }

}

export default RentItemDetailRating