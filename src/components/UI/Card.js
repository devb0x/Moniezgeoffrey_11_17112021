import React, {Component} from "react"
import { Link } from "react-router-dom";
import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className={'card ' + this.props.className}>
        <Link to={`/rents/${this.props.id}`} >
          {this.props.children}
        </Link>
      </div>

    )
  }
}

// const Card = (props) => {
//   const classes = 'card ' + props.className
//   return (
//     <div className={classes}>
//       {props.children}
//     </div>
//   )
//
// }

export default Card