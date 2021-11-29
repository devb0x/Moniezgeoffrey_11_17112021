import React, {Component} from "react"

import './RentItemDetail.css'

class RentItemDetail extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <p>placeholder for rentItemDetail</p>
        <p>{this.props.items[0].id}</p>
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