import React, { Component } from "react"

import style from "./RentItemDetailEquipments.module.css"

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
      <div className={`${style['equipments-wrapper']}`}>
       {/* <div className={style['equipments-wrapper']}> */}
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