import React from "react"

import './RentItem.css'
import Card from "../UI/Card"

const RentItem = (props) => {
  console.log(props.cover)
  return (
    <li>
      <Card className="rent-item">
        <img
          className="rent-item__thumbnail"
          src={props.cover}
          alt={props.title}/>
        <div className="rent-item__title">
          {props.title}
        </div>
      </Card>
    </li>
  )
}

export default RentItem