import React from 'react'
import { Link } from "react-router-dom";
import single from "../assets/BAIRO_hero/single.png"

const Cards = () => {
  return (


      <section className="top-selling">
            <div className="top-selling-inner">
              <h3 className="top-selling-title">Top Selling</h3>
              <div className="cards">
                 <Link  className='card-item'>
        <img src={single} alt='' className='cards-img'/>
        <div className='cards-label'>
            <span className='cards-title'>title</span>
        </div>
    </Link>
                 <Link  className='card-item'>
        <img src={single} alt='' className='cards-img'/>
        <div className='cards-label'>
            <span className='cards-title'>title</span>
        </div>
    </Link>
                 <Link  className='card-item'>
        <img src={single} alt='' className='cards-img'/>
        <div className='cards-label'>
            <span className='cards-title'>title</span>
        </div>
    </Link>
                 <Link  className='card-item'>
        <img src={single} alt='' className='cards-img'/>
        <div className='cards-label'>
            <span className='cards-title'>title</span>
        </div>
    </Link>
              </div>
            </div>
          </section>
          
   
  )
}

export default Cards