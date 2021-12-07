import React, {Component} from "react"

import styles from './RentItemDetail.module.css'
import Tag from "../../UI/Tag"
import RentItemDetailRating from "./RentItemDetailRating/RentItemDetailRating"
import Collapse from "../../UI/Collapse"
import Carrousel from "../../UI/Carrousel"

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

        <Carrousel pictures={this.state.rent.pictures}/>

        <div className={`${styles['container']}`}>

          <div className={`${styles['rent-infos__wrapper']}`}>
            <h1 className={`${styles['rent-title']}`}>
              {this.state.rent.title}
            </h1>
            <div className={`${styles['rent-location']}`}>
              {this.state.rent.location}
            </div>
            <div className={`${styles['rent-tags']}`}>
              {this.getTags()}
            </div>
          </div>
          <div className={`${styles['rent-owner__wrapper']}`}>
            <RentItemDetailRating value={this.state.rent.rating}/>
            <div className={`${styles['flex']}`}>
              <div className={`${styles['owner']}`}>
                {this.state.rent.host.name}
              </div>
              <img
                className={`${styles['owner-img']}`}
                src={this.state.rent.host.picture}
                alt={this.state.rent.host.name}/>
            </div>
          </div>

        </div>

        <div className={`${styles['grid']}`}>
          <Collapse
            title="Description"
            data={this.state.rent.description}
          />
          <Collapse
            title="Équipements"
            data={this.state.rent.equipments}
          />
        </div>

      </div>
    )
  }

}

export default RentItemDetail