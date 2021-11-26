import React, {Component} from "react"

import './RentItemDetail.css'

class RentItemDetail extends Component {
  render() {
    return (
      <div>
        <p>placeholder for rentItemDetail</p>
        <p>{this.params.rentId}</p>
      </div>
    )
  }
}

// const RentItemDetail = () => {
//   const params = useParams()
//
//   return (
//     <div>
//       <p>placeholder for rentItemDetail</p>
//       <p>{params.rentId}</p>
//     </div>
//   )
// }

export default RentItemDetail