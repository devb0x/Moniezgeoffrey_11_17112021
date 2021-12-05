import React, {Component} from "react"

import styles from "./RentItemDetail.module.css"

class RentDescription extends Component {
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
      <div className={`${styles['test']}`}>
        <button
          className={`${styles['test']}`}
          onClick={this.toggleHandler}
        >
          Description <span className={`${styles['arrow']}`}>></span>
        </button>
        {this.state.isOpen &&
          <p>
            {this.props.desc}
          </p>
        }
      </div>
    )
  }
}

export default RentDescription