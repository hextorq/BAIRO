import React from 'react'
import { Link } from "react-router-dom";
import single from "../assets/BAIRO_hero/single.png"

const Cards = () => {
  return (
    <Link  className='card-item'>
        <img src={single} alt='' className='cards-img'/>
        <div className='cards-label'>
            <span className='cards-title'>title</span>
        </div>
    </Link>
  )
}

export default Cards