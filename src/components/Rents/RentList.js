import React, { Component } from "react"

import RentItem from "./RentItem"
import styles from './RentList.module.css'

class RentList extends Component {
  render() {
    return (
      <ul className={`${styles['rents-list']}`}>
        {this.props.items.map(rent => (
          <RentItem
            key={rent.id}
            id={rent.id}
            title={rent.title}
            cover={rent.cover}
            pictures={rent.pictures}
            description={rent.description}
            host={rent.host}
            rating={rent.rating}
            location={rent.location}
            equipments={rent.equipments}
            tags={rent.tags}
          />
        ))}
      </ul>

    )
  }
}

export default RentList