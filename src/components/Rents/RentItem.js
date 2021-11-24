import React from "react"

import './RentItem.css'
import Card from "../UI/Card"
import {Link} from "react-router-dom"

const RentItem = (props) => {
  return (
    <li>
      <Link to={`/rents/rent=${props.id}`}>
        <Card className="rent-item">
          <img
            className="rent-item__thumbnail"
            src={props.cover}
            alt={props.title}
          />
          <div className="rent-item__title">
            {props.title}
          </div>
        </Card>
      </Link>
    </li>
  )
}

export default RentItem