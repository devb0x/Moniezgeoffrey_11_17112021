import React, {Component} from "react"

import './RentList.css'
import RentItem from "./RentItem"

class RentList extends Component {
  render() {
    return (
      <ul className="rents-list">
        {this.props.items.map(rent => (
          <RentItem
            key={rent.id}
            id={rent.id}
            title={rent.title}
            cover={rent.cover}
          />
        ))}
      </ul>
    )
  }
}

// const RentList = (props) => {
//   console.log(props)
//
//   return (
//     <ul className="rents-list">
//       {props.items.map(rent => (
//           <RentItem
//             key={rent.id}
//             id={rent.id}
//             title={rent.title}
//             cover={rent.cover}
//           />
//       ))}
//     </ul>
//   )
// }

export default RentList