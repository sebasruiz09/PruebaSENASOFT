import React from 'react'
import { BannerCard } from '../../../UI/BannerCard/BannerCard'
import "./Main.scss"
import image from "../../../../Images/acc2.jpg"
import laptop from "../../../../Images/port2.jpg"
import accesories from "../../../../Images/acc3.jpg"

export const Main = () => {
  return (
    <> 
    <h2 className='main-title'>Nuestras categorias</h2>
    <div className="main-container">
      <BannerCard title={"Computadores de mesa"} image={image} description={"Variedad en diseños"} />
      <BannerCard title={"Computadores Portatiles"} image={laptop} description={"Todas las marcas"} />
      <BannerCard title={"Accesorios para computador"} image={accesories} description={"Los mejores componentes"} />
    </div></>

  )
}
