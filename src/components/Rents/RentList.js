import React from "react"

import './RentList.css'
import RentItem from "./RentItem"

const RentList = (props) => {
  console.log(props)

  return (
    <ul className="rents-list">
      {props.items.map(rent => (
        <RentItem
          key={rent.id}
          title={rent.title}
          cover={rent.cover}
        />
      ))}
    </ul>
  )
}

export default RentList