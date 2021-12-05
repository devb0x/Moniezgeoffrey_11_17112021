import React, { Component } from "react"

import "./RentItemDetailRating.css"

class RentItemDetailRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: parseInt(this.props.value)
    }
    console.log(this.props.value)
    console.log(typeof this.state.rating)
  }

  render() {
    const star = []
    for (let i = 0; i < this.state.rating; i++) {
      star.push(i)
    }
    const emptyStar = []
    for (let i = star.length; i < 5; i++) {
      emptyStar.push(i)
    }
    console.log(star)
    console.log(star.length)
    console.log(emptyStar)
    console.log(emptyStar.length)

    return (
      <div>
        {star.map(index => (
          <i key={index} className="fa fa-star" />
        ))}
        {emptyStar.map(index => (
          <i key={index} className="fa fa-star gray" />
        ))}
      </div>
    )
  }

}

export default RentItemDetailRating