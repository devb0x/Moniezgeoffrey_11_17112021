import React, {Component} from "react"

import styles from "../RentItemDetail.module.css"

class RentItemDetailDescription extends Component {
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
      <div className={`${styles['test']}`}>
        <button
          className={`${styles['undefinedtoo']}`}
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

export default RentItemDetailDescription