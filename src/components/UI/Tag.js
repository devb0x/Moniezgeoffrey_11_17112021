import React, { Component } from "react"

import styles from './Tag.module.css'

class Tag extends Component {
  render() {
    return (
      <li className={`${styles['tag']}`}>{this.props.tag}</li>
    )
  }
}

export default Tag