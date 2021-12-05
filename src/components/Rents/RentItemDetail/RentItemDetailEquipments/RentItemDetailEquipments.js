import React, { Component } from "react"

import styles from "../RentItemDetail.module.css"

class RentItemDetailEquipments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }

  toggleHandler() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className={`${styles['equipments-wrapper']}`}>
        <button onClick={this.toggleHandler}>Équipements <span>></span></button>
          {this.state.isOpen &&
            <ul>

              {this.props.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          }
      </div>
  )
  }
}

export default RentItemDetailEquipments