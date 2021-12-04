import React, { Component } from "react"

class Tag extends Component {
  render() {
    return (
      <li>{this.props.tag}</li>
    )
  }
}

export default Tag