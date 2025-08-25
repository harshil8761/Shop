import React from "react";
import "./Footer.css";
const Footer = () => {
    const now = new Date();
    const year = now.getFullYear()
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col footer-left">
          <h2>T SHOP</h2>
          <p>info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
        </div>
        <div className="footer-col">
          <h3>Shop</h3>
          <p>New</p>
          <p>Woman</p>
          <p>Men</p>
        </div>
        <div className="footer-col">
          <h3>Our Store</h3>
          <p>About Us</p>
          <p>Subscribe</p>
          <p>FAQ</p>
        </div>
        <div className="footer-col">
          <h3>Terms & Conditions</h3>
          <p>Store Policy</p>
          <p>Shipping & Returns</p>
          <p>Payment Methods</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {year} by T Shop. Powered and secured by GH
      </div>
    </footer>
  );
};

export default Footer;
