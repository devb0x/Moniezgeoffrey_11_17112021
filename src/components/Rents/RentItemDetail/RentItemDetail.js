import React, { Component } from "react"
import { Redirect } from "react-router-dom"

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
    this.getRent = this.getRent.bind(this)
    this.getTags = this.getTags.bind(this)
  }

  getRent() {
    const rent = this.props.items.filter(
      el => el.id === this.props.match.params.id
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
    if (!this.props.items.some(el => el.id === this.props.match.params.id)) {
      return <Redirect to={'/404'} />
    }

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
          <Collapse title="Description">
            <p className={`${styles['collapse-content']}`}>
              {this.state.rent.description}
            </p>
          </Collapse>
          <Collapse title="??quipements">
            <ul className={`${styles['collapse-content']}`}>
              {this.state.rent.equipments.map((el, index) => (
                <li key={index}>
                  {el}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>

      </div>
    )
  }

}

export default RentItemDetail