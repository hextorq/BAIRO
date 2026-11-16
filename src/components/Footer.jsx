import React from 'react'
import logo from "../assets/BAIRO_logo.png";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>


      <footer className="footer">

        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="BAIRO Logo" className="navbar-logo" />
        </Link>

        <h9>
          made with ❤️ by <a href="https://hextorq.tech" target="_blank" rel="noopener noreferrer">
            hextorq.
          </a>
        </h9>
        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <a href="/">Home</a>
          <a href="/collections">Collections</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/cart">Shopping Cart</a>
        </div>


<div className="socials">

  
        <a href="https://wa.me/918300924762" target="_blank" rel="noreferrer">
          WhatsApp
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        </div>
        <p>
          © 2026 - BAIRO Luxury Clothing | Premium and Organic Cotton, Eco-Friendly Fashion.
        </p>
      </footer>
    </>

  )
}

export default Footer

