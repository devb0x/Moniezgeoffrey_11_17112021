import React, { Component } from "react"

import styles from './Carrousel.module.css'

class Carrousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: this.props.pictures,
      index: 0
    }
    this.nextPictureHandler = this.nextPictureHandler.bind(this)
    this.prevPictureHandler = this.prevPictureHandler.bind(this)
  }

  nextPictureHandler() {
    this.setState((prevState) => {
    const newIndex = prevState.index === this.props.pictures.length - 1
        ? 0
        : this.state.index + 1
      return {
        index: newIndex
      }
    })
  }

  prevPictureHandler() {
    this.setState((prevState) => {
      const newIndex = prevState.index === 0
        ? this.props.pictures.length - 1
        : this.state.index - 1
      return {
        index: newIndex
      }
    })
  }

  render() {
    return (
      <div className={`${styles['carrousel']}`}>
        <div className={`${styles['wrapper-arrow']}`}>
          <i className="fa fa-chevron-left"
             onClick={this.prevPictureHandler} />
          <i className="fa fa-chevron-right"
             onClick={this.nextPictureHandler} />
        </div>
        <img
          className={`${styles['carrousel-img']}`}
          src={this.props.pictures[this.state.index]}
          alt=""
        />
      </div>
    )
  }
}

export default Carrousel