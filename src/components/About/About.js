import React, { Component } from "react"

import Collapse from "../UI/Collapse"
import styles from "./About.module.css"

class About extends Component {
  render() {
    let about = [
      {
        category: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements," +
          "et toutes les informations sont régulièrement vérifiées par nos équipes."
      },
      {
        category: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation" +
          "du voisinage entraînera une exclusion de notre plateforme."
      },
      {
        category: "Service",
        text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous" +
          "contacter si vous avez la moindre question."
      },
      {
        category: "Sécurité",
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond" +
          "aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet" +
          "à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la" +
          "sécurité domestique pour nos hôtes."
      }
    ]

    return (
      <section className={`${styles['section']}`}>
        <header>
          <img
            className={`${styles['img']}`}
            src={require("../../public/assets/img/gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg")}
            alt="paysage"/>
          <div className={`${styles['background']}`} />
        </header>

        {about.map((item, index) => {
          return (
            <Collapse key={index} title={item.category}>
              <p>
                {item.text}
              </p>
            </Collapse>
          )
        })}
      </section>
    )
  }

}

export default About