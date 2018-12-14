import React from 'react'
import {Link} from "react-router-dom"

const DogBox = ({_id, breed, image, size}) => (
    <div className="dog-box">
      <h2>{breed}</h2>
      <img src={image} width="300px" height="350px"/>
      <Link to={`/dogs/${_id}`}>
        <button className="btn">Info</button>
      </Link>
    </div>
  )

export default DogBox