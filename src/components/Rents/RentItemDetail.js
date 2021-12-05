import React, {Component} from "react"

import styles from './RentItemDetail.module.css'
import Tag from "../UI/Tag"
import RentDescription from "./RentDescription"
import RentEquipments from "./RentEquipments"

class RentItemDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rent: this.getRent()
    }
  }

  getRent() {
    const rent = this.props.items.filter(
      el =>
        el.id === this.props.match.params.id
    )
    return rent[0]
  }

  getTags = () => {
    return (
      <ul>
        {this.state.rent.tags.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </ul>
    )
  }

  render() {
    return (

      <div className={`${styles['rent-wrapper']}`}>

        <div>
          <img
            className={`${styles['carrousel-img']}`}
            src={this.state.rent.cover}
            alt=""
          />
          <h1 className={`${styles['rent-title']}`}>{this.state.rent.title}</h1>
          <div className={`${styles['rent-location']}`}>{this.state.rent.location}</div>
          <div className={`${styles['rent-tags']}`}>{this.getTags()}</div>
        </div>

        <div>
          <p>rating: {this.state.rent.rating}</p>
          <span>
            <div>{this.state.rent.host.name}</div>
            <img
              src={this.state.rent.host.picture}
              alt={this.state.rent.host.name}/>
          </span>
        </div>

        <div>
          <RentDescription desc={this.state.rent.description}/>
          <RentEquipments items={this.state.rent.equipments}/>
        </div>

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