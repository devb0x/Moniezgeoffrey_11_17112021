import React from "react"
import { useParams } from "react-router-dom"

import './RentItemDetail.css'

const RentItemDetail = () => {
  const params = useParams()

  return (
    <div>
      <p>placeholder for rentItemDetail</p>
      <p>{params.rentId}</p>
    </div>
  )
}

export default RentItemDetail