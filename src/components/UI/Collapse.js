import React, {Component} from "react"
import styles from "../Rents/RentItemDetail/RentItemDetail.module.css"

class Collapse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    console.log(this.props)
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
          className={`${styles['undefined']}`}
          onClick={this.toggleHandler}
        >
          {this.props.title} <span className={`${styles['arrow']}`}>></span>
        </button>
        {/*{ (this.state.isOpen && this.props.title === 'Équipements') ?*/}
        {/*  <ul>*/}
        {/*    <li>*/}
        {/*      test*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*  :*/}
        {/*    <p>{this.props.data}</p>*/}
        {/*  }*/}
        {/*}*/}

        { (this.props.title === "Équipements" && this.state.isOpen) &&
          <ul>
            {this.props.data.map((el, index) => (
              <li key={index}>
                {el}
              </li>
            ))}
          </ul>
        }

        { (this.props.title !== "Équipements" && this.state.isOpen) &&
        <p>
          {this.props.data}
        </p>
        }
      </div>
    )
  }
}

export default Collapse