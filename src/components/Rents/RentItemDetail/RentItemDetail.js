import React, {Component} from "react"

import styles from './RentItemDetail.module.css'
import Tag from "../../UI/Tag"
import RentItemDetailRating from "./RentItemDetailRating/RentItemDetailRating"
import Collapse from "../../UI/Collapse"

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
          <RentItemDetailRating value={this.state.rent.rating}/>
          <span>
            <div>{this.state.rent.host.name}</div>
            <img
              src={this.state.rent.host.picture}
              alt={this.state.rent.host.name}/>
          </span>
        </div>

        <div>
          <Collapse title="Description" data={this.state.rent.description}/>
          {/*<ul></ul>*/}
          <Collapse title="Équipements" data={this.state.rent.equipments}/>
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