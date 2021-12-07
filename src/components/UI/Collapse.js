import React, {Component} from "react"

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
      <div className={`${styles['wrapper']}`}>
        <button
          className={`${styles['button']}`}
          onClick={this.toggleHandler}
        >
          {this.props.title}
          <span className={`${styles['arrow']}`}>
            <i className="fa fa-chevron-down" />
          </span>
        </button>

        { (this.props.title === "Équipements" && this.state.isOpen) &&
          <ul className={`${styles['collapse-content']}`}>
            {this.props.data.map((el, index) => (
              <li key={index}>
                {el}
              </li>
            ))}
          </ul>
        }

        { (this.props.title !== "Équipements" && this.state.isOpen) &&
        <p className={`${styles['collapse-content']}`}>
          {this.props.data}
        </p>
        }
      </div>
    )
  }
}

export default Collapse