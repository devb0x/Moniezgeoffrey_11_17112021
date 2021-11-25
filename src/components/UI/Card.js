import React, {Component} from "react"

import './Card.css'

class Card extends Component {
  render() {
    return (
      <div className={'card ' + this.props.className}>
        {this.props.children}
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