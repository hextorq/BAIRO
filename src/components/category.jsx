import React from 'react'
import { Link } from 'react-router-dom'
import regular from "../assets/category_img/black-tshirt.png"
import polo from "../assets/category_img/polo-shirt.jpg"
import hoodie from "../assets/category_img/hoodie.png"
import oversized from "../assets/category_img/navy-tshirt.png"


const Catcard = () => {
  return (

      <section className="categories">
            <div className="categories-inner">
              <h3 className="categories-title">Shop by Category</h3>
              <div className="cat-grid">
                 <div className='cat-card'>
        <img src={regular} alt='Regular T-shirt' className='cat-card-img'/>
        <Link  className='cat-card-btn'>Regular-T</Link>
    </div>
                 <div className='cat-card'>
        <img src={polo} alt='Polo shirt' className='cat-card-img'/>
        <Link  className='cat-card-btn'>Polo</Link>
    </div>
                 <div className='cat-card'>
        <img src={hoodie} alt='Hoodie' className='cat-card-img'/>
        <Link  className='cat-card-btn'>Hoodie</Link>
    </div>
                 <div className='cat-card'>
        <img src={oversized} alt='Oversized T-shirt' className='cat-card-img'/>
        <Link  className='cat-card-btn'>Oversized-T</Link>
    </div>
              </div>
            </div>
          </section>
   
  )
}

export default Catcard
