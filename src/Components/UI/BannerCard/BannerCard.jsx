import React from 'react'
import "./BannerCard.scss"

export const BannerCard = ({ title , image , description }) => {
  return (
    <div className="card-container">
        <h3>{ title }</h3>
        <div className="card-img-content">
            <img src={image} alt={title} />
        </div>
        <p>{ description }</p>
        <button>ver mas</button>
    </div>
  )
}
