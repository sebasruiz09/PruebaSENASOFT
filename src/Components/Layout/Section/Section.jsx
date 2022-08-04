import React from 'react'
import { BannerCard } from '../../UI/BannerCard/BannerCard'
import "./Section.scss"
import { BiSearchAlt } from "react-icons/bi"

export const Section = () => {
    return (
        <div className="section-container">
            <div className="section-content">
                <h2>La mejor alternativa para tu set up</h2>
                <h1>Bienvenido</h1>
                <div className="search-container">
                <input type="text" placeholder='¿que deseas buscar hoy?' />
                <BiSearchAlt className='search-icon' />
            </div>
            <p>Te ofrecemos la mejor calidad en dispositivos periféricos de alta calidad, con la mejor variedad directamente de las tiendas oficiales</p>
            </div>
            
        </div>

    )
}
