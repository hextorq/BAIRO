import React from 'react'
import { Link } from 'react-router-dom'
import single from "../assets/BAIRO_hero/single.png"


const Catcard = () => {
  return (
    <div className='cat-card'>
        <img src={single} alt='single' className='cat-card-img'/>
        <Link  className='cat-card-btn'>Xl</Link>
    </div>
  )
}

export default Catcard