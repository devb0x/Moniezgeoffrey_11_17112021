import React, { Component } from "react"

import styles from './Collapse.module.css'

class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }

  toggleHandler() {
    this.setState((prevState) => {
      return {isOpen: !prevState.isOpen}
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <button
          className={`${styles['button']}`}
          onClick={this.toggleHandler}
        >
          {this.props.title}
          <span className={`${styles['arrow']} ${this.state.isOpen && styles.rotate} `} >
            <i className="fa fa-chevron-down" />
          </span>
        </button>
        {this.state.isOpen && this.props.children}
      </div>
    )
  }
}

export default Collapse