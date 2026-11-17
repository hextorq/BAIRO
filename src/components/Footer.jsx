import React from "react";
import logo from "../assets/BAIRO_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={logo} alt="BAIRO Logo" className="navbar-logo" />
          </Link>

          <p className="made-by">
            made with ❤️ by{" "}
            <a
              href="https://hextorq.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              hextorq.
            </a>
          </p>
        </div>

        <div className="quick-links">
          <h3>QUICK LINKS</h3>
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="products">
          <h3> PRODUCTS</h3>
          <Link to="/collections">Men</Link>
          <Link to="/collections">Women</Link>
          <Link to="/collections">Kids</Link>
        </div>

        <div className="socials">
          <h3>FOLLOW US</h3>
          <Link to="https://wa.me/918300924762" target="_blank" rel="noreferrer">
            WhatsApp
          </Link>

          <Link to="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </Link>

          <Link to="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </Link>
        </div>
      </div>

      <p className="copyright">
        © 2026 - BAIRO Luxury Clothing | Premium and Organic Cotton,
        Eco-Friendly Fashion.
      </p>
    </footer>
  );
};

export default Footer;
