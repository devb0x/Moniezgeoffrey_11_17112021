import React, {Component} from "react"

import './RentItem.css'
import Card from "../UI/Card"
import {Link, Route} from "react-router-dom"

class RentItem extends Component {
  render() {
    // console.log('inside rend item component')
    // console.log(this.props.id)

    return (
      <li>
        {/* <Route path={`/rents/rent=${this.props.id}`}> */}
        {/*<Link to={"/rents/rentsDetail"}>*/}
          <Card id={this.props.id} className="rent-item">
            <img
              className="rent-item__thumbnail"
              src={this.props.cover}
              alt={this.props.title}
            />
            <div className="rent-item__title">
              {this.props.title}
            </div>
          </Card>
        {/* </Route> */}
      </li>
    )
  }
}

// const RentItem = (props) => {
//   return (
//     <li>
//       <Link to={`/rents/rent=${props.id}`}>
//         <Card className="rent-item">
//           <img
//             className="rent-item__thumbnail"
//             src={props.cover}
//             alt={props.title}
//           />
//           <div className="rent-item__title">
//             {props.title}
//           </div>
//         </Card>
//       </Link>
//     </li>
//   )
// }

export default RentItem