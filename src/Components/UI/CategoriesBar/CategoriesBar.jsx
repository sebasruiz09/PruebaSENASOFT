import React from 'react'
import { AiOutlineLaptop  } from 'react-icons/ai';
import { BsMouse } from 'react-icons/bs'
import { GiOfficeChair } from 'react-icons/gi'
import { FiMonitor } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from "react-icons/hi"
import './CategoriesBar.scss'

export const CategoriesBar = () => {
  return (
    <div className="categories-bar-container">
        <div className="categories-content">
            <AiOutlineLaptop className='categorie-icon' />
            <p>laptops</p>
        </div>
        <div className="categories-content">
            <HiOutlineDesktopComputer className='categorie-icon'/>
            <p>PC gamer</p>
        </div>
        <div className="categories-content">
            <BsMouse className='categorie-icon'/>
            <p>Accesorios</p>
        </div>
        <div className="categories-content">
            <GiOfficeChair className='categorie-icon'/>
            <p>Set-up</p>
        </div>
        <div className="categories-content">
            <FiMonitor className='categorie-icon'/>
            <p>Complementos</p>
        </div>
    </div>
  )
}
