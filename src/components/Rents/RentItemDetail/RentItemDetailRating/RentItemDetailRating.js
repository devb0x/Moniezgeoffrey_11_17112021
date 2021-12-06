import React, { Component } from "react"

import "./RentItemDetailRating.css"

class RentItemDetailRating extends Component {
  render() {
    const rate = parseInt(this.props.value)
    const star = new Array(rate).fill('fill')
    const emptyStar = new Array(5 - rate).fill('empty')

    return (
      <div>
        {star.map((el, index) => (
          <i key={el + index} className="fa fa-star" />
        ))}
        {emptyStar.map((el, index) => (
          <i key={el + index} className="fa fa-star gray" />
        ))}
      </div>
    )
  }

}

export default RentItemDetailRating